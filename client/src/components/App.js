import React, {useState, useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';

import Signup from './Signup';
import HomePage from './HomePage';
import Navbar from './Navbar';
import About from './About';
import Blogs from './Blogs';
import BenBlogs from './BenBlogs';
import BlogDisplay from './BlogDisplay';



function App() {
  const [user, setUser]=useState({})
 
  useEffect(()=>{
    fetch("/session")
    .then(res=>res.json())
    .then(data=>{
      setUser(data)})
  },[])

  return (
    <div>
          
      <Routes>
          <Route element={<Navbar/>}>
              <Route path="/" element={<HomePage />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/blog/:id" element={<BlogDisplay user={user} />}/>
              <Route path='/about'element={<About/>}/>
              <Route path='/blogs' element={<Blogs  />} />
              <Route path='b.blogs' element={<BenBlogs/>} />        
          </Route> 
      </Routes>
    
     </div>
  );
}

export default App;
