import { TMedia } from "definition";
import { createContext, useContext } from "react";

type appContextType = {
  title: string;
  desc?: string;
  setTitleBanner: (title: string, meta_desc?: string) => void;
  banner?: TMedia;
  setBanner: (banner?: TMedia) => void;
  banners: any;
};

const appContextDefaultValues: appContextType = {
  title: "CHOEZE KUCHEN",
  setTitleBanner: (title: string) => {},
  setBanner: (banner?: TMedia) => {},
  banners: {}
};

export const AppContext = createContext<appContextType>(
  appContextDefaultValues
);

export function useApp() {
  return useContext(AppContext);
}
