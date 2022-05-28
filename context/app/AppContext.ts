import { createContext, useContext } from "react";

type appContextType = {
  title: string;
  setTitleBanner: (title: string) => void;
};

const appContextDefaultValues: appContextType = {
  title: "CHOEZE KUCHEN",
  setTitleBanner: (title: string) => {},
};

export const AppContext = createContext<appContextType>(
  appContextDefaultValues
);

export function useApp() {
  return useContext(AppContext);
}
