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
  const router = useRouter()

  const replaceTitle = (title: string) => {
    if (!title) return ""
    return title.replaceAll("-", " ")
  }

  useEffect(() => {
    let text: string = ""
    const path = router.pathname.split("/")
    const pathName = path[path.length - 1]
    console.log({ pathName })

    const IGNORE_PAGES = [
      "retreats",
      "about-rinpoche",
      "library",
      "[[...id]]",
      "events"
    ]
    if (!IGNORE_PAGES.includes(pathName)) {
      switch (pathName) {
        case "login":
          text = "login"
          break
        case "signup":
          text = "RETREAT REGISTER"
          break
        case "profile":
          text = "PROFILE"
          break
        case "retreat":
          text = "Yangzab Ngondro Retreat"
          break
        case "retreat-history":
          text = "RETREAT HISTORY"
          break
        case "history-of-choeze-kuchen-rinpoche":
          text = "HISTORY OF CHOEZE KUCHEN RINPOCHE"
          break
        case "the-perfect-way":
          text = "THE PERFECT WAY TO PRACTICE"
          break
        case "monastery":
          text = "MONASTERY"
          break
        case "gurus":
          text = "GURUS"
          break
        case "the-11th":
          text = "11TH CHOEZE KUCHEN RINPOCHE"
          break
        case "the-hevajra":
          text = "THE HEVAJRA RETREAT"
          break
        case "jigme-choewang-lodro-the-10th-reincarnation-of-choeze-kuchen-rinpoche":
          text =
            "JIGME CHOEWANG LODRO – THE 10TH REINCARNATION OF CHOEZE KUCHEN RINPOCHE"
          break
        case "pure-motivation-and-great-conviction-2":
          text = "PURE MOTIVATION AND GREAT CONVICTION"
          break
        case "achi-chokyi-drolma":
          text = "ACHI CHOKYI DROLMA TEACHING"
        case "phowa-practice":
          text = "PHOWA PRACTICE"
          break
        default:
          text = replaceTitle(pathName)
          break
      }
      setTitle(text)
    }
  }, [router.pathname])

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
