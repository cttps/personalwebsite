import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Topbar() {
    return (
        <div className='grid grid-cols-7 fixed top-0 w-full left-0 py-1 px-2 shadow-md bg-white'> {/*max-w-[1300px] left-1/2 transform -translate-x-1/2*/}
            <h1 className='truncate text-2xl text-left w-full h-max-auto col-span-5'>cttps's awesome website 😄</h1>
            <div className='text-right h-full divide-x-4 divide-transparent col-span-2'>
                <a href="https://github.com/cttps"><FontAwesomeIcon className="h-6 mt-1 mx-2" icon={faGithub} /></a>
                <a href="https://github.com/cttps"><FontAwesomeIcon className="h-6 mt-1 mx-2" icon={faXTwitter} /></a>
            </div>
        </div>
    );
  }