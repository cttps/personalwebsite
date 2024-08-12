import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
    return (
        <div className="col-span-9 md:col-span-1 md:h-48 text-center grid grid-cols-5 md:grid-cols-1 place-items-center bg-white gap-0">
            <Link to="/">home</Link>
            <Link to="/about">about</Link>
            <Link to="/projects">projects</Link>
            <Link to="/omTimer">timer</Link>
            <Link to="/contact">contact</Link>
        </div>
    );
  }