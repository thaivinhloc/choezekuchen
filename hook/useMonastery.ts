import { useState } from "react"
import { getMonasteries } from "services/monastery"

type TPageProps = {
  locale?: string
}

function useMonastery({ locale }: TPageProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [monasteries, setMonasteries] = useState<Record<string, any>[]>([])

  async function getAllMonasteries() {
    try {
      setIsLoading(true)
      const res = await getMonasteries({ locale: locale ?? "en" })
      // @ts-ignore
      setMonasteries(res.data)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
    }
  }
  return {
    isLoading,
    monasteries,
    getAllMonasteries
  }
}

export default useMonastery
