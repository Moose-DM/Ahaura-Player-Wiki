import { SatoriOptions } from "satori/wasm"
import { GlobalConfiguration } from "../cfg"
import { SocialImageOptions, UserOpts } from "./imageHelper"
import { QuartzPluginData } from "../plugins/vfile"
import fs from "fs"
import path from "path"

export const customOgImage: SocialImageOptions["imageStructure"] = (
  cfg: GlobalConfiguration,
  userOpts: UserOpts,
  title: string,
  description: string,
  fonts: SatoriOptions["fonts"],
  fileData: QuartzPluginData,
) => {
  // Read local icon directly as Base64 to prevent network fetch failures
  let iconUrl = ""
  try {
    const iconPath = path.resolve("./quartz/static/icon.png")
    const iconBuffer = fs.readFileSync(iconPath)
    iconUrl = `data:image/png;base64,${iconBuffer.toString("base64")}`
  } catch {
    if (cfg.baseUrl) {
      iconUrl = `https://${cfg.baseUrl}/static/icon.png`
    }
  }

  // Safe font resolution
  const headerFont = fonts && fonts[0] ? fonts[0].name : "Almendra"
  const bodyFont = fonts && fonts[1] ? fonts[1].name : "EB Garamond"

  const parchmentTan = "#E6DBC6"
  const darkBrown = "#3C2E20"
  const goldTan = "#D7C6A3"
  const creamText = "#EAE2CA"

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
        backgroundColor: parchmentTan,
        boxSizing: "border-box",
        position: "relative",
        padding: "20px",
      }}
    >
      {/* Decorative Outer Dashed Frame */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: "100%",
          border: `4px dashed ${darkBrown}`,
          boxSizing: "border-box",
          position: "relative",
        }}
      >
        {/* Header Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            height: "180px",
            width: "100%",
            backgroundColor: parchmentTan,
            padding: "2rem",
            boxSizing: "border-box",
            borderBottom: `4px solid ${darkBrown}`,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100px",
              height: "100px",
              border: `3px solid ${darkBrown}`,
              borderRadius: "50px",
              overflow: "hidden",
              backgroundColor: parchmentTan,
              marginLeft: "1rem",
            }}
          >
            {iconUrl ? (
              <img
                src={iconUrl}
                width={90}
                height={90}
                style={{
                  width: "90px",
                  height: "90px",
                  borderRadius: "45px",
                }}
              />
            ) : null}
          </div>
        </div>

        {/* Content Box */}
        <div
          style={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            backgroundColor: darkBrown,
            padding: "3rem",
            boxSizing: "border-box",
            border: `10px solid ${parchmentTan}`,
          }}
        >
          <h1
            style={{
              color: goldTan,
              fontSize: "4rem",
              fontFamily: headerFont,
              fontWeight: 700,
              lineHeight: 1.1,
              margin: 0,
              textAlign: "center",
            }}
          >
            {title}
          </h1>
          <div
            style={{
              width: "150px",
              height: "4px",
              backgroundColor: goldTan,
              marginTop: "1.5rem",
              marginBottom: "1.5rem",
              borderRadius: "2px",
            }}
          />
          <p
            style={{
              color: creamText,
              fontSize: "1.75rem",
              fontFamily: bodyFont,
              lineHeight: 1.4,
              margin: 0,
              textAlign: "center",
              lineClamp: 3,
              WebkitLineClamp: 3,
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
            }}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}