// @ts-nocheck
import React from "react"
import Link from "next/link"
import { DivFooterWrapper } from "./index.style"

const Footer = ({ data, isMobile }) => {
  console.log("Footer", data.attributes)
  const { Socials = [] } = data?.attributes || {}

  return (
    <DivFooterWrapper>
      <div className='list-icon'>
        {Socials.map(({ link, icon }) =>
          link ? (
            <Link href={link}>
              <a className='icon' target='_blank'>
                <img src={icon.data.attributes.url} />
              </a>
            </Link>
          ) : (
            <div className='icon'>
              <img src={icon.data.attributes.url} />
            </div>
          )
        )}
      </div>
    </DivFooterWrapper>
  )
}

export default Footer
