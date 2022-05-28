import { useAuth } from "context/auth/AuthContext";
import i18next from "i18next";
import { useState } from "react";
import {
  getListRetreat,
  getParticipants,
  getRetreatDetail,
} from "services/api";
import {
  IResponseActiveRetreat,
  IResponseListRetreat,
  IResponseRetreatDetail,
} from "services/retreatTypes";

export type TLanguage = {
  en: "en";
  vi: "vi";
};
const useRetreat = (language: TLanguage) => {
  const { user } = useAuth();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [listRetreat, setListRetreat] = useState<IResponseActiveRetreat[]>([]);
  const [retreatDetail, setRetreatDetail] = useState<IResponseRetreatDetail>();

  const getActiveRetreat = async (): Promise<IResponseActiveRetreat[]> => {
    try {
      const result = await getListRetreat();
      setListRetreat(result);
      return result;
    } catch (error) {
      console.log("----err", error);
      throw error;
    }
  };

  const handleGetRetreatDetail = async (retreatId: number) => {
    try {
      setIsLoading(true);
      const response = await getRetreatDetail(retreatId, !!user, language);
      setRetreatDetail(response);
    } catch (error) {
      console.log("----failed", error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    listRetreat,
    retreatDetail,
    isLoading,
    getActiveRetreat,
    handleGetRetreatDetail,
  };
};

export default useRetreat;
