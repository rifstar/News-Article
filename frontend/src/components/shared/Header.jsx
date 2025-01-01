import React from "react";
import { Link } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="shadow-lg sticky ">
      <div className="flex justify-between items-center max-w-6xl lg:max-w-7xl mx-auto p-4">
        <Link to={"/"}>
          <h1 className="font-bold text-xl sm:text-2xl flex flex-wrap">
            <span className="text-red-500">Lensa</span>
            <span className="text-slate-900">News</span>
          </h1>
        </Link>

        <form className="p-3 bg-slate-100 rounded-lg flex items-center">
          <input 
            type="text" 
            placeholder="Search..." 
            className="focus:outline-none bg-transparent w-24 sm:w-64" />

          <button>
            <GoSearch className="cursor-pointer" />
          </button>
        </form>

        <ul className="flex gap-4">
          <Link to={"/"}>
            <li className="hidden lg:inline hover:underline">Home</li>
          </Link>

          <Link to={"/about"}>
            <li className="hidden lg:inline hover:underline">About</li>
          </Link>

          <Link to={"/news"}>
            <li className="hidden lg:inline hover:underline">News Articles</li>
          </Link>
        </ul>

        <Link to={"/sign-in"}>
          <Button>Sign In</Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
