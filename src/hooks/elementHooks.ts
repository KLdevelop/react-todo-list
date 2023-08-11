import { useEffect, useRef, useState } from 'react';

export const useResizer = () => {
  const resizerRef = useRef<HTMLElement>(null);
  const resizableRef = useRef<HTMLElement>(null);

  const [moving, setMoving] = useState(false);

  useEffect(() => {
    const resizable = resizableRef.current;

    if (resizable !== null) {
      const onMouseMove = (e: MouseEvent) => {
        if (!moving) return;

        const width = e.clientX - resizable.offsetLeft;

        resizable.style.width = width + 'px';
      };

      window.addEventListener('mousemove', onMouseMove);

      return () => window.removeEventListener('mousemove', onMouseMove);
    }
  }, [moving]);

  useEffect(() => {
    const resizer = resizerRef.current;

    if (resizer !== null) {
      const onMouseDown = (e: MouseEvent) => {
        setMoving(true);
      };

      const onMouseUp = (e: Event) => {
        setMoving(false);
      };

      resizer.addEventListener('mousedown', onMouseDown);
      window.addEventListener('mouseup', onMouseUp);

      return () => {
        resizer.removeEventListener('mousedown', onMouseDown);
        window.removeEventListener('mouseup', onMouseUp);
      };
    }
  }, []);

  return { resizerRef, resizableRef };
};
