import styled from "styled-components"
import { THEME } from "../../common"

type TStyled = {
  theme: typeof THEME
}

export const DivHomeWrapper = styled.div<{ background?: string }>`
  color: rgb(48, 48, 48);
  background: ${(props) => props.background ?? "#fff"};
  padding: 0;
`

export const MeetUsSectionWrapper = styled.div<{ backgroundUrl: string }>`
  min-height: 1px;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  padding: 160px 0;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${(props) => props.backgroundUrl});
  transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
  position: relative;
  border-radius: 8px;
  &:hover {
    .meet-us-section {
      &__overlay {
        background-color: ${THEME.primary};
        opacity: 0.8;
      }
    }
  }
`

export const MeetUsSectionOverlay = styled.div`
  transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
  background-color: ${THEME.gray};
  opacity: 0.6;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
  z-index: 2;
  border-radius: 8px;
`
export const MeetUsSectionContent = styled.div`
  z-index: 3;
  position: relative;
  a {
    color: ${props => props.theme.white} !important;
    font-weight: 600;
    text-decoration: underline;
    font-size: 20px;
  }
`
