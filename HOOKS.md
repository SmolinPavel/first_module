# HOOKS

- useState
- useEffect
- useRef
- useContext
- useCallback
- useMemo
- useSelector (react-redux)
- useDispatch (react-redux)

// 1. Initial `value` prop = 1
// 2. `value` is updated to 2
// 3. User closes the page

const Example = ({ value }) => {
useEffect(() => {
console.log('effect');

        return () => console.log('unmount');
    }, [value]);

    return null;

}

// effect
// unmount
// effect
// unmount
