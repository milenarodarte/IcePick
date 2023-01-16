import React, { createContext, useState } from "react";

interface iModalContextProps {
  stateModal: boolean;
  showModal: (children: React.ReactNode) => void;
  closeModal: () => void;
  childrenModal: React.ReactNode;
  animationModal: boolean;
}

interface iModalProviderProps {
  children: React.ReactNode;
}

export const modalContext = createContext({} as iModalContextProps);

const ModalProvider = ({ children }: iModalProviderProps) => {
  const [stateModal, setStateModal] = useState(false);
  const [animationModal, setAnimationModal] = useState(false);
  const [childrenModal, setChildrenModal] = useState<React.ReactNode>();

  const showModal = (children: React.ReactNode) => {
    setStateModal(true);
    setAnimationModal(true);
    setChildrenModal(children);
  };

  const closeModal = () => {
    setAnimationModal(false);
    setTimeout(() => {
      setStateModal(false);
    }, 800);
  };

  return (
    <modalContext.Provider
      value={{
        stateModal,
        showModal,
        closeModal,
        childrenModal,
        animationModal,
      }}
    >
      {children}
    </modalContext.Provider>
  );
};

export default ModalProvider;
