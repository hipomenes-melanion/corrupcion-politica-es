import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Corrupción Política ES",
    provider: "local",
    locale: "es-ES",
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
        mermaid: {
          theme: "base", // Usamos la base personalizable de Mermaid
          themeVariables: {
            // Configuración de colores para el Modo Oscuro
            darkMode: true,
            background: "#161618",       // Fondo general del diagrama (mismo de tu Quartz dark)
            primaryColor: "#1e1e20",     // Fondo de las cajas principales
            primaryTextColor: "#d4d4d8",  // Color del texto de las cajas principales (gris claro legible)
            
            // Corrección específica para los nodos rectangulares y subgraphs (las cajas blancas problemáticas)
            nodeBkg: "#27272a",          // Cambia el fondo blanco de las cajas inferiores por un gris oscuro
            nodeBorder: "#3f3f46",       // Color del borde de las cajas
            textColor: "#f4f4f5",        // Fuerza a que TODO el texto interno de las cajas sea blanco/claro
            
            // Colores de las líneas y flechas de unión
            lineColor: "#a1a1aa",
            arrowheadColor: "#a1a1aa",
          }
        },
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