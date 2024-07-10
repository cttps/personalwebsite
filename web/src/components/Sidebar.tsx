import React from 'react';
import { Link } from 'react-router-dom';

export default function App() {
    return (
        <div className="col-span-1 text-center">
            <Link to="/">home</Link>
            <br />
            <Link to="/about">about</Link>
        </div>
    );
  }