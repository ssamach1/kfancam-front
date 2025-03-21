import { HEADER_COLOR } from "../../consts/general";
import styled from "styled-components";

export const FuckingPoloska = styled.div`
  width: 100vw;
  border-bottom: 0.75rem solid transparent;
  border-image: ${(props) =>
    props.$gradient + 1 || `linear-gradient(to right, #111111, #111111) 1`};
`;

export const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  background-color: ${HEADER_COLOR};
  .idols {
    @media (max-width: 841px) {
      display: none;
    }
  }
`;

export const HeaderLinksGroup = styled.div`
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  color: #fff;
  margin-right: ${(props) => props.$marginRight || `0px`};
  margin-left: ${(props) => props.$marginLeft || `0px`};
`;

export const HeaderLinkList = styled.div`
  // z-index: 10;
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
  pointer-events: ${(props) => props.$pointerEvents || "auto"};

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

export const AccordionTitle = styled.div`
  font-size: 1.1rem;
  color: ${(props) => props.$color || `black`};
`;

export const Accordion = styled.div`
  padding: 10px;
  width: 6rem;
  height: 2.5rem;
  display: grid;
  position: ${(props) => props.$position || `absolute`};
  top: ${(props) => props.$top || `0.5rem`};
  ${(props) => props.$left !== undefined && `left: ${props.$left};`}
  
  &:hover {
    .child {
      transform: translateY(0);
      opacity: 1;
      z-index: 10000;
    }
    .linksActive {
      pointer-events: auto;
    }

}

  .child {
    position: relative;
    top: 1.5rem;
    opacity: 0;
    transform: translateY(-20px);
    transition: transform 500ms ease-in-out, opacity 500ms ease-in-out;
    pointer-events: none;
  }

  .lastIdolAccordion {
    left: -9rem;
  }

  .idolChild {
  opacity: 0;
  transform: translateX(-10px);
  transition: transform 500ms ease-in-out, opacity 500ms ease-in-out;
  pointer-events: none;
}

  

  @media (max-width: 519px) {
    .lastAccordion {
      left: -3.5rem;
    }
  }
  @media (max-width: 459px) {
    .lastAccordion {
      left: -5.5rem;
    }
        @media (max-width: 429px) {
    .lastAccordion {
      left: -9.5rem;
    }
  }
`;

export const IdolAccordion = styled.div`
  padding: 10px;
  width: 100%;
  height: ${(props) => props.$height || `2.5rem`};
  display: grid;
  position: ${(props) => props.$position || `absolute`};
  top: ${(props) => props.$top || `0.5rem`};
  ${(props) => props.$left !== undefined && `left: ${props.$left};`}

  &:hover {
    .idolChild {
      transform: translateY(0);
      opacity: 1;
    }
    .linksActive {
      pointer-events: auto;
    }
  }
}

  @media (max-width: 519px) {
    .lastAccordion {
      left: -3.5rem;
    }
  }
  @media (max-width: 459px) {
    .lastAccordion {
      left: -5.5rem;
    }
        @media (max-width: 429px) {
    .lastAccordion {
      left: -9.5rem;
    }
  }
`;

export const AccordionWrapper = styled.div`
  display: grid;
  ${(props) => props.$top !== undefined && `top: ${props.$top};`}
  ${(props) => props.$left !== undefined && `left: ${props.$left};`}
  position: relative;

  a:nth-child(1) {
    border-top: 1px solid black;
  }
  a:hover {
    .test {
      color: cyan;
    }
  }
`;

export const IdolName = styled.div`
  position: relative;
  height: 100%;
  width: auto;
  color: ${(props) => props.$color || `black`};
  text-align: ${(props) => props.$textAlign || `start`};
  padding: ${(props) => props.$padding || `10px 15px`};
  font-size: ${(props) => props.$fontSize || `1.8rem`};
  font-weight: ${(props) => props.$fontWeight || 600};
  white-space: nowrap;

  background-color: rgba(0, 0, 0, 0.3);

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
