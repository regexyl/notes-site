import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

interface ArticleTitleOptions {
  hideOnRoot: boolean
}

export default ((opts?: Partial<ArticleTitleOptions>) => {
  function ArticleTitle({ fileData, displayClass }: QuartzComponentProps) {
    if (opts?.hideOnRoot && fileData.slug === "index") {
      return <></>
    }

    const title = fileData.frontmatter?.title
    if (title) {
      return <h1 class={`article-title ${displayClass ?? ""}`}>{title}</h1>
    } else {
      return null
    }
  }
  ArticleTitle.css = `
  .article-title {
    margin: 2rem 0 0 0;
  }
  `

  return ArticleTitle
}) satisfies QuartzComponentConstructor
