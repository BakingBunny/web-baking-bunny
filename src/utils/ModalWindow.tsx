import React, {
  useEffect,
  useRef,
  useCallback,
  ReactElement,
  Dispatch,
  SetStateAction,
} from 'react';
// import { FaLastfmSquare } from 'react-icons/fa';
import styled from 'styled-components';

interface Props {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  children: ReactElement<any, any>;
}

const Container = styled.div`
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8) !important;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;

export const ModalWindow: React.FC<Props> = ({
  showModal,
  children,
  setShowModal,
}) => {
  const ModalRef = useRef<HTMLHeadingElement>(null);

  useEffect((): (() => void) => {
    document.body.style.overflow = 'hidden'; // prevent background scrolling when modal open
    return () => (document.body.style.overflow = 'unset'); // allow scrolling once modal close
  });

  // click background (greyed out) to close modal
  const clickBackgroundToClose = (e: React.FormEvent<EventTarget>) => {
    if (ModalRef.current === e.target) {
      setShowModal(false);
    }
  };

  // press 'esc' to close modal
  const keyPress = useCallback(
    (e): void => {
      if (e.key === 'Escape' && showModal) setShowModal(false);
    },
    [showModal, setShowModal]
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
