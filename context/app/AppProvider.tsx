import { TMedia } from "definition"
import { useRouter } from "next/router"
import { ReactNode, useEffect, useState } from "react"
import { AppContext } from "./AppContext"

type Props = {
  children: ReactNode
}
export function AppProvider({ children }: Props) {
  const [title, setTitle] = useState<string>("")
  const [banner, setBanner] = useState<TMedia>()

  const setTitleBanner = (title: string) => {
    setTitle(title)
  }

  return (
    <AppContext.Provider
      value={{
        title,
        setTitleBanner,
        banner,
        setBanner
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
