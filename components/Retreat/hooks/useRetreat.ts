import { useAuth } from "context/auth/AuthContext";
import { TRetreat } from "definition";
import i18next from "i18next";
import { useState } from "react";
import {
  getListRetreat,
  getParticipants,
  getRetreatDetail,
} from "services/api";
import { getChildRetreats } from "services/retreat";
import {
  IResponseActiveRetreat,
  IResponseListRetreat,
  IResponseRetreatDetail,
} from "services/retreatTypes";

export type TLanguage = {
  en: "en";
  vi: "vi";
};
const useRetreat = (language: string) => {
  const { user } = useAuth();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [listRetreat, setListRetreat] = useState<TRetreat[]>([]);
  const [retreatDetail, setRetreatDetail] = useState<IResponseRetreatDetail>();

  const getActiveRetreats = async ({ parentId, locale }: {parentId: number; locale: string }) => {
    try {
      const { retreats } = await getChildRetreats({ parentId, locale });
      if (!retreats) {
        throw Error('Data not found')
      }
      setListRetreat(retreats)
      return retreats
    } catch (error) {
      return [] 
    }
  }

  const handleGetRetreatDetail = async (retreatId: number) => {
    try {
      setIsLoading(true);
      const response = await getRetreatDetail(retreatId, language);
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
    setListRetreat,
    getActiveRetreats,
    handleGetRetreatDetail,
  };
};

export default useRetreat;
