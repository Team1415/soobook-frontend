import { useEffect, useRef, useState } from 'react';

import { get } from 'lodash-es';
import { useLocation } from 'react-router-dom';

const useHeightAnimation = () => {
  const { state } = useLocation();

  const [animate, setAnimate] = useState(false);

  const componentHeightRef = useRef<number | null>(null);

  useEffect(() => {
    componentHeightRef.current = (get(state, 'height') as number) || null;
    setAnimate(true);
  }, []);

  return { animate, componentHeight: componentHeightRef.current };
};

export default useHeightAnimation;
