import React from 'react';

interface ArrowButtonProps {
  handleScroll: () => void; // Function for the onClick behavior
}

const ArrowButton: React.FC<ArrowButtonProps> = ({ handleScroll }) => {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <button
        onClick={handleScroll}
        aria-label="Continue Reading"
        className="p-2 rounded-full bg-red-600 hover:bg-red-700 hover:scale-110 transition-all duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>
  );
};

export default ArrowButton;