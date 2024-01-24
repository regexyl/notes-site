import { htmlToJsx } from "../../util/jsx"
import Explorer from "../Explorer"
import MobileOnly from "../MobileOnly"
import { QuartzComponentConstructor, QuartzComponentProps } from "../types"

function Content({
  fileData,
  tree,
  displayClass,
  allFiles,
  externalResources,
  cfg,
  children,
}: QuartzComponentProps) {
  const content = htmlToJsx(fileData.filePath!, tree)
  const ExplorerComponent = Explorer({
    title: "Recent writings",
    filterFn: (node) => {
      return node.name != "regexyl"
    },
  })

  return (
    <>
      <article class="popover-hint">{content}</article>
      {fileData.slug === "index" && (
        <div className={"mobile-only"} style={{ marginTop: "5rem" }}>
          <ExplorerComponent
            fileData={fileData}
            cfg={cfg}
            tree={tree}
            allFiles={allFiles}
            displayClass={displayClass}
            externalResources={externalResources}
            children={children}
          />
        </div>
      )}
    </>
  )
}

export default (() => Content) satisfies QuartzComponentConstructor
