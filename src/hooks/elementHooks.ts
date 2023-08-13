import { useEffect, useRef, useState } from 'react';

interface ResizingRefs {
  /** ref элемента, который меняет ширину. */
  resizerRef: React.RefObject<HTMLElement>;

  /** ref элемента, ширину которого нужно менять. */
  resizableRef: React.RefObject<HTMLElement>;
}

/**
 * Возвращает ref элемента, меняющего ширину другого элемента,
 * и ref элемента, ширину которого нужно менять.
 */
export const useResizer = (): ResizingRefs => {
  const resizerRef = useRef<HTMLElement>(null);
  const resizableRef = useRef<HTMLElement>(null);

  /** Флаг перемещения элемента resizer */
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
      const onMouseDown = () => {
        setMoving(true);
      };

      const onMouseUp = () => {
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
