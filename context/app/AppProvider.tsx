import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import { AppContext } from "./AppContext";

type Props = {
  children: ReactNode;
};
export function AppProvider({ children }: Props) {
  const [title, setTitle] = useState<string>("");
  const router = useRouter();
  const { t } = useTranslation();

  useEffect(() => {
    let text: string = "";
    switch (router.pathname) {
      case "/login":
        text = "login";
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
  }, [router.pathname]);

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
