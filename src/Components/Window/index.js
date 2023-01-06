import React from 'react';
import useWindow from "../Hooks/useWindow";

const Window = () => {
    const size = useWindow();
    return (
        <div>
            {size.width}px / {size.height}px
        </div>
    );
};

export default Window;