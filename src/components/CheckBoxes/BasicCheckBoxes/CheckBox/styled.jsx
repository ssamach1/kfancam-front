import styled from "styled-components";

export const BiggerLink = styled.div`
  padding: 3px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding-right: 30px;
`;

export const CheckBoxName = styled.div`
  font-size: 1rem;
  font-weight: 400;
  padding-right: 5px;
  max-width: ${(props) => props.$maxWidth || `200px`};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
