import styled from "styled-components";

export const YoutubeWrapper = styled.div`
  position: relative;

  &::before {
    display: ${(props) =>
      props.$youtubePlayerLoading ? `inline-block` : `none`};
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    z-index: 1;
  }
`;

export const StyledModal = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => (props.$modalActive ? 1 : 0)};
  pointer-events: ${(props) => (props.$modalActive ? "all" : "none")};
  transition: 0.3s;
  overflow: scroll;
`;

export const ModalContent = styled.div`
  padding: 15px;
  border-radius: 12px;
  background-color: white;
  transition: 0.3s all;
  transform: scale(${(props) => (props.modalActive ? 0.5 : 1)});
  width: auto;
  @media (max-width: 1400px) {
    max-width: 670px;
    width: ${(props) => (props.$width ? props.$width * 0.795 + `px` : `auto`)};
  }
  @media (max-width: 570px) {
    padding: 10px;
  }
`;

export const ModalBody = styled.div`
  display: flex;
  gap: 15px;
  width: fit-content;
  @media (max-width: 1400px) {
    display: inline-block;
  }
`;

export const ModalDesc = styled.div`
  background-image: ${(props) =>
    `url(
      'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 162.5 132" width="162.5" height="132" style="opacity: 0.04;"><text x="0em" y="1em" font-size="52" transform="rotate(0 31.25 30)">${props.$idolEmoji}</text><text x="1.625em" y="2.1em" font-size="52" transform="rotate(0 112.5 85)">${props.$idolEmoji}</text></svg>'
    )`};
  background-position-y: center;
  background-size: 162.5px 132px;
`;

export const ModalDescGridWrapper = styled.div`
  display: flex;
  grid-template-columns: ${(props) => props.columns || `1fr 1fr`};
  justify-content: space-between;
  @media (max-width: 570px) {
    display: inline-block;
  }
`;

export const ModalRatioFlexWrapper = styled.div`
  display: flex;
  gap: 3rem;
  @media (max-width: 570px) {
    display: inline-block;
  }
`;

export const ModalDescBlock = styled.div`
  margin-bottom: 1rem;
`;

export const ModalHeadBlock = styled.div`
  width: 600px;
  margin-right: 5px;
  @media (max-width: 1400px) {
    width: auto;
  }
`;

export const ModalTitle = styled.div`
  margin-bottom: 0.5rem;
  font-weight: 500;
  font-size: 1.1rem;
`;

export const ModalLinkWrapper = styled.div`
  color: #228be6;
`;

export const ModalDescElement = styled.div`
  margin-bottom: 0.25rem;
`;

export const ModalTagsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 0.25rem;
`;

export const ModalRatioWrapper = styled.div`
  display: grid;
  grid-template-rows: 4fr;
  grid-template-columns: 1fr;
`;

export const ModalStatsAccordionWrapper = styled.div`
  padding: 10px;
  display: grid;
  grid-template-rows: 0fr;
  background-color: rgba(0, 0, 0, 0.1);
  &:hover {
    grid-template-rows: 1fr;
  }
  transition: grid-template-rows 500ms;

  .child {
    overflow: hidden;
  }
`;

export const ModalStatsAccordion = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;
