import { SiteConfig } from "@/types/siteConfig";

export const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://nextyflux.com";

const TWITTER_EN = 'https://x.com/lemon2090432'
const TWITTER_ZH = 'https://x.com/lemon2090432'
const BSKY_URL = 'https://bsky.app/profile/nextyflux.bsky.social'
const EMAIL_URL = 'mailto:lemooon58@gmail.com'

export const siteConfig: SiteConfig = {
  name: 'Nexty Flux Image',
  url: BASE_URL,
  authors: [
    {
      name: "nextyflux.com",
      url: "https://nextyflux.com",
    }
  ],
  creator: '@judewei_dev',
  socialLinks: {
    bluesky: BSKY_URL,
    twitter: TWITTER_EN,
    twitterZh: TWITTER_ZH,
    email: EMAIL_URL,
  },
  themeColors: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  defaultNextTheme: 'light', // next-theme option: system | dark | light
  icons: {
    icon: "/favicon.ico",
    shortcut: "/logo.png",
    apple: "/logo.png", // apple-touch-icon.png
  },
}
