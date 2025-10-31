import React from 'react';
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const ResultPage: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center gap-5 py-20">
      <FaCheckCircle className="text-green-500" size={60} />

      <h1 className="font-medium text-2xl">Booking Confirmed</h1>

      <button
        onClick={handleNavigate}
        className="text-[#656565] bg-[#E3E3E3] py-2 px-4 rounded-lg hover:bg-[#d3d3d3] transition"
      >
        Back to Home
      </button>
    </div>
  );
};

export default ResultPage;
