import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import OmTimer from "./pages/OminousTimer"
import Contact from './pages/Contact';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar'

function App() {
  return (
    <React.StrictMode>
      <Router >
        <div className="App">
          <Topbar />
          {/* <h1 className="text-3xl text-center my-4 mx-2">cttps's personal website</h1> */}
          <div className='grid grid-cols-9 md:divide-x-2 mt-4'>
            < Sidebar />
            <div className='w-full col-span-9 md:col-span-8 text-center'>
              <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/about" element={ <About/> } />
                <Route path="/projects" element={ <Projects/> } />
                <Route path="/contact" element={ <Contact/> } />
                <Route path="/omTimer" element={ <OmTimer/> } />

                {/* Add more routes as needed */}
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </React.StrictMode>
  );
}

export default App;
