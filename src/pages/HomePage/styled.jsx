import styled from "styled-components";
import {
  HEADER_HEIGHT,
  MAX_PREVIEW_WIDTH,
  MIN_PREVIEW_WIDTH,
} from "../../consts/general";

export const DropdownsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  @media (max-width: 1199px) {
    display: inline-block;
  }
  @media (max-width: 649px) {
    display: inline-block;
  }
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, ${MAX_PREVIEW_WIDTH});
  row-gap: 20px;
  justify-content: space-between;

  @media (min-width: 2000px) {
    grid-template-columns: repeat(6, ${MIN_PREVIEW_WIDTH});
  }
  @media (min-width: 2230px) {
    grid-template-columns: repeat(6, ${MAX_PREVIEW_WIDTH});
  }
  @media (min-width: 2400px) {
    grid-template-columns: repeat(7, ${MIN_PREVIEW_WIDTH});
  }
  @media (min-width: 2556px) {
    grid-template-columns: repeat(7, ${MAX_PREVIEW_WIDTH});
  }

  @media (max-width: 1840px) {
    grid-template-columns: repeat(5, ${MIN_PREVIEW_WIDTH});
  }
  @media (max-width: 1700px) {
    grid-template-columns: repeat(4, ${MAX_PREVIEW_WIDTH});
  }
  @media (max-width: 1500px) {
    grid-template-columns: repeat(4, ${MIN_PREVIEW_WIDTH});
  }
  @media (max-width: 1360px) {
    grid-template-columns: repeat(3, ${MAX_PREVIEW_WIDTH});
    justify-content: space-evenly;
  }
  @media (max-width: 1160px) {
    grid-template-columns: repeat(3, ${MIN_PREVIEW_WIDTH});
  }
  @media (max-width: 1060px) {
    grid-template-columns: repeat(2, ${MAX_PREVIEW_WIDTH});
  }
  @media (max-width: 800px) {
    grid-template-columns: repeat(2, ${MIN_PREVIEW_WIDTH});
  }
  @media (max-width: 740px) {
    justify-content: space-between;
  }
  @media (max-width: 700px) {
    grid-template-columns: repeat(1, ${MAX_PREVIEW_WIDTH});
    justify-content: space-evenly;
  }
  @media (max-width: 400px) {
    grid-template-columns: repeat(1, ${MIN_PREVIEW_WIDTH});
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
  margin-bottom: 5px;
`;

export const BodyWrapper = styled.div`
  padding: 15px;
  min-height: calc(100vh - ${HEADER_HEIGHT}px);
  background-image: ${(props) => props.$groupGradient};
  background-size: cover;
  background-repeat: no-repeat;
`;

export const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const CountWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const SearchWrapper = styled.div``;

export const AdditionalFiltersWrapper = styled.div`
  display: flex;
  gap: 1rem;
  @media (max-width: 1039px) {
    display: inline-block;
  }
`;
