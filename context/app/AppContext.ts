import { TMedia } from "definition"
import { createContext, useContext } from "react"

type appContextType = {
  title: string
  setTitleBanner: (title: string) => void
  banner?: TMedia
  setBanner: (banner: TMedia) => void
}

const appContextDefaultValues: appContextType = {
  title: "CHOEZE KUCHEN",
  setTitleBanner: (title: string) => {},
  setBanner: (banner: TMedia) => {}
}

export const AppContext = createContext<appContextType>(appContextDefaultValues)

export function useApp() {
  return useContext(AppContext)
}
