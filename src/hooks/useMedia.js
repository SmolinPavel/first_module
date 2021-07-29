import { useEffect, useState } from "react";

/* 
    Usage
    
    const [value, setValue] = useState(0);
    const wideScreen = useMedia('(min-width: 600px)');
*/

export function useMedia(query) {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    let media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    let listener = () => setMatches(media.matches);
    window.media.addListener(listener);

    return () => window.media.removeListener(listener);
  }, [matches, query]);

  return matches;
}

/* Context hook 🙀

<CatContext.Provider value={{ catName: 'Barsik' }}>
  <>
    ...
    <Example />
    <Photo />
    <Message />
  </>
</CatContext.Provider>;

const Example = () => {
  const name = useCatName();

  return <h1>{name} is very cool!</h1>;
};

const useCatName = () => {
  const { catName } = useContext(CatContext); // { catName: 'Barsik }

  return catName;
} 

*/
