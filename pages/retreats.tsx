import { LOGIN } from "common/navigator"
import { DivRetreatWrapper } from "components/Retreat/index.style"
import ListLayout from "container/ListLayout"
import { useApp } from "context/app/AppContext"
import { useAuth } from "context/auth/AuthContext"
import { EListType, TPageConfigurationAttributes, TRetreat } from "definition"
import { getRetreatPathFromSlug, transformRetreatToListItem } from "helper"
import withGlobalData from "hoc/withGlobalData"
import { withNavigator } from "hoc/withNavigator"
import withRetreats from "hoc/withRetreats"
import withTrans from "hoc/withTrans"
import { useRouter } from "next/router"
import React, { FC, useEffect } from "react"
import { Container } from "react-bootstrap"

interface RetreatPageProps {
  retreats: TRetreat[]
}
const RetreatPage: FC<RetreatPageProps & TPageConfigurationAttributes> = ({
  retreats,
  title,
  banner,
  background,
  action_title
}) => {
  const { user } = useAuth()
  const { setTitleBanner, setBanner } = useApp()
  const router = useRouter()
  const dataList = (retreats ?? []).map((retreat) =>
    transformRetreatToListItem(retreat)
  )
  console.log({ banner })

  useEffect(() => {
    if (title) {
      setTitleBanner(title)
    }
    if (banner?.data) {
      setBanner(banner.data)
    }
  }, [title, banner])

  return (
    <DivRetreatWrapper style={{ background }}>
      <Container>
        <ListLayout
          action_title={action_title}
          listItemStyle={{
            background: "#fff",
            paddingTop: 16,
            paddingLeft: 16,
            paddingRight: 16
          }}
          listType={EListType.BLOG}
          dataList={dataList}
          onRowClick={({ id, slug }) =>
            router.push(
              user
                ? getRetreatPathFromSlug(id, slug)
                : `${LOGIN}?referer=${getRetreatPathFromSlug(id, slug)}`
            )
          }
          mediaProps={{
            width: 600,
            height: 400,
            ratio: "3/2"
          }}
        />
      </Container>
    </DivRetreatWrapper>
  )
}

export const getServerSideProps = withGlobalData(withRetreats(withTrans))

export default withNavigator(RetreatPage)
