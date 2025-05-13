import client from "services/client"

export const globalDataReq = () => {
  return client.createRequest({
    method: "get",
    external: true,
    path: "/api/global",
    params: {
      "populate[0]": "logo",
      "populate[1]": "Socials",
      "populate[2]": "Socials.icon",
      "populate[3]": "contacts",
      "populate[4]": "defaultHeadLine",
      "populate[5]": "offering",
      "populate[6]": "offering.background",
      "populate[7]": "practice",
      "populate[8]": "practice.background",
      "populate[9]": "homeTopSlider"
    }
  })
}
