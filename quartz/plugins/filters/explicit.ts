import { QuartzFilterPlugin } from "../types"

export const ExplicitPublish: QuartzFilterPlugin = () => ({
  name: "ExplicitPublish",
  shouldPublish(_ctx, [_tree, vfile]) {
    const publishFlag: boolean = convertStringToBoolean(vfile.data?.frontmatter?.publish) ?? false
    return publishFlag
  },
})

// Helpers

const convertStringToBoolean = (value: string) => {
  if (value === "true") return true
  if (value === "false") return false
  return undefined
}
