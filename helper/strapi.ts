import { EMediaType, TMedia } from "definition"

export const getMediaType = (media?: TMedia) => {
  if (!media) {
    return { type: EMediaType.IMAGE, name: "Image" }
  }
  const imgExt = [
    ".jpeg",
    ".jpg",
    ".png",
    ".gif",
    ".svg",
    ".tiff",
    ".ico",
    ".dvu"
  ]
  const audioExt = [".mp3", ".wav", ".ogg"]
  const videoExt = [".mpeg", ".mp4", ".quicktime", ".wmv", ".avi", ".flv"]
  const ext = media.attributes.ext.toLowerCase()
  if (imgExt.includes(ext)) {
    return { type: EMediaType.IMAGE, name: "Image" }
  }
  if (audioExt.includes(ext)) {
    return { type: EMediaType.AUDIO, name: "Audio" }
  }
  if (videoExt.includes(ext)) {
    return { type: EMediaType.VIDEO, name: "Video" }
  }
  return { type: EMediaType.FILE, name: "File" }
}
