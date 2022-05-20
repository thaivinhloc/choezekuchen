import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import { AppContext } from "./AppContext";

type Props = {
  children: ReactNode;
};
export function AppProvider({ children }: Props) {
  const [title, setTitle] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    let text: string = "";
    const path = router.pathname.split("/");
    switch (path[path.length - 1]) {
      case "login":
        text = "login";
        break;
      case "signup":
        text = "SIGN UP";
        break;
      case "profile":
        text = "PROFILE";
        break;
      case "retreat":
        text = "RETREAT";
        break;
      case "retreat-history":
        text = "RETREAT HISTORY";
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
