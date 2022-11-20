import styled from "styled-components"

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
`

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
`

export const DivProfileWrapper = styled.div`
  min-height: calc(100vh - 226px);
  background-color: #fff;
  color: #000;
  margin: 0 auto;
  padding: 24px 16px;
  @media (min-width: 768px) {
    padding: 48px 16px;
  }
  .ant-form {
    @media (min-width: 768px) {
      max-width: 570px;
      margin: 0 auto;
    }
  }
  .profile-item {
    font-size: 16px;
    margin-bottom: 12px;
    .label {
      color: rgb(0, 0, 0, 0.8);
    }
    .value {
      padding: 12px 0;
      border-bottom: 1px solid ${(props) => props.theme.border};
      .ant-form-item {
        margin: 0 !important;
        .ant-form-item-control-input {
          min-height: auto;
          .ant-input {
            height: auto;
          }
        }
      }
    }
  }
`
