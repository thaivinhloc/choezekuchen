// @ts-nocheck
import { GetServerSidePropsContext } from "next";
import { getListTeaching, getTeachingDetails } from "services/teaching";

export default function withTeaching(getServerSidePropsFunc) {
  return async (context: GetServerSidePropsContext) => {
    try {
      const { params, locale } = context;
      const { mid } = params || {};
      const teaching = await getTeachingDetails({
        id: mid,
        locale: locale ?? "en"
      });

      const listTeaching = await getListTeaching({
        locale: locale ?? "en",
        filter: {
          "filters[id][$ne]": mid
        }
      });

      if (!teaching) {
        throw Error("Data not found");
      }

      if (typeof getServerSidePropsFunc === "function") {
        const ownProps = (await getServerSidePropsFunc(context)).props || {};
        console.log({ ownProps });
        return {
          props: {
            teaching,
            listTeaching,
            ...ownProps
          }
        };
      }

      return {
        props: {
          teaching,
          listTeaching
        }
      };
    } catch (error) {
      return {
        props: {
          teaching: {},
          listTeaching: []
        }
      };
    }
  };
}
