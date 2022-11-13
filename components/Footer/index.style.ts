import styled from "styled-components"

export const DivFooterWrapper = styled.div`
  position: sticky;
  top: 100%;
  background: #252525;
  text-align: center;
  color: #fff;
  padding: 1rem;
  padding-bottom: 50px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  .list-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 20px;
    .icon {
      width: 49px;
      height: 40px;
      background-color: rgba(255, 255, 255, 0.01);
      border: 2px solid rgb(255, 255, 255);
      margin: 0px 8px 0px 0px;
      font-size: 18px;
      border-radius: 3px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
  }
`
