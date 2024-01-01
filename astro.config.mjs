import { defineConfig } from "astro/config"

import tailwind from "@astrojs/tailwind"

// https://astro.build/config
export default defineConfig({
  site: "https://test-astro-i18n.vercel.app",
  integrations: [tailwind()],
  i18n: {
    defaultLocale: "en",
    locales: ["es", "en", "fr"],
    routing: {
      prefixDefaultLocale: true,
    }
  },
})
