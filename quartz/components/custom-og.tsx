import { SatoriOptions } from "satori/wasm"
import { GlobalConfiguration } from "../cfg"
import { SocialImageOptions, UserOpts } from "./imageHelper"
import { QuartzPluginData } from "../plugins/vfile"

export const customOgImageUnified: SocialImageOptions["imageStructure"] = (
  cfg: GlobalConfiguration,
  userOpts: UserOpts,
  title: string,
  description: string,
  fonts: SatoriOptions["fonts"],
  fileData: QuartzPluginData,
) => {
  // Use the icon from quartz/static/icon.png as per setup
  const iconUrl = `https://${cfg.baseUrl}/static/icon.png`

  // Define precise colors and textures from the icon image
  const parchmentTan = "#E6DBC6" // Main parchment color
  const darkBrown = "#3C2E20"    // Dark panel border
  const goldTan = "#D7C6A3"      // Title and lich eye gold
  const creamText = "#EAE2CA"    // Description cream text

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
        overflow: "hidden", // Important for vignette and texture
        // Paper border and deep parchment gradients
        background: `
          radial-gradient(at 50% 50%, transparent 40%, rgba(60, 46, 32, 0.4) 100%),
          repeating-linear-gradient(45deg, rgba(230, 219, 198, 0.5), rgba(230, 219, 198, 0.5) 1px, transparent 1px, transparent 4px),
          repeating-linear-gradient(135deg, rgba(230, 219, 198, 0.5), rgba(230, 219, 198, 0.5) 1px, transparent 1px, transparent 4px),
          repeating-linear-gradient(0deg, ${parchmentTan}, ${parchmentTan} 1px, transparent 1px, transparent 15px),
          radial-gradient(#F5EFDE 10%, #E6DBC6 50%, #C4B599 100%)
        `,
        // Thick paper edge pattern and inner dark brown line for main border
        boxShadow: `inset 0 0 0 30px ${parchmentTan}, inset 0 0 0 35px ${darkBrown}, 0 0 0 30px ${parchmentTan}`,
      }}
    >
      {/* Absolute div for rough paper border patterns */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none", // Allow clicks to pass through
          // Rough paper edge pattern repeated around the card borders
          background: `
            repeating-linear-gradient(to right, ${parchmentTan}, ${parchmentTan} 5px, transparent 5px, transparent 10px) 0 0 / 100% 30px no-repeat,
            repeating-linear-gradient(to right, ${parchmentTan}, ${parchmentTan} 5px, transparent 5px, transparent 10px) 0 100% / 100% 30px no-repeat,
            repeating-linear-gradient(to bottom, ${parchmentTan}, ${parchmentTan} 5px, transparent 5px, transparent 10px) 0 0 / 30px 100% no-repeat,
            repeating-linear-gradient(to bottom, ${parchmentTan}, ${parchmentTan} 5px, transparent 5px, transparent 10px) 100% 0 / 30px 100% no-repeat
          `,
        }}
      />

      {/* Top Header Section (Textured Parchment) */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          height: "210px", // ~1/3 of the height
          width: "100%",
          backgroundColor: parchmentTan,
          padding: "2rem",
          position: "relative",
          // Paper texture and rough bottom edge
          background: `
            repeating-linear-gradient(45deg, rgba(230, 219, 198, 0.5), rgba(230, 219, 198, 0.5) 1px, transparent 1px, transparent 4px),
            repeating-linear-gradient(135deg, rgba(230, 219, 198, 0.5), rgba(230, 219, 198, 0.5) 1px, transparent 1px, transparent 4px),
            linear-gradient(to bottom, transparent calc(100% - 20px), ${parchmentTan} calc(100% - 20px), ${parchmentTan} 100%),
            ${parchmentTan}
          `,
          boxShadow: `0 10px 20px rgba(60, 46, 32, 0.3)`,
        }}
      >
        {/* Small, corner icon in a circle container */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100px",
            height: "100px",
            border: `3px solid ${darkBrown}`,
            borderRadius: "50px", // Make it a circle container
            overflow: "hidden",
            backgroundColor: parchmentTan,
            padding: "5px",
            marginLeft: "1rem", // Add spacing from the corner
          }}
        >
          <img
            src={iconUrl}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "50px", // Force the image within the container to be a circle
              // objectFit: "contain", // Preserves aspect ratio, fits entire badge inside the circle.
            }}
          />
        </div>
      </div>

      {/* Bottom Content Section (Dark Brown / Dumb Lich Inn Panel) */}
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
          // Subtle paper texture on the brown area
          background: `
            repeating-linear-gradient(0deg, rgba(60, 46, 32, 0.8), rgba(60, 46, 32, 0.8) 1px, transparent 1px, transparent 15px),
            ${darkBrown}
          `,
          // Golden inner border line
          border: `30px solid ${parchmentTan}`, // Match parchment border
          boxShadow: `inset 0 0 0 5px ${goldTan}`,
        }}
      >
        <h1
          style={{
            color: goldTan,
            fontSize: "4rem", // Very large title
            fontFamily: fonts[0].name,
            fontWeight: 700,
            lineHeight: 1.1,
            margin: 0,
            textAlign: "center",
          }}
        >
          {title}
        </h1>
        {/* Golden accent line below title */}
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
            fontFamily: fonts[1].name,
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