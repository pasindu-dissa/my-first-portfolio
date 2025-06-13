'use client';

import React, { useState, useRef, useEffect } from 'react';

interface CollapseProps {
  title: string;
  children: React.ReactNode;
}

const Collapse: React.FC<CollapseProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState('0px');

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
    }
  }, [isOpen]);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col w-full max-w-xs bg-black border border-gray-800 shadow-md shadow-gray-900/50 hover:shadow-gray-800/50 transition-shadow duration-300">
      <button
        onClick={toggleCollapse}
        className="flex items-center justify-between p-3 text-left bg-black hover:bg-gray-900 transition-colors duration-200"
      >
        <span className="text-lg font-semibold text-white tracking-wide">{title}</span>
        <svg
          className={`w-4 h-4 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''} text-gray-400`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        ref={contentRef}
        style={{ maxHeight: height }}
        className="overflow-hidden transition-all duration-300 ease-in-out bg-black rounded-b-lg"
      >
        <div className="p-3 text-gray-300 text-sm">{children}</div>
      </div>
    </div>
  );
};

export default Collapse;