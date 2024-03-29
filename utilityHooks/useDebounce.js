import React from "react";

export default function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = React.useState(value);

    React.useEffect(() => {
        const setDebouncedValueHandler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(setDebouncedValueHandler);
        };
    }, [value, delay]);

    return debouncedValue;
}
