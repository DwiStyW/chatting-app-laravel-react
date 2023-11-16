import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function Search({ type = 'text', className = '', isFocused = false, ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            className={
                'border-0 focus:border-0 focus:ring-0 rounded-md shadow-sm ' +
                className
            }
            ref={input}
        />
    );
});
