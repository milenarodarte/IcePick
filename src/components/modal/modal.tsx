import React from "react";
import { StyledContainerModal } from "./styledComponents";
import { useModal } from '../../hooks/useModal';

const Modal = () => {
  const { closeModal, childrenModal, animationModal } = useModal();

  return (
    <StyledContainerModal animationModal={animationModal}>
      <div className="modal">
        <button onClick={closeModal} className="btnCloseModal">X</button>
        {childrenModal}
      </div>
    </StyledContainerModal>
  );
};

export default Modal;
