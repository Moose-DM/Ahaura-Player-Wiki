import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import * as ExternalPlugin from "./.quartz/plugins"
import { customOgImage } from "./quartz/components/custom-og"

// Custom OG Image Plugin Setup (Must execute before loadQuartzConfig)
ExternalPlugin.CustomOgImages({
  colorScheme: "darkMode",
  width: 1200,
  height: 630,
  excludeRoot: false,
  imageStructure: customOgImage,
})

// Default Quartz Config
const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()