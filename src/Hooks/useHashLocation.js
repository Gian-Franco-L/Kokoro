import { useState, useEffect, useCallback } from "react"

const currentLocation = () => {
  return window.location.hash.replace(/^#/, "") || "/";
};

export function useHashLocation(){
  const [loc, setLoc] = useState(currentLocation());

  useEffect(() => {
    const handler = () => setLoc(currentLocation());
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);

  const navigate = useCallback((to) => (window.location.hash = to), []);
  return [loc, navigate];
};