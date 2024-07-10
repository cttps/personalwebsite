import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
    return (
        <div className="col-span-1 text-center bg-white">
            <Link to="/">home</Link>
            <br />
            <Link to="/about">about</Link>
            <br />
            <Link to="/projects">projects</Link>
        </div>
    );
  }