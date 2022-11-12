import client from "services/client"

export const navigationReq = ({ locale }: { locale: string }) => {
  return client.createRequest({
    path: `/api/navigation/render/main-navigation`,
    method: "get",
    external: true,
    params: {
      menu: true,
      locale,
      type: "TREE"
    }
  })
}
