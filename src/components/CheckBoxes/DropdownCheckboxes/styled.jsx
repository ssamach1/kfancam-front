import styled from "styled-components";

export const DropdownCheckBoxesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
  max-height: ${(props) => props.$maxHeight || `auto`};
  min-width: ${(props) => props.$minWidth || `auto`};
  flex-wrap: wrap;
  align-items: flex-start;
  padding: 5px;

  @media (max-width: 649px) {
    max-height: 1000px;
  }
`;
