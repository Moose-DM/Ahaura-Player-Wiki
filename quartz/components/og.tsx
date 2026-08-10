import { SatoriOptions } from "satori/wasm"
import { GlobalConfiguration } from "../cfg"
import { SocialImageOptions, UserOpts } from "./imageHelper"
import { QuartzPluginData } from "../plugins/vfile"

export const customImage: SocialImageOptions["imageStructure"] = (
  cfg: GlobalConfiguration,
  userOpts: UserOpts,
  title: string,
  description: string,
  fonts: SatoriOptions["fonts"],
  fileData: QuartzPluginData,
) => {
  const fontBreakPoint = 24
  const useSmallerFont = title.length > fontBreakPoint

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "100%",
        width: "100%",
        backgroundColor: "#16110e",
        backgroundImage: "radial-gradient(circle at center, #2a1f17 0%, #0f0b08 100%)",
        padding: "2.5rem",
        boxSizing: "border-box",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Outer Fantasy Border Frame */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          height: "100%",
          border: "3px solid #8c6d3b",
          borderRadius: "16px",
          padding: "2.5rem",
          backgroundColor: "rgba(22, 17, 14, 0.85)",
          alignItems: "center",
          gap: "2.5rem",
          position: "relative",
        }}
      >
        {/* Logo Container */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "280px",
            height: "280px",
            borderRadius: "16px",
            overflow: "hidden",
            border: "2px solid #5c4326",
            backgroundColor: "#d5be9b",
            flexShrink: 0,
          }}
        >
          <img
            src="/static/icon.png"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </div>

        {/* Text Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flexGrow: 1,
            gap: "1rem",
            height: "100%",
          }}
        >
          {/* Header Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              color: "#c89b3c",
              fontSize: 20,
              fontWeight: "bold",
              fontFamily: fonts[0].name,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            <span>☀️ AHAURA CAMPAIGN WIKI </span>
          </div>

          {/* Title */}
          <p
            style={{
              color: "#f5e6c8",
              fontSize: useSmallerFont ? 48 : 62,
              fontWeight: "bold",
              margin: 0,
              fontFamily: fonts[0].name,
              lineHeight: 1.1,
            }}
          >
            {title}
          </p>

          {/* Description */}
          {description && (
            <p
              style={{
                color: "#b8a383",
                fontSize: 26,
                margin: 0,
                lineClamp: 2,
                fontFamily: fonts[1]?.name ?? fonts[0].name,
                lineHeight: 1.4,
              }}
            >
              {description}
            </p>
          )}
        </div>

        {/* Decorative Watermark / Accent */}
        <div
          style={{
            position: "absolute",
            bottom: "1rem",
            right: "1.5rem",
            display: "flex",
            color: "#5c4326",
            fontSize: 16,
            fontWeight: "bold",
            fontFamily: fonts[0].name,
            letterSpacing: "0.1em",
          }}
        >
          D&D ARCHIVES
        </div>
      </div>
    </div>
  )
}