// App.js
import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import Signup from './Signup';
import HomePage from './HomePage';
// import BlogForm from './BlogForm';

function App() {
  return (
    <div>
    {/* <Signup/> */}
    <HomePage/>
    {/* <BlogForm /> */}
    </div>
    
      // <Routes>
      //   <Route exact path="/" element={<HomePage />} />
      //   <Route path="/signup" element={<Signup />} />
      //   <Route path="/blogform" element={<BlogForm />} />
      // </Routes>
  
  );
}

export default App;
