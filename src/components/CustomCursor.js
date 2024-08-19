import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorImage, setCursorImage] = useState('/images/cursor_black.png');

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Check if the cursor is over a link, button, or any element with cursor pointer
      const isHoveringInteractiveElement = e.target.closest('a, button, [style*="cursor: pointer"]');

      if (isHoveringInteractiveElement) {
        setCursorImage('/images/cursor_pink.png'); // Change to your hover cursor image
      } else {
        setCursorImage('/images/cursor_black.png'); // Default cursor image
      }
    };

    document.addEventListener('mousemove', updateCursorPosition);

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  return (
    <div className='custom-cursor' style={{ left: `${position.x}px`, top: `${position.y}px` }}>
      <img src={process.env.PUBLIC_URL + cursorImage} alt='cursor' />
    </div>
  );
};

export default CustomCursor;
