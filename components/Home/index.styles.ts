import styled from "styled-components";
import { THEME } from "../../common";

type TStyled = {
  theme: typeof THEME;
};


export const DivHomeWrapper = styled.div`
    
    font-family: Raleway, sans-serif;
    color: rgb(48, 48, 48);
    .section-card{
      padding-top: 30px; 
      background: #fff;
      .section-title{
        padding-top: 140px;
        text-align: center;
        h2{
          font-size: 30px;
          line-height: 40px;
          font-weight: 700;
          letter-spacing: 3px;
          margin-bottom: 20px;
        }
        p{
          color: rgb(119, 119, 119);
          font-size: 14px;
          font-weight: 400;
        }
      }

      .section-group{
        padding-top: 65px;
        padding-bottom: 84px;
        text-align: center;
        .section-item{
          box-sizing: border-box;
          padding: 0 15px;
        }
        
        .ant-card-meta-title{
          font-size: 18px;
          line-height: 20px;
          font-style: normal;
          font-weight: 700;
          letter-spacing: 1px;
          margin-bottom: 25px;
          margin-top: 40px
        }

        .ant-card-meta-description{
          color: rgb(119, 119, 119);
          font-size: 14px;
          font-weight: 400;
        }
        
      }
    }
    
    .section-count{
      padding: 0 15px;

      .section-item{
        box-sizing: border-box;
        padding: 20px 40px;
        text-align: center;
        font-weight: 700;
        .counter{
          font-size: 57px;
          color: rgb(119, 119, 119);
        }

        p{
          font-weight: 700;
          text-transform: uppercase;
          color: rgb(119, 119, 119);
          letter-spacing: 1px;
          font-size: 28px;
          line-height: 26px;
        }
      }
    }


`;