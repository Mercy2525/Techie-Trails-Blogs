import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Signup from './Signup';
import HomePage from './HomePage';
import BlogForm from './BlogForm';
import Navbar from './Navbar';
import About from './About';

function App() {
  return (
    <div>
          
      <Routes>
        <Route element={<Navbar/>}>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/blogform" element={<BlogForm />}/>
          <Route path='/about'element={<About/>}/>
        </Route>
        
      </Routes>
    
     </div>

  
  );
}

export default App;