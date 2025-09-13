import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  const common = (await import(`./messages/${locale}/common.json`)).default;

  return {
    locale,
    messages: {
      Landing: (await import(`./messages/${locale}/Landing.json`)).default,
      Pricing: (await import(`./messages/${locale}/Pricing.json`)).default,

      GenImageShared: (await import(`./messages/${locale}/GenImageShared.json`)).default,
      FluxKontextPro: (await import(`./messages/${locale}/FluxKontextPro.json`)).default,
      MultiImageKontextPro: (await import(`./messages/${locale}/MultiImageKontextPro.json`)).default,
      PhotoToChinesePainting: (await import(`./messages/${locale}/PhotoToChinesePainting.json`)).default,
      PhotoTo3DCartoon: (await import(`./messages/${locale}/PhotoTo3DCartoon.json`)).default,
      PhotoToCaricature: (await import(`./messages/${locale}/PhotoToCaricature.json`)).default,
      PhotoToCartoonDrawing: (await import(`./messages/${locale}/PhotoToCartoonDrawing.json`)).default,
      PhotoToColoringPage: (await import(`./messages/${locale}/PhotoToColoringPage.json`)).default,
      PhotoToIllustration: (await import(`./messages/${locale}/PhotoToIllustration.json`)).default,
      PhotoToLineArt: (await import(`./messages/${locale}/PhotoToLineArt.json`)).default,
      PhotoToLineSketch: (await import(`./messages/${locale}/PhotoToLineSketch.json`)).default,
      PhotoToOilPainting: (await import(`./messages/${locale}/PhotoToOilPainting.json`)).default,
      PhotoToPencilSketch: (await import(`./messages/${locale}/PhotoToPencilSketch.json`)).default,
      PhotoToPopArt: (await import(`./messages/${locale}/PhotoToPopArt.json`)).default,
      PhotoToVintage: (await import(`./messages/${locale}/PhotoToVintage.json`)).default,
      PhotoToWatercolor: (await import(`./messages/${locale}/PhotoToWatercolor.json`)).default,
      PortraitArt: (await import(`./messages/${locale}/PortraitArt.json`)).default,
      PortraitGiftForFatherDay: (await import(`./messages/${locale}/PortraitGiftForFatherDay.json`)).default,
      PortraitGiftForHoliday: (await import(`./messages/${locale}/PortraitGiftForHoliday.json`)).default,
      PortraitGiftForMotherDay: (await import(`./messages/${locale}/PortraitGiftForMotherDay.json`)).default,
      PortraitGiftForValentineDay: (await import(`./messages/${locale}/PortraitGiftForValentineDay.json`)).default,
      SceneryPhotoToArt: (await import(`./messages/${locale}/SceneryPhotoToArt.json`)).default,
      SportsPortrait: (await import(`./messages/${locale}/SportsPortrait.json`)).default,
      WeddingPortrait: (await import(`./messages/${locale}/WeddingPortrait.json`)).default,
      PhotoToSculpture: (await import(`./messages/${locale}/PhotoToSculpture.json`)).default,
      PhotoToVibrant: (await import(`./messages/${locale}/PhotoToVibrant.json`)).default,

      // Dashboard - User
      CreditHistory: (await import(`./messages/${locale}/Dashboard/User/CreditHistory.json`)).default,
      Settings: (await import(`./messages/${locale}/Dashboard/User/Settings.json`)).default,
      Subscription: (await import(`./messages/${locale}/Dashboard/User/Subscription.json`)).default,
      ImageHistory: (await import(`./messages/${locale}/Dashboard/User/ImageHistory.json`)).default,

      // Dashboard - Admin
      Overview: (await import(`./messages/${locale}/Dashboard/Admin/Overview.json`)).default,
      DashboardBlogs: (await import(`./messages/${locale}/Dashboard/Admin/Blogs.json`)).default,
      ImageJobs: (await import(`./messages/${locale}/Dashboard/Admin/ImageJobs.json`)).default,
      Users: (await import(`./messages/${locale}/Dashboard/Admin/Users.json`)).default,
      Orders: (await import(`./messages/${locale}/Dashboard/Admin/Orders.json`)).default,
      R2Files: (await import(`./messages/${locale}/Dashboard/Admin/R2Files.json`)).default,
      Prices: (await import(`./messages/${locale}/Dashboard/Admin/Prices.json`)).default,
      // common
      ...common
    }
  };
});