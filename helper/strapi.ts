import { EMediaType, TMedia } from "definition"

export const getMediaType = (media: TMedia) => {
  const imgExt = [".jpeg", ".png", ".gif", ".svg", ".tiff", ".ico", "dvu"]
  const audioExt = [".mp3", ".wav", ".ogg"]
  const videoExt = [".mpeg", ".mp4", ".quicktime", ".wmv", ".avi", ".flv"]
  if (imgExt.includes(media.attributes.ext)) {
    return { type: EMediaType.IMAGE, name: "Image" }
  }
  if (audioExt.includes(media.attributes.ext)) {
    return { type: EMediaType.AUDIO, name: "Audio" }
  }
  if (videoExt.includes(media.attributes.ext)) {
    return { type: EMediaType.VIDEO, name: "Video" }
  }
  return { type: EMediaType.FILE, name: "File" }
}
