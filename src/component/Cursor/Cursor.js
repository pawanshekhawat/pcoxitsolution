import React from "react";
import AnimatedCursor from "react-animated-cursor";

const Cursor = () => {
    return (
        <AnimatedCursor
            innerSize={30}
            outerSize={30}
            color='252, 186, 3'
            outerAlpha={0.3}
            innerScale={0.7}
            outerScale={5}
            clickables={[
                'a',
                'input[type="text"]',
                'input[type="email"]',
                'input[type="number"]',
                'input[type="submit"]',
                'input[type="image"]',
                'label[for]',
                'select',
                'textarea',
                'button',
                '.link'
            ]}
        />
    );
};

export default Cursor;
