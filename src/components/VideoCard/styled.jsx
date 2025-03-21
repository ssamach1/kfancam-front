import {
  MAX_PREVIEW_HEIGHT,
  MAX_PREVIEW_WIDTH,
  MIN_PREVIEW_HEIGHT,
  MIN_PREVIEW_WIDTH,
  Z_INDEX_2,
} from "consts/general";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: inline-block;
  max-width: ${MAX_PREVIEW_WIDTH};

  box-shadow: 11px 10px 15px 0px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  background-color: #f1f3f5;

  position: relative;

  background-image: ${(props) =>
    `url(
      'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 162.5 132" width="162.5" height="132" style="opacity: 0.04;"><text x="0em" y="1em" font-size="52" transform="rotate(0 31.25 30)">${props.$idolEmoji}</text><text x="1.625em" y="2.1em" font-size="52" transform="rotate(0 112.5 85)">${props.$idolEmoji}</text></svg>'
    )`};
  background-position-y: center;
  background-size: 162.5px 132px;

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

  @media (max-width: 1840px) {
    min-width: ${MIN_PREVIEW_WIDTH};
  }
  @media (max-width: 1700px) {
    min-width: ${MAX_PREVIEW_WIDTH};
  }
  @media (max-width: 1500px) {
    min-width: ${MIN_PREVIEW_WIDTH};
  }
  @media (max-width: 1360px) {
    min-width: ${MAX_PREVIEW_WIDTH};
  }
  @media (max-width: 1160px) {
    min-width: ${MIN_PREVIEW_WIDTH};
  }
  @media (max-width: 1060px) {
    min-width: ${MAX_PREVIEW_WIDTH};
  }
  @media (max-width: 800px) {
    min-width: ${MIN_PREVIEW_WIDTH};
  }
  @media (max-width: 700px) {
    min-width: ${MAX_PREVIEW_WIDTH};
  }
  @media (max-width: 400px) {
    min-width: ${MIN_PREVIEW_WIDTH};
  }
`;

export const Thumbnail = styled.div`
  background: ${(props) => `url(${props.$thumbnail})`} center no-repeat;
  min-height: ${MAX_PREVIEW_HEIGHT};
  min-width: ${MAX_PREVIEW_WIDTH};
  max-width: 100%;
  background-size: cover;
  border-radius: 8px;

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

export const CardMain = styled.div`
  margin: 0 5px;
  position: relative;
  padding: 0.25rem 0px;
`;

export const CardTitle = styled.div`
  padding-top: 5px;

  color: #343a40;

  font-size: 18px;
  font-weight: 550;
  letter-spacing: -0.7px;
  line-height: 1.2;

  display: ${(props) => (props.$fancamCheck ? `-webkit-box` : `inline`)};
  -webkit-line-clamp: ${(props) => (props.$fancamCheck ? `2` : `none`)};
  -webkit-box-orient: ${(props) =>
    props.$fancamCheck ? `vertical` : `initial`};
  overflow: ${(props) => (props.$fancamCheck ? `hidden` : `visible`)};
  text-overflow: ${(props) => (props.$fancamCheck ? `ellipsis` : `initial`)};
`;

export const CardDescFlex = styled.div``;

export const CardDescInfoWrapper = styled.div`
  margin: 10px 10px;
  display: flex;
  gap: 30px;

  font-weight: 500;
  font-size: 1.1rem;
  letter-spacing: -0.6px;
  justify-content: space-between;

  @media (min-width: 2000px) {
    gap: 20px;
  }
  @media (min-width: 2230px) {
    gap: 30px;
  }
  @media (min-width: 2400px) {
    gap: 20px;
  }
  @media (min-width: 2556px) {
    gap: 30px;
  }

  @media (max-width: 1840px) {
    gap: 20px;
  }
  @media (max-width: 1700px) {
    gap: 30px;
  }
  @media (max-width: 1500px) {
    gap: 20px;
  }
  @media (max-width: 1360px) {
    gap: 30px;
  }
  @media (max-width: 1160px) {
    gap: 20px;
  }
  @media (max-width: 1060px) {
    gap: 30px;
  }
  @media (max-width: 800px) {
    gap: 20px;
  }
  @media (max-width: 700px) {
    gap: 30px;
  }
  @media (max-width: 400px) {
    gap: 20px;
  }
`;

export const CardDescInfo = styled.div`
  width: 90px;
`;

export const CardDescStat = styled.div`
  margin-bottom: 10px;
  display: flex;
  gap: 15px;
  justify-content: space-around;

  letter-spacing: -0.8px;
  font-weight: 550;
  font-size: 17px;
`;

export const CardFooter = styled.div``;

export const TagWrapper = styled.div`
  display: grid;
  grid-template-rows: 20px 20px;
  grid-template-columns: 20px 20px;
  gap: 2px;

  top: 5px;
  right: 15px;
  position: absolute;
`;

export const Tag = styled.div`
  margin-left: auto;
  margin-right: auto;
`;

export const Source = styled.div`
  padding-left: 10px;
  padding-top: 5px;
  position: absolute;
  right: 0;

  font-weight: 500;
`;

export const SourceChannel = styled.div`
  width: ${(props) => props.$width || `105px`};
  text-align: center;
`;
export const NotOverlappingDiv = styled.div`
  float: right;
  width: ${(props) => props.$width || `60px`};
  padding-bottom: ${(props) => props.$paddingBottom || `10px`};
  padding-left: ${(props) => props.$paddingLeft || `110px`};
`;

export const Tooltip = styled.div`
  position: relative;
  display: inline-block;

  &:hover .tooltip {
    visibility: visible;
    opacity: 1;
  }
`;

export const TooltipContent = styled.div`
  visibility: hidden;
  width: ${(props) => props.$width || `200px`};
  background-color: rgba(55, 55, 55, 0.9);
  color: #fff;
  font-weight: 500;
  text-align: center;
  border-radius: 6px;
  padding: ${(props) => props.padding || `10px`};
  position: absolute;
  z-index: ${Z_INDEX_2};
  bottom: 110%;
  left: -10%;
  margin-left: ${(props) => props.$marginLeft || `-70px`};
  @media (max-width: 570px) {
    margin-left: ${(props) => props.$mobileMarginLeft || "-10px"};
  }
  margin-bottom: ${(props) => props.$marginBottom || `0`};
  opacity: 0;
  transition: opacity 0.3s;
  min-width: 11rem;
  &:after {
    content: "";
    position: absolute;
    top: 100%;
    left: ${(props) => props.$left || `50%`};
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #555 transparent transparent transparent;
  }
`;

export const CookieDeletionButton = styled.div`
  position: absolute;
  top: 91%;
  left: 92%;
  margin: 5px;
  padding: 5px;
  cursor: pointer;
`;

export const RegionRestrictionWrapper = styled.div`
  position: absolute;
  top: 94%;
  left: 87%;
  width: 33px;
  display: flex;
  justify-content: end;
`;
