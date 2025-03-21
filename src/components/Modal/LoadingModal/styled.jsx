import styled from "styled-components";

const StyledModal = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => (props.$active ? 1 : 0)};
  pointer-events: ${(props) => (props.$active ? "all" : "none")};
  transition: 0.3s;
  overflow: scroll;
  z-index: ${(props) => props.$zIndex};
`;

const ModalContent = styled.div`
  padding: 15px;
  background-color: white;
  transition: 0.3s all;
  transform: scale(${(props) => (props.active ? 0.5 : 1)});
  width: ${(props) => props.$width || `80vw`};
  min-height: ${(props) => props.$minHeight || `360px`};
  white-space: pre-line;
`;
