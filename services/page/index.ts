import { TPage } from "definition"
import client from "services/client"

export const getPageBySlug = ({
  slug,
  locale
}: {
  slug: string
  locale: string
}) => {
  return client.createRequest<TPage>({
    path: `/api/page-by-slug`,
    method: "get",
    external: true,
    params: {
      slug,
      locale: locale
    }
  })
}
