import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
    return (
        <div className="col-span-9 md:col-span-1 md:h-48 text-center grid grid-cols-3 md:grid-cols-1 place-items-center bg-white gap-0">
            <Link className="inline-block group text-zinc-500 transition-all duration-300 ease-in-out" to="/">
                <span className="bg-left-bottom bg-gradient-to-r from-zinc-500 to-zinc-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                home
                </span>
            </Link>
            <Link className="inline-block group text-zinc-500 transition-all duration-300 ease-in-out" to="/about">
                <span className="bg-left-bottom bg-gradient-to-r from-zinc-500 to-zinc-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                about
                </span>
            </Link>
            <Link className="inline-block group text-zinc-500 transition-all duration-300 ease-in-out" to="/projects">
                <span className="bg-left-bottom bg-gradient-to-r from-zinc-500 to-zinc-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                projects
                </span>
            </Link>
            <Link className="inline-block group text-zinc-500 transition-all duration-300 ease-in-out" to="/posts">
                <span className="bg-left-bottom bg-gradient-to-r from-zinc-500 to-zinc-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                posts
                </span>
            </Link>
            <Link className="inline-block group text-zinc-500 transition-all duration-300 ease-in-out" to="/omTimer">
                <span className="bg-left-bottom bg-gradient-to-r from-zinc-500 to-zinc-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                timer
                </span>
            </Link>
            <Link className="inline-block group text-zinc-500 transition-all duration-300 ease-in-out" to="/contact">
                <span className="bg-left-bottom bg-gradient-to-r from-zinc-500 to-zinc-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                contact
                </span>
            </Link>
        </div>
    );
  }
