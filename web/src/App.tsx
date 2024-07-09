import React from 'react';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl text-center my-4 mx-2">cttps's personal website aaaaaaaaaaaaaaaaaaa a a a a  aaa aa a aefffffffff</h1>
      <div className='grid grid-cols-12 divide-x-2'>
        < Sidebar />
        <div className='w-full col-span-10 text-center'>
          <p className='m-96'>hi</p>
        </div>
      </div>
    </div>
  );
}

export default App;
