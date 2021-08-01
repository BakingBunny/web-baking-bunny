import React, { useEffect, useRef, useCallback, ReactElement } from 'react';
import { Container } from './ModalWindowElements';

interface Props {
  isModalOpen: boolean;
  closeModal: () => void;
  children: ReactElement<any, any>;
}

export const ModalWindow: React.FC<Props> = ({
  isModalOpen,
  children,
  closeModal,
}) => {
  const ModalRef = useRef<HTMLHeadingElement>(null);

  // click background (greyed out) to close modal
  const clickBackgroundToClose = (e: React.FormEvent<EventTarget>) => {
    if (ModalRef.current === e.target) {
      closeModal();
    }
  };

  // press 'esc' to close modal
  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && isModalOpen) closeModal();
    },
    [isModalOpen, closeModal]
  );

  // press 'esc' to close modal
  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.addEventListener('keydown', keyPress);
  }, [keyPress]);

  return (
    <Container ref={ModalRef} onClick={clickBackgroundToClose}>
      {children}
    </Container>
  );
};
