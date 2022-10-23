import { CloseOutlined } from "@ant-design/icons"
import { Button, Modal as AntModal, ModalProps } from "antd"
import { forwardRef, useImperativeHandle, useRef, useState } from "react"
import styled from "styled-components"

interface ExtendModalProps extends ModalProps {
  open?: boolean
}

interface ModalHandler {
  handleOpen: () => void
  handleClose: (callback?: () => void) => void
}

const CloseButtonWrapper = styled(Button)`
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  border: 0;
  &:hover {
    background-color: rgba(0, 0, 0, 0.9);
    color: #fff;
  }
`

const CloseButton = () => {
  return <CloseButtonWrapper icon={<CloseOutlined />} shape='circle' />
}

const ModalFunction: React.ForwardRefRenderFunction<
  ModalHandler,
  ExtendModalProps
> = (props, forwardedRef) => {
  const [open, setOpen] = useState(props.open)
  const handleOpen = () => setOpen(true)
  const handleClose = (callback?: () => void) => {
    setOpen(false)
    callback?.()
  }

  useImperativeHandle(forwardedRef, () => ({
    handleOpen,
    handleClose
  }))

  console.log("ModalFunction", { open })

  return (
    <AntModal
      visible={open}
      onCancel={() => handleClose()}
      footer={null}
      closeIcon={<CloseButton />}
      {...props}
    >
      {props.children}
    </AntModal>
  )
}

export const Modal = forwardRef(ModalFunction)
