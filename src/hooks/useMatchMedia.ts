import { useEffect, useState } from 'react';

const useMatchMedia = (query: string): boolean => {
  const getMatches = (q: string): boolean => {
    if (typeof window !== 'undefined') {
      return window.matchMedia(q).matches;
    }
    return false;
  };

  const [matches, setMatches] = useState<boolean>(getMatches(query));

  const handleChange = () => {
    setMatches(getMatches(query));
  };

  useEffect(() => {
    const matchMedia = window.matchMedia(query);

    handleChange();

    matchMedia.addEventListener('change', handleChange);
    return () => matchMedia.removeEventListener('change', handleChange);
  }, [query]);

  return matches;
};

export default useMatchMedia;
