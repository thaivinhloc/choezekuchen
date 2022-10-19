import React from "react"
import Link from "next/link"
import { DivFooterWrapper } from "./index.style"
import { IconFB, IconInstagram, IconTW } from "../../assets/svgs/index"

const Footer: React.FC<{}> = () => {
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
        <div className='icon'>
          <IconInstagram />
        </div>
      </div>
    </DivFooterWrapper>
  )
}

export default Footer
