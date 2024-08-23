// src/components/Paginate.tsx
import React from 'react';
import { GrNext, GrPrevious } from 'react-icons/gr';

interface PaginateProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Paginate: React.FC<PaginateProps> = ({ currentPage, totalPages, onPageChange }) => {
  const handleClick = (page: number) => {
    onPageChange(page);
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex justify-center items-center space-x-2 mt-4">
      <button
        onClick={handlePrevClick}
        className="px-4 py-[12px] bg-gray-200 rounded hover:bg-gray-300 disabled:hover:bg-gray-200  disabled:opacity-50"
        disabled={currentPage === 1}
      >
        <GrPrevious size={16} />
      </button>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => handleClick(index + 1)}
          className={`px-4 py-2 rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
        >
          {index + 1}
        </button>
      ))}
      <button
        onClick={handleNextClick}
        className="px-4 py-[12px] bg-gray-200 rounded hover:bg-gray-300"
        disabled={currentPage === totalPages}
      >
        <GrNext size={16} />
      </button>
    </div>
  );
};

export default Paginate;
