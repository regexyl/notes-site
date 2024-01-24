import { formatDate, getDate } from "./Date"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import readingTime from "reading-time"

interface ContentMetadataOptions {
  hideOnRoot: boolean
}

export default ((opts?: Partial<ContentMetadataOptions>) => {
  function ContentMetadata({ cfg, fileData, displayClass }: QuartzComponentProps) {
    if (opts?.hideOnRoot && fileData.slug === "index") {
      return <></>
    }

    const text = fileData.text
    if (text) {
      const segments: string[] = []
      const { text: timeTaken, words: _words } = readingTime(text)

      if (fileData.dates) {
        segments.push(formatDate(getDate(cfg, fileData)!))
      }

      segments.push(timeTaken)
      return <p class={`content-meta ${displayClass ?? ""}`}>{segments.join(", ")}</p>
    } else {
      return null
    }
  }

  ContentMetadata.css = `
  .content-meta {
    margin-top: 0;
    color: var(--gray);
  }
  `
  return ContentMetadata
}) satisfies QuartzComponentConstructor
