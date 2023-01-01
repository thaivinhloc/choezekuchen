import { TMedia } from "definition"
import { useRouter } from "next/router"
import { ReactNode, useEffect, useState } from "react"
import { AppContext } from "./AppContext"

type Props = {
  children: ReactNode
}
export function AppProvider({ children }: Props) {
  const [title, setTitle] = useState<string>("")
  const [desc, setDesc] = useState<string>()
  const [banner, setBanner] = useState<TMedia>()

  const setTitleBanner = (title: string, meta_desc?: string) => {
    setTitle(title)
    setDesc(meta_desc)
  }

  return (
    <AppContext.Provider
      value={{
        title,
        desc,
        setTitleBanner,
        banner,
        setBanner
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
