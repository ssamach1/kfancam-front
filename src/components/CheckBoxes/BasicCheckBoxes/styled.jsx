import styled from "styled-components";

export const CheckBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.25rem;
  max-height: ${(props) => props.$maxHeight || `auto`};
  min-width: ${(props) => props.$minWidth || `auto`};
  flex-wrap: wrap;
  align-items: flex-start;
  padding: 5px 10px;
`;

export const TitleCheckBox = styled.div`
  font-weight: 500;
  font-size: 1.1rem;
  padding: 0px 5px;
  margin-right: 5px;
`;

export const SplittedArraysWrapper = styled.div`
  display: flex;
`;
