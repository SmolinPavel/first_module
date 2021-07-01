export const withHOC = (Component) => {
  return () => {
    return <Component hoc="😹" />;
  };
};

// withHOC(Cat) => ???
// () => <Cat hoc="😹" />
