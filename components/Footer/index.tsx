import React from "react"
import Link from "next/link"
import { DivFooterWrapper } from "./index.style"
import { IconFB, IconInstagram, IconTW } from "../../assets/svgs/index"

const Footer = ({ ...props }) => {
  return (
    <DivFooterWrapper>
      <div className='list-icon'>
        <Link href='https://www.facebook.com/choeze.kuchenrinpoche'>
          <a className='icon' target='_blank'>
            <IconFB />
          </a>
        </Link>
        <div className='icon'>
          <IconTW />
        </div>
        <Link href='https://instagram.com/choeze_rinpoche_?igshid=YmMyMTA2M2Y='>
          <a className='icon' target='_blank'>
            <IconInstagram />
          </a>
        </Link>
      </div>
    </DivFooterWrapper>
  )
}

export default Footer
