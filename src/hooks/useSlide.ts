import { useCallback, useState } from 'react';

const useSlide = () => {
  const [dragging, setDragging] = useState(false);

  const handleBeforeChange = useCallback(() => {
    setDragging(true);
  }, []);

  const handleAfterChange = useCallback(() => {
    setDragging(false);
  }, []);

  return { dragging, handleAfterChange, handleBeforeChange };
};

export default useSlide;
