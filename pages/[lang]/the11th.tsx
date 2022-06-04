import The from "components/The11th";
import Link from "next/link";
import React, { FC } from "react";

const The11thPage: FC<{}> = () => {
  /* Render */
  // return <The />;
  return (
    <Link href="/about">
      <The />
    </Link>
  );
};

export default The11thPage;
