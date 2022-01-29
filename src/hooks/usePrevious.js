import { useRef, useEffect } from "react";

// Source: https://stackoverflow.com/a/53446665
export default function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
