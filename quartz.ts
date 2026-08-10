import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()

import * as ExternalPlugin from "./.quartz/plugins"
import { customOgImage } from "./quartz/components/custom-og"

ExternalPlugin.CustomOgImages({
  colorScheme: "darkMode", // or "lightMode"
  width: 1200,
  height: 630,
  excludeRoot: false,
  imageStructure: customOgImage,
})
