import Loader from "components/Loader";
import { ModalContent, StyledModal } from "../VideoModal/styled";

const LoadingModal = ({ children, ...props }) => {
  return (
    <StyledModal
      $active={props.active}
      $zIndex={props.zIndex}
      onClick={() => {
        props.setActive(false);
        props.setErrorModalMessage("");
      }}
    >
      <ModalContent
        $width={props.width}
        $minHeight={props.minHeight}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div>
          {children} {props.error ? "" : <Loader />}
        </div>
      </ModalContent>
    </StyledModal>
  );
};

export default LoadingModal;
