import * as ExternalPlugin from "./.quartz/plugins"
import { customImage } from "./quartz/components/og" // Ensure export name matches your file
import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"

// Must be called BEFORE loadQuartzConfig()
ExternalPlugin.CustomOgImages({
  colorScheme: "darkMode",
  width: 1200,
  height: 630,
  excludeRoot: false,
  imageStructure: customImage,
})

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()
