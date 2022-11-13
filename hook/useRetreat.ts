import { TRetreat } from "definition"
import { useState } from "react"
import { getParentRetreats } from "services/retreat"

type TPageProps = {
  locale?: string
}

function useRetreat({ locale }: TPageProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [parentRetreats, setParentRetreats] = useState<TRetreat[]>([])

  async function getPRetreats() {
    try {
      setIsLoading(true)
      const res = await getParentRetreats({ locale: locale ?? "en" })
      // @ts-ignore
      setParentRetreats(res)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
    }
  }
  return {
    isLoading,
    parentRetreats,
    getPRetreats
  }
}

export default useRetreat
