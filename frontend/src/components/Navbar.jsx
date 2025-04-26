import React, { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full h-16 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-2 text-2xl font-bold">
        <img src="/logo.png" className="size-8" alt="logo" />
        <span>BlogApp</span>
      </div>
      {/* mobile menu */}
      <div className="md:hidden">
        <div
          className="cursor-pointer text-2xl "
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "✖" : "☰"}
        </div>
        {/* Mobile Link List */}
        <div
          className={`w-full h-screen flex flex-col items-center justify-center absolute transition-all ease-in-out top-16 bg-red-500 gap-8  text-xl font-medium ${
            open ? "-right-0" : "-right-[100%]"
          }`}
        >
          <a href="/">Home</a>
          <a href="/">Tending</a>
          <a href="/">Most Popular</a>
          <a href="/">About</a>
          <button className="bg-blue-400 text-white px-4 py-2 rounded-xl">
            Login
          </button>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:flex gap-4 lg:gap-8 items-center text-xl font-medium">
        <a href="/">Home</a>
        <a href="/">Tending</a>
        <a href="/">Most Popular</a>
        <a href="/">About</a>
        <button className="bg-blue-400 text-white px-4 py-2 rounded-xl">
          Login
        </button>
      </div>
    </div>
  );
}

export default Navbar;
