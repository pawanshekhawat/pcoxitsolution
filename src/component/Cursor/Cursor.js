import React, { useEffect, useState } from "react";
import AnimatedCursor from "react-animated-cursor";

const Cursor = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Define the media query breakpoints for $md-layout and $sm-layout
        const mdLayoutWidth = 992; // Example for $md-layout
        const smLayoutWidth = 768; // Example for $sm-layout

        // Function to check the screen size
        const checkScreenSize = () => {
            const screenWidth = window.innerWidth;

            // Hide cursor for medium and small screens
            if (screenWidth <= mdLayoutWidth || screenWidth <= smLayoutWidth) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        };

        // Initial check on component mount
        checkScreenSize();

        // Listen for window resize events
        window.addEventListener("resize", checkScreenSize);

        // Cleanup event listener on component unmount
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    return (
        <>
            {isVisible && (
                <AnimatedCursor
                    innerSize={30}
                    outerSize={30}
                    color="204, 47, 51"
                    outerAlpha={0.3}
                    innerScale={0.7}
                    outerScale={3}
                    clickables={[
                        "a",
                        "select",
                        "button",
                        ".link",
                        ".dropbtn",
                    ]}
                />
            )}
        </>
    );
};

export default Cursor;
