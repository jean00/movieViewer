import React from 'react';

const Nav = (): React.JSX.Element => {
  return (
    <nav className="bg-slate-700 w-full flex mb-10 justify-between items-center lg:px-20 p-6">
      <div className="flex text-white">
        <h1 className="text-3xl mr-1 cursor-pointer">Movies</h1>
        <h1 className="text-lg cursor-pointer">Viewer</h1>
        <input
          className="hidden md:block bg-gray-700 border border-slate-300 focus:border-blue-500 focus:outline-none rounded-lg lg:ml-10 p-2"
          placeholder="search a film"
        />
      </div>
      <div className="hidden md:flex gap-10">
        <button className="bg-white hover:bg-slate-100 w-40 rounded-xl">Sign Up</button>
        <button className="text-white hover:bg-slate-800 border border-white w-40 rounded-xl">Login</button>
      </div>
    </nav>
  );
};

export default Nav;
