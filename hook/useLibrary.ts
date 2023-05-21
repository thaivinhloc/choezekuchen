import { useState } from "react"
import { getAllMedias, getNewReleaseMedias } from "services/library"

type TPageProps = {
  locale?: string
}

function useLibrary({ locale }: TPageProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [medias, setMedias] = useState([])
  const [newReleaseMedias, setNewReleaseMedias] = useState([])

  async function getNewMedias() {
    try {
      setIsLoading(true)
      const res = await getNewReleaseMedias({
        locale: locale ?? "en"
      })
      console.log({ res })

      // @ts-ignore
      setNewReleaseMedias(res.data)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }
  async function getMedias() {
    try {
      setIsLoading(true)
      const res = await getAllMedias({
        locale: locale ?? "en"
      })
      console.log({ res })

      // @ts-ignore
      setMedias(res.data)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }
  return {
    isLoading,
    medias,
    newReleaseMedias,
    getMedias,
    getNewMedias
  }
}

export default useLibrary
