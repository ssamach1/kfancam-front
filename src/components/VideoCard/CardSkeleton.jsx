import Skeleton from "react-loading-skeleton";
import styled from "styled-components";
import "react-loading-skeleton/dist/skeleton.css";
import {
  MAX_PREVIEW_HEIGHT,
  MAX_PREVIEW_WIDTH,
  MIN_PREVIEW_HEIGHT,
  MIN_PREVIEW_WIDTH,
} from "consts/general";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, ${MAX_PREVIEW_WIDTH});
  row-gap: 20px;
  column-gap: 15px;
  justify-content: space-between;

  @media (min-width: 2000px) {
    min-width: ${MIN_PREVIEW_WIDTH};
  }
  @media (min-width: 2230px) {
    min-width: ${MAX_PREVIEW_WIDTH};
  }
  @media (min-width: 2400px) {
    min-width: ${MIN_PREVIEW_WIDTH};
  }
  @media (min-width: 2556px) {
    min-width: ${MAX_PREVIEW_WIDTH};
  }

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

const CustomSkeletonThumbnail = styled(Skeleton)`
  min-height: ${MAX_PREVIEW_HEIGHT};
  min-width: ${MAX_PREVIEW_WIDTH};

  @media (min-width: 2000px) {
    min-height: ${MIN_PREVIEW_HEIGHT};
    min-width: ${MIN_PREVIEW_WIDTH};
  }
  @media (min-width: 2230px) {
    min-height: ${MAX_PREVIEW_HEIGHT};
    min-width: ${MAX_PREVIEW_WIDTH};
  }

  @media (min-width: 2400px) {
    min-height: ${MIN_PREVIEW_HEIGHT};
    min-width: ${MIN_PREVIEW_WIDTH};
  }

  @media (min-width: 2556px) {
    min-height: ${MAX_PREVIEW_HEIGHT};
    min-width: ${MAX_PREVIEW_WIDTH};
  }

  @media (max-width: 1840px) {
    min-height: ${MIN_PREVIEW_HEIGHT};
    min-width: ${MIN_PREVIEW_WIDTH};
  }
  @media (max-width: 1700px) {
    min-height: ${MAX_PREVIEW_HEIGHT};
    min-width: ${MAX_PREVIEW_WIDTH};
  }
  @media (max-width: 1500px) {
    min-height: ${MIN_PREVIEW_HEIGHT};
    min-width: ${MIN_PREVIEW_WIDTH};
  }
  @media (max-width: 1360px) {
    min-height: ${MAX_PREVIEW_HEIGHT};
    min-width: ${MAX_PREVIEW_WIDTH};
  }
  @media (max-width: 1160px) {
    min-height: ${MIN_PREVIEW_HEIGHT};
    min-width: ${MIN_PREVIEW_WIDTH};
  }
  @media (max-width: 1060px) {
    min-height: ${MAX_PREVIEW_HEIGHT};
    min-width: ${MAX_PREVIEW_WIDTH};
  }
  @media (max-width: 800px) {
    min-height: ${MIN_PREVIEW_HEIGHT};
    min-width: ${MIN_PREVIEW_WIDTH};
  }
  @media (max-width: 700px) {
    min-height: ${MAX_PREVIEW_HEIGHT};
    min-width: ${MAX_PREVIEW_WIDTH};
  }
  @media (max-width: 400px) {
    min-height: ${MIN_PREVIEW_HEIGHT};
    min-width: ${MIN_PREVIEW_WIDTH};
  }
`;

const SkeletonTitle = styled(Skeleton)`
  @media (max-width: 1840px) {
    width: calc(${MIN_PREVIEW_WIDTH} - 20px) !important;
  }
  @media (max-width: 1700px) {
    width: calc(${MAX_PREVIEW_WIDTH} - 20px) !important;
  }
  @media (max-width: 1500px) {
    width: calc(${MIN_PREVIEW_WIDTH} - 20px) !important;
  }
  @media (max-width: 1360px) {
    width: calc(${MAX_PREVIEW_WIDTH} - 20px) !important;
  }
  @media (max-width: 1160px) {
    width: calc(${MIN_PREVIEW_WIDTH} - 20px) !important;
  }
  @media (max-width: 1060px) {
    width: calc(${MAX_PREVIEW_WIDTH} - 20px) !important;
  }
  @media (max-width: 800px) {
    width: calc(${MIN_PREVIEW_WIDTH} - 20px) !important;
  }
  @media (max-width: 700px) {
    width: calc(${MAX_PREVIEW_WIDTH} - 20px) !important;
  }
  @media (max-width: 400px) {
    width: calc(${MIN_PREVIEW_WIDTH} - 20px) !important;
  }
`;

const SkeletonCard = styled.div`
  border-radius: 8px;
  background-color: white;
`;

const SkeletonMargin = styled.div`
  margin-top: ${(props) => props.$marginTop || `0px`};
  margin-bottom: ${(props) => props.$marginBottom || `0px`};
  margin-left: ${(props) => props.$marginLeft || `0px`};
  margin-right: ${(props) => props.$marginRight || `0px`};
`;

const SkeletonFlex = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 10px;
`;

const SkeletonBodyBorder = styled.div`
  border-right: 1px solid #ebebeb;
  border-left: 1px solid #ebebeb;
  border-bottom: 1px solid #ebebeb;
`;

const CardSkeleton = () => {
  return (
    <Wrapper>
      {Array(15)
        .fill(0)
        .map((e, i) => (
          <SkeletonCard key={i}>
            <SkeletonBodyBorder>
              <SkeletonMargin $marginBottom={`5px`}>
                <CustomSkeletonThumbnail />
              </SkeletonMargin>
              <SkeletonMargin $marginLeft={`10px`} $marginBottom={`10px`}>
                <SkeletonTitle count={3} height={18} />
              </SkeletonMargin>
              <SkeletonFlex>
                <Skeleton width={80} height={50} />
                <Skeleton width={80} height={50} />
                <Skeleton width={80} height={50} />
              </SkeletonFlex>
              <SkeletonFlex>
                <Skeleton width={80} height={50} />
                <Skeleton width={120} height={50} />
              </SkeletonFlex>
            </SkeletonBodyBorder>
          </SkeletonCard>
        ))}
    </Wrapper>
  );
};

export default CardSkeleton;
