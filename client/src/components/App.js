import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Signup from './Signup';
import HomePage from './HomePage';
import BlogForm from './BlogForm';
import Navbar from './Navbar';
import About from './About';
import Blogs from './Blogs';
import BenBlogs from './BenBlogs';
import Comments from './Comments';
import BlogDisplay from './BlogDisplay';



function App() {
  return (
    <div>
          
      <Routes>
        <Route element={<Navbar/>}>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/blogform" element={<BlogForm />}/>
          <Route path="/blog/:id" element={<BlogDisplay/>}/>

          <Route path='/about'element={<About/>}/>
          <Route path='/blogs' element={<Blogs/>} />
         
          <Route path='b.blogs' element={<BenBlogs/>} />
          <Route path='blogform' element={<BlogForm/>} />
          <Route path='comments' element={<Comments/>} />
         
         
        </Route>
        
      </Routes>
    
     </div>

  
  );
}

export default App;
