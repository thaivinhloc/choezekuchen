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
    }
  })
}
