import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import * as ExternalPlugin from "./.quartz/plugins"
import type { ExplorerOptions } from "./.quartz/plugins"

const sortFn: ExplorerOptions["sortFn"] = (a, b) => {
  const customFolderOrder = [
    "Meet the Heroes",
    "NPCs",
    "Organizations",
    "Locations",
    "Session Journals",
  ]

  // 1. If both are folders, apply custom folder ordering
  if (a.isFolder && b.isFolder) {
    const idxA = customFolderOrder.indexOf(a.displayName)
    const idxB = customFolderOrder.indexOf(b.displayName)

    if (idxA !== -1 && idxB !== -1) return idxA - idxB
    if (idxA !== -1) return -1
    if (idxB !== -1) return 1

    return a.displayName.localeCompare(b.displayName, undefined, { numeric: true })
  }

  // 2. Keep folders above files
  if (a.isFolder && !b.isFolder) return -1
  if (!a.isFolder && b.isFolder) return 1

  // 3. Alphabetical order for files within folders
  return a.displayName.localeCompare(b.displayName, undefined, { numeric: true })
}

ExternalPlugin.Explorer({
  sortFn,
})

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()