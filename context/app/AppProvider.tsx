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
      case "history-of-choeze-kuchen-rinpoche":
        text = "HISTORY OF CHOEZE KUCHEN RINPOCHE";
        break;
      case "the-perfect-way-to-practice-2":
        text = "THE PERFECT WAY TO PRACTICE";
        break;
      case "monastery":
        text = "MONASTERY";
        break;
      case "previous-reincarnation-the-10th-choeze-kuchen-rinpoche":
        text = "Haaaaa";

      case "gurus":
        text = "GURUS";
        break;
      case "the11th":
        text = "THE 11TH CHOEZE KUCHEN RIPOCHE";
        break;
      case "thehevajra":
        text = "THE HEVAJRA RETREAT";
        break;
      case "jigme-choewang-lodro-the-10th-reincarnation-of-choeze-kuchen-rinpoche":
        text =
          "JIGME CHOEWANG LODRO – THE 10TH REINCARNATION OF CHOEZE KUCHEN RINPOCHE";
        break;
      default:
        text = "";
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
