import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import * as ExternalPlugin from "./.quartz/plugins"

ExternalPlugin.Explorer({
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

      // Both folders are in the custom list
      if (idxA !== -1 && idxB !== -1) return idxA - idxB
      // Folder A takes priority over unlisted folders
      if (idxA !== -1) return -1
      // Folder B takes priority over unlisted folders
      if (idxB !== -1) return 1

      // Fallback: Alphabetical order for any unlisted folders
      return nameA.localeCompare(nameB, undefined, { numeric: true })
    }

    // 3. Alphabetical order for files inside folders
    return nameA.localeCompare(nameB, undefined, { numeric: true })
  },
  order: ["filter", "map", "sort"],
})

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()