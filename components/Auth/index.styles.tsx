import styled from "styled-components";

export const DivLoginWrapper = styled.div`
  padding: 70px 0px;
  .header {
    margin-bottom: 30px;
  }
  .login-form {
    width: 500px;
  }
  .login-form-forgot {
    float: right;
  }
  .ant-col-rtl .login-form-forgot {
    float: left;
  }
`;

export const DivSignupWrapper = styled.div`
  padding: 70px 0px;
  .signup-form {
    width: 500px;
    margin: 0 auto;
  }
  .login-form-forgot {
    float: right;
  }
  .ant-col-rtl .login-form-forgot {
    float: left;
  }
`;

export const DivProfileWrapper = styled.div`
  background-color: #f6f6f6;

  .container-inner {
    padding: 120px 0;

    .profile {
      box-shadow: 0 3px 10px rgb(0 0 0 / 20%);
      background-color: #fff;
      color: #000;
      border: 1px solid #999;
      margin: 0 auto;

      .ant-row {
        padding: 10px;
        font-size: 14px;
        border-bottom: 1px solid #999;
        .label {
          padding-left: 5px;
          font-weight: bold;
        }
      }
    }
  }
`;
