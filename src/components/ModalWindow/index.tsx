import React, {
  useEffect,
  useRef,
  useCallback,
  Dispatch,
  SetStateAction,
  ReactElement,
} from 'react';
import { Container } from './ModalWindowElements';

interface Props {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  children: ReactElement<any, any>;
  closeModal: () => void;
}

export const ModalWindow: React.FC<Props> = ({
  showModal,
  setShowModal,
  children,
  closeModal,
}) => {
  const ModalRef = useRef<HTMLHeadingElement>(null);

  // const closeModal = useCallback(() => {
  //   setShowModal(false);
  //   document.body.style.overflow = 'unset'; // allow scrolling once modal close
  // }, [setShowModal]);

  // click background (greyed out) to close modal
  const clickBackgroundToClose = (e: React.FormEvent<EventTarget>) => {
    if (ModalRef.current === e.target) {
      closeModal();
    }
  };

  // press 'esc' to close modal
  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && showModal) closeModal();
    },
    [showModal, closeModal]
  );

  // press 'esc' to close modal
  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.addEventListener('keydown', keyPress);
  }, [keyPress]);

  return (
    <Container ref={ModalRef} onClick={clickBackgroundToClose}>
      {/* {children} */}
      {React.cloneElement(children, { closeModal: closeModal })}
    </Container>
  );
};
