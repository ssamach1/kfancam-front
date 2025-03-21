import styled from "styled-components";

export const LogInWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

export const LogInFormWrapper = styled.div`
  display: flex;
  gap: 20px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.1);
  box-shadow: 11px 10px 15px 0px rgba(0, 0, 0, 0.2);
`;

export const SignInButton = styled.button`
  white-space: nowrap;
  height: fit-content;
  padding: 5px 10px;
  font-size: 1rem;
  margin-top: auto;
`;

export const CreatePageFlexWrapper = styled.div`
  display: flex;
  @media (max-width: 1156px) {
    display: inline-block;
  }
`;

export const AdditionalFormsWrapper = styled.div`
  display: flex;
  gap: 50px;
  margin-left: 10vh;
`;

export const CreatePageName = styled.div`
  width: fit-content;
  margin-right: auto;
  padding: 5px 10px 5px 10px;
`;

export const InputForm = styled.div``;

export const CreateInputWrapper = styled.div`
  position: relative;
  margin: 5px 10px;
`;

export const LinkFlexWrapper = styled.div`
  display: flex;
  margin-top: 40px;
  margin-bottom: 70px;
`;
