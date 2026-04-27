import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Corrupción Política ES",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "es-ES",
    baseUrl: "https://github.com/hipomenes-melanion/corrupcion-politica-es",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#faf8f8",
          lightgray: "#e5e5e5",
          gray: "#b8b8b8",
          darkgray: "#4e4e4e",
          dark: "#2b2b2b",
          secondary: "#284b63",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#fff23688",
        },
        darkMode: {
          light: "#161618",
          lightgray: "#393639",
          gray: "#646464",
          darkgray: "#d4d4d4",
          dark: "#ebebec",
          secondary: "#7b97aa",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#b3aa0288",
        },
      },
    },
  },
  plugins: {
    transformers: [
      // 1. Procesa los metadatos (YAML) de las notas
      Plugin.FrontMatter(),

      // 2. Habilita Callouts, checkbox y sintaxis propia de Obsidian
      Plugin.ObsidianFlavour({ 
        enableInHtmlEmbeds: true, 
        enableFullVariants: true 
      }),

      // 3. LA CLAVE PARA LOS WIKILINKS: CrawlLinks
      // 'shortest' es el modo por defecto de Obsidian (encuentra la nota por nombre sin ruta completa)
      Plugin.CrawlLinks({ 
        markdownLinkResolution: 'shortest', 
        prettyLinks: true 
      }),

      // 4. Otros plugins necesarios
      Plugin.TableOfContents(),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.SyntaxHighlighting(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),      // 1. Fundamental para Obsidian
      Plugin.ComponentResources(),  // 
      Plugin.ContentPage(),         // 2. Genera las páginas de contenido
      Plugin.FolderPage(),          // 3. Genera las vistas de carpetas
      Plugin.TagPage(),             // 4. Genera páginas para etiquetas (#corrupción)
      Plugin.ContentIndex({         // 5. Motor de búsqueda y RSS
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),              // 6. Gestiona imágenes y archivos adjuntos
      Plugin.Static(),              // 7. Archivos estáticos (favicon, etc.)
      Plugin.Favicon(),
      Plugin.NotFoundPage(),        // 8. Página de error 404
      // Comment out CustomOgImages to speed up build time
      //Plugin.CustomOgImages(),
    ],
  },
}

export default config
