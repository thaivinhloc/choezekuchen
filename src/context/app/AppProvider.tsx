import { ReactNode, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AppContext } from "./AppContext";

type Props = {
  children: ReactNode;
};
export function AppProvider({ children }: Props) {
  const [title, setTitle] = useState<string>("");
  const location = useLocation();

  useEffect(() => {
    let text = "";
    switch (location.pathname) {
      case "/login":
        text = "LOG IN";
        break;
      case "/signup":
        text = "SIGN UP";
        break;
      case "/profile":
        text = "PROFILE";
        break;
      case "/retreat":
        text = "RETREAT";
        break;
      default:
        text = "CHOEZE KUCHEN";
        break;
    }
    setTitle(text);
  }, [location.pathname]);

  const setTitleBanner = (title: string) => {
    setTitle(title);
  };

  return (
    <AppContext.Provider
      value={{
        title,
        setTitleBanner,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
