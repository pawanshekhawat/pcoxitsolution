import React, { useState, useEffect, useRef } from 'react';

const ImageWithPriority = ({ src, alt, priority }) => {
    const [isInView, setIsInView] = useState(priority); // Load immediately if priority is true
    const imgRef = useRef(null);

    useEffect(() => {
        if (priority) return; // If priority, no need for observer

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsInView(true);
                        observer.disconnect(); // Stop observing after the image is loaded
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (imgRef.current) observer.observe(imgRef.current);

        return () => {
            if (imgRef.current) observer.disconnect();
        };
    }, [priority]);

    return (
        <img
            ref={imgRef}
            src={isInView ? src : undefined}
            alt={alt}
            loading={priority ? 'eager' : 'lazy'}
            style={{ width: '100%', height: 'auto' }}
        />
    );
};

export default ImageWithPriority;
