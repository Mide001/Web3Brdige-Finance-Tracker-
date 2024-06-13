import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-500 p-4 flex justify-between items-center">
      <div className="text-white text-xl font-bold">
        Finance Tracker
      </div>
      <a 
        href="https://github.com/Mide001/Web3Brdige-Finance-Tracker-" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-white text-blue-500 px-4 py-2 rounded"
      >
        Github
      </a>
    </nav>
  );
};

export default Navbar;
