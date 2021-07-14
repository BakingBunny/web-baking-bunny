import { useState, useEffect } from 'react';

export const useWindowSize = (): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const checkScreenSize = () =>
    window.innerWidth > 960 ? setIsMobile(false) : setIsMobile(true);

  useEffect(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return isMobile;
};
