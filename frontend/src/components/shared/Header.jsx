import React from "react";
import { Link } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import { Button } from "../ui/button";
import { useSelector } from "react-redux";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);

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
          <input type="text" placeholder="Search..." className="focus:outline-none bg-transparent w-24 sm:w-64" />

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

        {currentUser ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div>
                <img src={currentUser.profilePicture} alt="user photo" className="w-10 h-10 rounded-full" />
              </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-60">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>

              <DropdownMenuSeparator className="bg-gray-400" />

              <DropdownMenuItem className="block font-semibold text-sm">
                <div className="flex flex-col gap-1">
                  <span>@{currentUser.username}</span>
                  <span>@{currentUser.email}</span>
                </div>
              </DropdownMenuItem>

              <DropdownMenuItem className="font-semibold mt-2">
                <Link to="/dashboard?tab=profile">Profile</Link>
              </DropdownMenuItem>

              <DropdownMenuItem className="font-semibold mt-2">
                Sign Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Link to={"/sign-in"}>
            <Button>Sign In</Button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
