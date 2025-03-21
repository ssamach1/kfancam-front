import styled from "styled-components";

export const StartPageGigaImage = styled.div`
  width: 100vw;
  height: 100vh;

  position: relative;
  z-index: -10;

  background-image: url(${(props) => props.$backgroundImage || `black`});
  background-position: ${(props) => props.$backgroundPosition || `center`};
  background-size: cover;
  background-repeat: no-repeat;
  filter: brightness(${(props) => props.$brightness || `100%`})
    blur(${(props) => props.$blur});
`;

export const Wrapper = styled.div`
  padding: 14px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  color: #fff;
  white-space: nowrap;

  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -40%);

  @media (max-width: 930px) {
    left: 55%;
    top: 15%;
    transform: translate(-55%, -15%);

    display: grid;
    grid-template-rows: repeat(3, 100px);
    row-gap: 200px;
  }

  @media (max-width: 600px) {
    grid-template-rows: repeat(3, 100px);
    row-gap: 275px;
  }
`;

export const HeaderLinkList = styled.div`
  position: relative;
  z-index: 1;

  color: ${(props) => props.$color || `white`};
  border-bottom: ${(props) => props.$borderBottom || `2px solid white`};
`;

export const AccordionTitle = styled.div`
  font-size: 3rem;
  font-weight: 550;
`;

export const Accordion = styled.div`
  padding: 15px;
  width: 10rem;
  height: 4rem;
  display: grid;
  position: absolute;
  top: 0rem;

  &:hover {
    .child {
      transform: translateY(0);
      opacity: 1;
    }
     .linksActive {
      pointer-events: auto;
    }
  }

  &.startPageActive {
    .child {
      transform: translateY(0);
      opacity: 1;
    }
    .linksActive {
      pointer-events: auto;
    }
  }

  .child {
    position: relative;
    left: 0rem;
    top: 3rem;
    transform: translateY(-10px);
    opacity: 0;
    transition: transform 500ms ease-in-out, opacity 500ms ease-in-out;
    pointer-events: none;
    white-space: nowrap;

    @media (max-width: 930px) {
      left: -30%;
      top: ${(props) => props.$top || `35%`};
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-auto-rows: auto;
      align-items: stretch;
    }

    @media (max-width: 600px) {
      grid-template-columns: repeat(1, 1fr);
      left: ${(props) => props.$left || `-15%`};
      top: 20%;
    }
`;

export const AccordionWrapper = styled.div`
  display: grid;
  transition: max-height 500ms ease-in-out, opacity 500ms ease-in-out;

  @media (max-width: 930px) {
    a:nth-child(2) {
      border-top: 1px solid black;
    }
  }

  a:nth-child(1) {
    border-top: 1px solid black;
  }
`;

export const GroupName = styled.div`
  position: relative;
  height: 100%;
  color: ${(props) => props.$color || `black`};
  text-align: ${(props) => props.$textAlign || `start`};
  padding: ${(props) => props.$padding || `10px 15px`};
  font-size: ${(props) => props.$fontSize || `1.8rem`};
  font-weight: ${(props) => props.$fontWeight || 600};
  white-space: nowrap;

  &::before {
    content: "";
    border-right: 1px solid black;
    border-bottom: 1px solid black;
    border-left: 1px solid black;
    background-image: url(${(props) => props.$backgroundImage || `black`});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    filter: brightness(${(props) => props.$brightness || `100%`});
  }
  &:hover {
    color: cyan;
  }
`;
