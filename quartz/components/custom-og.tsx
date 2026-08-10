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
  const iconUrl = `https://${cfg.baseUrl}/static/icon.png`

  // Safe font declarations with hardcoded string fallbacks
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
        overflow: "hidden",
        background: `
          radial-gradient(at 50% 50%, transparent 40%, rgba(60, 46, 32, 0.4) 100%),
          repeating-linear-gradient(45deg, rgba(230, 219, 198, 0.5), rgba(230, 219, 198, 0.5) 1px, transparent 1px, transparent 4px),
          repeating-linear-gradient(135deg, rgba(230, 219, 198, 0.5), rgba(230, 219, 198, 0.5) 1px, transparent 1px, transparent 4px),
          repeating-linear-gradient(0deg, ${parchmentTan}, ${parchmentTan} 1px, transparent 1px, transparent 15px),
          radial-gradient(#F5EFDE 10%, #E6DBC6 50%, #C4B599 100%)
        `,
        boxShadow: `inset 0 0 0 30px ${parchmentTan}, inset 0 0 0 35px ${darkBrown}, 0 0 0 30px ${parchmentTan}`,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          background: `
            repeating-linear-gradient(to right, ${parchmentTan}, ${parchmentTan} 5px, transparent 5px, transparent 10px) 0 0 / 100% 30px no-repeat,
            repeating-linear-gradient(to right, ${parchmentTan}, ${parchmentTan} 5px, transparent 5px, transparent 10px) 0 100% / 100% 30px no-repeat,
            repeating-linear-gradient(to bottom, ${parchmentTan}, ${parchmentTan} 5px, transparent 5px, transparent 10px) 0 0 / 30px 100% no-repeat,
            repeating-linear-gradient(to bottom, ${parchmentTan}, ${parchmentTan} 5px, transparent 5px, transparent 10px) 100% 0 / 30px 100% no-repeat
          `,
        }}
      />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          height: "210px",
          width: "100%",
          backgroundColor: parchmentTan,
          padding: "2rem",
          position: "relative",
          background: `
            repeating-linear-gradient(45deg, rgba(230, 219, 198, 0.5), rgba(230, 219, 198, 0.5) 1px, transparent 1px, transparent 4px),
            repeating-linear-gradient(135deg, rgba(230, 219, 198, 0.5), rgba(230, 219, 198, 0.5) 1px, transparent 1px, transparent 4px),
            linear-gradient(to bottom, transparent calc(100% - 20px), ${parchmentTan} calc(100% - 20px), ${parchmentTan} 100%),
            ${parchmentTan}
          `,
          boxShadow: `0 10px 20px rgba(60, 46, 32, 0.3)`,
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
            padding: "5px",
            marginLeft: "1rem",
          }}
        >
          <img
            src={iconUrl}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "50px",
            }}
          />
        </div>
      </div>

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
          position: "relative",
          background: `
            repeating-linear-gradient(0deg, rgba(60, 46, 32, 0.8), rgba(60, 46, 32, 0.8) 1px, transparent 1px, transparent 15px),
            ${darkBrown}
          `,
          border: `30px solid ${parchmentTan}`,
          boxShadow: `inset 0 0 0 5px ${goldTan}`,
        }}
      >
        <h1
          style={{
            color: goldTan,
            fontSize: "4rem",
            fontFamily: headerFont, // Uses headerFont variable safely
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
            fontFamily: bodyFont, // Uses bodyFont variable safely
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
  )
}