import { useState } from "react";
import { getMonasteries } from "services/monastery";
import { getListTeaching } from "services/teaching";

type TPageProps = {
  locale?: string;
};

function useTeaching({ locale }: TPageProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [teachings, setTeachings] = useState<Record<string, any>[]>([]);

  async function fetchListTeaching() {
    try {
      setIsLoading(true);
      const res = await getListTeaching({ locale: locale ?? "en" });
      setTeachings(res.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  }
  return {
    isLoading,
    teachings,
    fetchListTeaching
  };
}

export default useTeaching;
