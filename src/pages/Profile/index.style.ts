import styled from "styled-components";

export const DivProfileWrapper = styled.div`
  background-color: #f6f6f6;
  
  .container-inner{
    width: 60%;
    padding: 120px 0;
    margin: 0 auto;

    @media only screen and (max-width: 960px){
      padding: 90px 0;
      width: 80%;
    }
    @media only screen and (max-width: 435px){
      padding:  0;
      width: 100%;
    }

    .profile{
      background-color: #fff;
      box-shadow: 0 2px 20px rgb(45 53 89 / 10%);
      padding: 30px;

      .avatar{
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 10px 0;
        .ant-avatar{
          margin: 10px 0
        }

        .name {
          font-size: 20px;
        }

      }

      form{
        padding: 10px 30px;
         @media only screen and (max-width: 960px){
          padding: 10px 0px;
        }

        .city-country{
          justify-content: space-between;
        }
        .btn-submit{
          width: 100%;
          margin-top: 10px;
          background-color: #252525;
          color: #fff
        }
      }
    }
  }
  
`;
