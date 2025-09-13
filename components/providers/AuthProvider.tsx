"use client";

import { normalizeEmail } from "@/lib/email";
import { createClient } from "@/lib/supabase/client";
import { type User } from "@supabase/supabase-js";
import { redirect } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

type ExtendedUser = User & {
  role: "admin" | "user";
};

type AuthContextType = {
  user: ExtendedUser | null;
  loading: boolean;
  signInWithGoogle: (next?: string) => Promise<{
    data: any;
    error: any;
  }>;
  signInWithGithub: (next?: string) => Promise<{
    data: any;
    error: any;
  }>;
  signInWithEmail: (
    email: string,
    captchaToken?: string,
    next?: string
  ) => Promise<{
    data: any;
    error: any;
  }>;
  signOut: () => Promise<void>;
  refreshUser: () => Promise<void>;
  requireAuth: (callback?: () => void) => {
    isAuthenticated: boolean;
    reason: "loading" | "not_authenticated" | null;
  };
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<ExtendedUser | null>(null);
  const [loading, setLoading] = useState(true);

  const supabase = createClient();

  const fetchUserRole = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from("users")
        .select("role")
        .eq("id", userId)
        .limit(1)
        .maybeSingle();

      if (error) {
        console.error("Error fetching user role:", error);
        return null;
      }

      return data?.role || "user";
    } catch (error) {
      console.error("Error in fetchUserRole:", error);
      return "user";
    }
  };

  const handleUser = async (user: User | null) => {
    try {
      if (user) {
        const role = await fetchUserRole(user.id);

        const extendedUser = {
          ...user,
          role: role as "admin" | "user",
        };
        setUser(extendedUser);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error("Error in handleUser:", error);
      if (user) {
        setUser({
          ...user,
          role: "user",
        });
      } else {
        setUser(null);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // 立即检查用户状态
    const checkUser = async () => {
      try {
        const { data: { user }, error } = await supabase.auth.getUser();
        if (error) {
          console.error("Error getting user:", error);
          setUser(null);
        } else {
          await handleUser(user);
        }
      } catch (error) {
        console.error("Unexpected error getting user:", error);
        setUser(null);
      }
    };

    checkUser();

    // 监听认证状态变化
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, session) => {
      try {
        await handleUser(session?.user || null);
      } catch (error) {
        console.error("Error handling auth state change:", error);
        setUser(null);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (!user?.id) return;

    const userSubscription = supabase
      .channel("public:users")
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "users",
          filter: `id=eq.${user.id}`,
        },
        async (payload) => {
          setUser((prevUser) => {
            if (prevUser) {
              return {
                ...prevUser,
                role: payload.new.role,
              };
            }
            return prevUser;
          });
        }
      )
      .subscribe();

    return () => {
      userSubscription.unsubscribe();
    };
  }, [user?.id]);

  const signInWithGoogle = async (next?: string) => {
    return await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback?next=${next || ""
          }`,
      },
    });
  };

  const signInWithGithub = async (next?: string) => {
    return await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${window.location.origin}/auth/callback?next=${next || ""}`,
      },
    });
  };

  const signInWithEmail = async (
    email: string,
    captchaToken?: string,
    next?: string
  ) => {
    return await supabase.auth.signInWithOtp({
      email: normalizeEmail(email),
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback?next=${next || ""
          }`,
        captchaToken,
      },
    });
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    redirect("/");
  };

  const refreshUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    await handleUser(user);
  };

  // 通用认证检查函数
  const requireAuth = (callback?: () => void): {
    isAuthenticated: boolean;
    reason: "loading" | "not_authenticated" | null;
  } => {
    if (loading) {
      return { isAuthenticated: false, reason: "loading" as const };
    }

    if (!user) {
      return { isAuthenticated: false, reason: "not_authenticated" as const };
    }

    if (callback) {
      callback();
    }

    return { isAuthenticated: true, reason: null };
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signInWithGoogle,
        signInWithGithub,
        signInWithEmail,
        signOut,
        refreshUser,
        requireAuth
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
