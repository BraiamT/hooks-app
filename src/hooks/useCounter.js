import { useState } from "react";

export const useCounter = ( initialValue = 0 ) => {

    const [counter, setCounter] = useState(initialValue);

    const increment = ( val = 1 ) => {
        setCounter(counter + val);
    }

    const decrement = ( val = 1 ) => {
        if ( counter <= 0 ) return;
        if ( counter >= val ) {
            setCounter(counter - val);
        }
    }

    const reset = () => {
        setCounter(initialValue);
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }

}
