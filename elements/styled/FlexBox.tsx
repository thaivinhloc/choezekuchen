import styled from "styled-components"

interface FlexBoxProps {
  align?:
    | "flex-start_center"
    | "space-between_center"
    | "flex-end_center"
    | "flex-start_flex_start"
    | "flex-end_flex-end"
    | "center_center"
    | "flex-start_flex_end"
    | "space-between_flex_end"
  direction?: "row" | "column"
}

const FlexBoxWrapper = styled.div<FlexBoxProps>`
  display: flex;
  justify-content: ${(props) => props.align?.split("_")[0]};
  align-items: ${(props) => props.align?.split("_")[1]};
  flex-direction: ${(props) => props.direction};
`

export const FlexBox: React.FC<FlexBoxProps> = ({
  align = "center_center",
  direction = "row",
  children
}) => {
  return (
    <FlexBoxWrapper align={align} direction={direction}>
      {children}
    </FlexBoxWrapper>
  )
}
