import { createGlobalStyle } from "styled-components";
import { THEME } from "../common";

type TStyled = {
  theme: typeof THEME;
};

export const GlobalStyle = createGlobalStyle`
  html,
    body {
        // font-family: $body-font;
        font-family: ${(props: TStyled) => props.theme.primaryFont};
        font-size: 14px;

    }
    h1{
      font-size:45px ;
      font-weight:bold ;
    }
    .text-center{
      text-align: center ;
    };
    p{
      color:#000 ;
    }
    .d-flex{
      display:flex ;
    }
    .bold{
      font-weight:bold ;
    }
    .text-center{
      text-align:center ;
    }
    .ellipsis {
        display: -webkit-box !important;
        -webkit-line-clamp: 1 !important;
        -webkit-box-orient: vertical !important;
        overflow: hidden !important;
        white-space: normal !important;
        &-1 {
        width: calc(90%);
        overflow: hidden;
        position: relative;
        display: inline-block ;
        text-decoration: none;
        text-overflow: ellipsis;
        white-space: nowrap ;
        }
    }
    .btn-primary{
      border:2px solid #303030 ;
      text-transform:uppercase ;
      &:hover,:active{
        background-color:#1abc9c ;
        border-color:#1abc9c ;
        color:#fff ;
      }
    }
    .container{
  position:relative;
  margin-left:auto;
  margin-right:auto;
  padding-right:15px;
  padding-left:15px
}
@media (min-width: 476px){
  .container{
    padding-right:15px;
    padding-left:15px
  }
}
@media (min-width: 768px){
  .container{
    padding-right:15px;
    padding-left:15px
  }
}
@media (min-width: 992px){
  .container{
    padding-right:15px;
    padding-left:15px
  }
}
@media (min-width: 1200px){
  .container{
    padding-right:15px;
    padding-left:15px
  }
}
@media (min-width: 476px){
  .container{
    width:100%
  }
}
@media (min-width: 768px){
  .container{
    width:720px;
    max-width:100%
  }
}
@media (min-width: 992px){
  .container{
    width:960px;
    max-width:100%
  }
}
@media (min-width: 1200px){
  .container{
    width:1140px;
    max-width:100%
  }
}
@media (min-width: 1400px){
  .container{
    width:1340px;
    max-width:100%
  }
}
`;
