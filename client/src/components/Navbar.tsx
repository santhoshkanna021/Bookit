import React, { useState } from 'react';
import logo from '../assets/HDlogo 1.svg';

interface NavbarProps {
  onSearch: (searchTerm: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSearch }) => {
  const [search, setSearch] = useState('');

  const handleSearch = () => {
    onSearch(search);
  };

  return (
    <nav className="flex items-center justify-between px-17 py-4 bg-white shadow-md">
      {/* Logo */}
      <img className="h-12 w-28" src={logo} alt="Highway Delite Logo" />

      {/* Search bar + button */}
      <div className="hidden md:flex items-center gap-2 overflow-hidden">
        <input
          type="text"
          placeholder="Search experiences"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-col px-4 py-2 outline-none bg-[#EDEDED] rounded-lg w-80"
        />
        <button
          onClick={handleSearch}
          className="bg-[#FFD643] text-black px-4 py-2 rounded-lg transition-colors"
        >
          Search
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
