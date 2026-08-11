import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import * as ExternalPlugin from "./.quartz/plugins"

// Retrieve Explorer from the registered plugin registry
const Explorer = 
  ExternalPlugin.plugins["explorer"]?.Explorer ?? 
  ExternalPlugin.plugins["@quartz-community/explorer"]?.Explorer ??
  (ExternalPlugin as Record<string, any>).Explorer

if (Explorer) {
  Explorer({
    sortFn: (a, b) => {
      const customFolderOrder = [
        "Meet the Heroes",
        "NPCs",
        "Organizations",
        "Locations",
        "Session Journals",
      ]

      const nameA = a.displayName ?? a.name
      const nameB = b.displayName ?? b.name

      // 1. Keep folders positioned above individual files
      const isFolderA = !a.file
      const isFolderB = !b.file

      if (isFolderA && !isFolderB) return -1
      if (!isFolderA && isFolderB) return 1

      // 2. Apply custom folder ordering
      if (isFolderA && isFolderB) {
        const idxA = customFolderOrder.indexOf(nameA)
        const idxB = customFolderOrder.indexOf(nameB)

        if (idxA !== -1 && idxB !== -1) return idxA - idxB
        if (idxA !== -1) return -1
        if (idxB !== -1) return 1

        return nameA.localeCompare(nameB, undefined, { numeric: true })
      }

      // 3. Alphabetical order for files within folders
      return nameA.localeCompare(nameB, undefined, { numeric: true })
    },
    order: ["filter", "map", "sort"],
  })
}

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()