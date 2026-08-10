import { SatoriOptions } from "satori/wasm"
import { GlobalConfiguration } from "../cfg"
import { SocialImageOptions, UserOpts } from "./imageHelper"
import { QuartzPluginData } from "../plugins/vfile"

export const customOgImage: SocialImageOptions["imageStructure"] = (
  cfg: GlobalConfiguration,
  userOpts: UserOpts,
  title: string,
  description: string,
  fonts: SatoriOptions["fonts"],
  fileData: QuartzPluginData,
) => {
  const { colorScheme } = userOpts
  const colors = cfg.theme.colors[colorScheme]

  // Retrieve image from page frontmatter
  const frontmatterImage =
    (fileData.frontmatter?.socialImage as string) ??
    (fileData.frontmatter?.image as string) ??
    (fileData.frontmatter?.cover as string)

  // Resolve absolute URL for the frontmatter image
  let featuredImageUrl: string | null = null
  if (frontmatterImage) {
    featuredImageUrl = frontmatterImage.startsWith("http")
      ? frontmatterImage
      : `https://${cfg.baseUrl}/${frontmatterImage.replace(/^\/?(static\/)?/, "static/")}`
  }

  // Corner icon path (placed in quartz/static/icon.png)
  const iconUrl = `https://${cfg.baseUrl}/static/icon.png`

  // Dynamic font scaling for longer titles
  const isLongTitle = title.length > 30

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
        backgroundColor: colors.light,
        padding: "3.5rem",
        boxSizing: "border-box",
        justifyContent: "space-between",
      }}
    >
      {/* Top Bar: Small Corner Icon */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          width: "100%",
        }}
      >
        <img
          src={iconUrl}
          width={56}
          height={56}
          style={{
            borderRadius: "12px",
            border: `1px solid ${colors.lightgray}`,
          }}
        />
      </div>

      {/* Main Area: Text on the left, Featured Image on the right */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "2.5rem",
          width: "100%",
          flexGrow: 1,
          marginTop: "1.5rem",
        }}
      >
        {/* Text Container */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: featuredImageUrl ? "58%" : "100%",
            gap: "1rem",
          }}
        >
          <h1
            style={{
              color: colors.dark,
              fontSize: isLongTitle ? "3rem" : "3.75rem",
              fontFamily: fonts[0].name,
              fontWeight: 700,
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            {title}
          </h1>
          <p
            style={{
              color: colors.gray,
              fontSize: "1.35rem",
              fontFamily: fonts[1].name,
              lineHeight: 1.4,
              margin: 0,
              lineClamp: 3,
            }}
          >
            {description}
          </p>
        </div>

        {/* Large Frontmatter Preview Image */}
        {featuredImageUrl && (
          <div
            style={{
              display: "flex",
              width: "38%",
              height: "280px",
              borderRadius: "16px",
              overflow: "hidden",
              border: `2px solid ${colors.lightgray}`,
            }}
          >
            <img
              src={featuredImageUrl}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        )}
      </div>
    </div>
  )
}