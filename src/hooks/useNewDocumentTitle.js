import { useEffect } from "react";

export default function useNewDocumentTitle(newTitle) {
  useEffect(function onMount() {
    document.title = newTitle;
  }, []);
}
