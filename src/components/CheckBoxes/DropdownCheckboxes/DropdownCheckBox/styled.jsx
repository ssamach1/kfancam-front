import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 30px;
`;

export const CheckBoxName = styled.div`
  font-size: 17px;
  font-weight: 450;
  padding-right: 5px;
  white-space: nowrap;
  max-width: ${(props) => props.$maxWidth || `200px`};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
