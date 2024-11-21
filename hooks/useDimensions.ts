import React, { useEffect } from "react";

const useDimensions = (containerRef: React.RefObject<HTMLElement>) => {
  const [dimensions, setDimensions] = React.useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const currentRef = containerRef.current;

    const getDimensions = () => {
      return {
        width: containerRef.current?.offsetWidth || 0,
        height: containerRef.current?.offsetHeight || 0,
      };
    };

    const resizeObserver = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry) {
        setDimensions(getDimensions());
      }
    });

    if (currentRef) {
      resizeObserver.observe(currentRef);
      setDimensions(getDimensions());
    }

    return () => {
      if (currentRef) {
        resizeObserver.unobserve(currentRef);
      }
      resizeObserver.disconnect();
    };
  }, [containerRef]);

  return dimensions;
};

export default useDimensions;
