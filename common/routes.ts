import {
  HISTORY,
  MOTIVATION,
  TEACHING,
  THEHEVAJRA,
  THEPERFECTWAY,
} from "./navigator";
import { THE11TH } from "common/navigator";
export const ROUTES = [
  { label: "HOME", path: "/", childrent: [] },
  {
    label: "ABOUT RINPOCHE",
    path: "/about-rinpoche",
    isOpenTab: true,
    childrent: [
      {
        label: "GURUS",
        path: "/gurus",
        childrent: [],
      },
      {
        label: "HISTORY OF CHOEZE KUCHEN RINPOCHE",
        path: HISTORY,
        childrent: [],
      },
      {
        label: "11TH CHOEZE KUCHEN RINPOCHE",
        path: THE11TH,
        childrent: [],
      },
    ],
  },
  {
    label: "TEACHING",
    path: TEACHING,
    childrent: [
      {
        label: "YANGZAB NGONDRO TEACHING",
        path: "/yangzab-ngondro-teaching",
        childrent: [],
      },
      {
        label: "PHOWA TEACHING",
        path: "/phowa-teaching",
        childrent: [],
      },
      {
        label: "GURU RINPOCHE TEACHING",
        path: "/guru-rinpoche",
        childrent: [],
      },
      {
        label: "ACHI CHOKYI DROLMA TEACHING",
        path: "/achi-chokyi-drolma-teaching",
        childrent: [],
      },
      {
        label: "DHARMA TEACHING",
        path: "/dharma-teaching",
        childrent: [
          {
            label: "PURE MOTIVATION AND GREAT CONVICTION",
            path: MOTIVATION,
            childrent: [],
          },
          {
            label: "THE PERFECT DEDICATION",
            path: "/the-perfect-dedication",
            childrent: [],
          },
          {
            label: "THE PERFECT WAY TO PRACTICE",
            path: THEPERFECTWAY,
            childrent: [],
          },
        ],
      },
    ],
  },
  {
    label: "MONASTERY",
    path: "/monastery",
    childrent: [
      {
        label: "Choeze Thupten Dargyeling Monastery",
        path: "/choeze-thupten-dargyeling-monastery",
        childrent: [],
      },
      {
        label: "BUTAN PROJECTS",
        path: "/butan-projects",
        childrent: [],
      },
      {
        label: "NAMKHA THING-SANG RETREAT CENTER",
        path: "/namkha-thing-sang-retreat-center",
        childrent: [],
      },
      {
        label: "Dharma Treasure Center",
        path: "/dharma-treasure-center",
        childrent: [],
      },
    ],
  },
  // {
  //   label: "PRAYERS",
  //   path: "/prayers",
  //   childrent: [
  //     {
  //       label: "SADHANAS",
  //       path: "/sadhanas",
  //       childrent: [],
  //     },
  //     {
  //       label: "CHOEZE KUCHEN RINPOCHES CHANTING AUTIO",
  //       path: "/choeze-kuchen-rinpoches-chanting-audio",
  //       childrent: [],
  //     },
  //   ],
  // },
  {
    label: "RETREAT",
    path: "/retreat",
    childrent: [],
  },
  {
    label: "EVENTS",
    path: "/events",
    childrent: [
      {
        label: "CHOD CHANGBU GYATSHAR PUJA",
        path: "/chod-changbu",
        childrent: [],
      },
    ],
  },
  // {
  //   label: "OFFERINGS",
  //   path: "/offering",
  //   childrent: [],
  // },
  {
    label: "BLOG",
    path: "/the-blog",
    childrent: [],
  },
];
