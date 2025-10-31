import React from 'react';
import logo from '../assets/HDlogo 1.svg';

const Dummynavbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between px-17 py-4 bg-white shadow-md">
      {/* Logo */}
      <img
        className="h-13 w-25"
        src={logo}
        alt="Highway Delite Logo"
      />

      {/* Search bar + button Dummy */}
      <div className="hidden md:flex items-center gap-2 overflow-hidden">
        <input
          type="text"
          className="flex-col px-4 py-2 outline-none bg-[#EDEDED] rounded-lg w-80"
        />
        <button
         
          className="bg-[#FFD643] text-black px-4 py-2 rounded-lg transition-colors"
        >
          Search
        </button>
      </div>
    </nav>
  );
};

export default Dummynavbar;
