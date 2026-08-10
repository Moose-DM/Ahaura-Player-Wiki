import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()

import * as ExternalPlugin from "./.quartz/plugins"
import { customOgImage } from "./quartz/components/custom-og"

ExternalPlugin.CustomOgImages({
  colorScheme: "darkMode", // Important: set to darkMode to match the aesthetic. The code hardcodes colors, but this matches the intent.
  width: 1200,
  height: 630,
  excludeRoot: false,
  imageStructure: custom-ogImageUnified, // Call the unified component
})
