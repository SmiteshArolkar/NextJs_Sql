import React, { useState, useEffect } from 'react';

const TextCarousel = ({ texts, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, interval);

    return () => clearInterval(timer);
  }, [interval, texts]);

  return (
    <div className="relative h-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full flex">
        {texts.map((text, i) => (
          <div
            key={i}
            className={`w-full h-full  flex f items-center justify-center text-white text-4x font-semibold transform ${
              i === currentIndex
                ? 'translate-x-0 opacity-100'
                : 'translate-x-full opacity-0'
            } transition-transform transition-opacity duration-500 ease-in-out`}
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TextCarousel;
