import { useEffect } from "react";

const useUnloadWarning = (condition = true) => {
  useEffect(() => {
    if (!condition) {
      return;
    }
    const listener = (e: BeforeUnloadEvent) => {
      e.preventDefault();
    };
    window.addEventListener("beforeunload", listener);
    return () => {
      window.removeEventListener("beforeunload", listener);
    };
  }, [condition]);
};

export default useUnloadWarning;
