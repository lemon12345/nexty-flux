"use client";

import { pacifico } from "@/app/fonts";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useAuth } from "@/components/providers/AuthProvider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link as I18nLink } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { HeaderLink } from "@/types/common";
import { ChevronDown, Menu } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { UserInfo } from "./UserInfo";

export default function MobileMenu() {
  const t = useTranslations("Home");
  const tHeader = useTranslations("Header");
  const { user } = useAuth();

  const headerLinks: HeaderLink[] = tHeader.raw("links");
  const pricingLink = headerLinks.find((link) => link.name === "Pricing");
  if (pricingLink) {
    pricingLink.href = process.env.NEXT_PUBLIC_PRICING_PATH!;
  }

  // Art styles dropdown items - 包含肖像和各种艺术风格
  const photoTypes = [
    { name: "Portrait Art", href: "/portrait-art" },
    { name: "Oil Painting", href: "/oil-painting" },
    { name: "Pencil Sketch", href: "/sketch-drawing" },
    { name: "Line Sketch", href: "/image-line" },
    { name: "Line Art", href: "/line-art" },
    { name: "Coloring Page", href: "/coloring-pages" },
    { name: "Cartoon 3D", href: "/photo-to-3d-cartoon" },
    { name: "Cartoon 2D", href: "/cute-drawings" },
    { name: "Vintage Style", href: "/photo-to-vintage" },
    { name: "Vibrant Style", href: "/photo-to-vibrant" },
    { name: "Sculpture Style", href: "/photo-to-sculpture" },
    { name: "Caricature", href: "/photo-to-caricature" },
  ];

  return (
    <div className="flex items-center">
      <LocaleSwitcher />
      <ThemeToggle />
      <DropdownMenu>
        <DropdownMenuTrigger className="p-2">
          <Menu className="h-5 w-5" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-64">
          <DropdownMenuLabel>
            <I18nLink
              href="/"
              title={t("title")}
              prefetch={true}
              className="flex items-center space-x-2"
            >
              <Image
                alt={t("title")}
                src="/logo.svg"
                className="w-6 h-6"
                width={32}
                height={32}
              />
              <span className={cn("gradient-text", pacifico.className)}>
                {t("title")}
              </span>
            </I18nLink>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          {user ? (
            <>
              <UserInfo
                mobile
                renderContainer={(children) => (
                  <DropdownMenuLabel className="font-normal">
                    {children}
                  </DropdownMenuLabel>
                )}
              />
            </>
          ) : (
            <DropdownMenuItem asChild>
              <UserInfo mobile />
            </DropdownMenuItem>
          )}
          <DropdownMenuSeparator />

          {/* Art Styles & Photo Types Submenu */}
          <DropdownMenuSub>
            <DropdownMenuSubTrigger className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="font-medium text-gray-700">Art Styles</span>
              </div>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent className="w-80 max-h-96 overflow-y-auto bg-white/95 backdrop-blur-md border-0 shadow-xl rounded-xl p-3 ml-2">
              <div className="px-2 py-1">
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4 px-2">
                  Choose Your Art Style
                </div>
                {photoTypes.map((type) => (
                  <DropdownMenuItem key={type.name} asChild className="mb-2">
                    <I18nLink
                      href={type.href}
                      className="w-full px-4 py-3 rounded-xl text-left hover:bg-gray-50 transition-all duration-200 cursor-pointer flex items-start gap-3 group"
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center group-hover:from-purple-200 group-hover:to-pink-200 transition-colors">
                        <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors">
                          {type.name}
                        </div>
                        <div className="text-sm text-gray-500 mt-0.5">
                          Transform your photos into {type.name.toLowerCase()} style
                        </div>
                      </div>
                    </I18nLink>
                  </DropdownMenuItem>
                ))}
              </div>
            </DropdownMenuSubContent>
          </DropdownMenuSub>

          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            {headerLinks.map((link) => (
              <DropdownMenuItem key={link.name}>
                <I18nLink
                  href={link.href}
                  title={link.name}
                  prefetch={
                    link.target && link.target === "_blank" ? false : true
                  }
                  target={link.target || "_self"}
                  rel={link.rel || undefined}
                >
                  {link.name}
                </I18nLink>
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
