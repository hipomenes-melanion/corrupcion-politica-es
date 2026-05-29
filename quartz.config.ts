import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Corrupción Política ES",
    pageTitleSuffix: "",
    provider: "local",
    locale: "en-US",
    baseUrl: "hipomenes-melanion.github.io/corrupcion-politica-es",
    ignorePatterns: [".obsidian", ".trash", "__tests__", "nodes_modules"],
    analytics: {
      provider: "plausible",
    },
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        light: {
          page: "#faf8f8",
          pageborder: "#e4e4e7",
          background: "#faf8f8",
          sidebar: "#f4f4f5",
          body: "#27272a",
          header: "#18181b",
          secondary: "#18181b",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#fff275",
        },
        dark: {
          page: "#161618",
          pageborder: "#27272a",
          background: "#161618",
          sidebar: "#1e1e20",
          body: "#d4d4d8",
          header: "#f4f4f5",
          secondary: "hsl(255, 90%, 76%)", 
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#b3aa02",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate(),
      Plugin.SyntaxHighlighting(),
      Plugin.ObsidianFlavoredMarkdown({
        enableInHtmlEmbed: true,
        mermaid: true,
      }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config