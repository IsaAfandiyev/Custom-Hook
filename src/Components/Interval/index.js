import React, { useState } from 'react';
import useInterval from "../Hooks/useInterval"

function Interval() {
    const [count, setCount] = useState(0);
    const [delay, setDelay] = useState(2000);
    const [play, setPlay] = useState(false);

    useInterval(
        () => {
            setCount(count + 1);
        },
        play ? delay : null || undefined
    );

    const handleChange = (event) => {
        setDelay(Number(event.target.value));
    };

    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => setPlay(!play)}>{play ? 'pause' : 'play'}</button>
            <p>
                <label htmlFor="delay">Delay: </label>
                <input type="number" name="delay" onChange={handleChange} value={delay} />
            </p>
        </>
    );
}

export default Interval;