import React, {useState, useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
import {Heading } from '@chakra-ui/react';
import Signup from './Signup';
import HomePage from './HomePage';
import Navbar from './Navbar';
import About from './About';
import Blogs from './Blogs';
import BlogDisplay from './BlogDisplay';
import Contact from './Contact';



function App() {
  const [user, setUser]=useState({})
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    fetch("/session")
      .then(res => res.json())
      .then(data => {
        setUser(data);
      })
      .catch(error => {
        console.error("Error fetching session:", error);
      });
  }, [isLoggedIn]);

  return (
    <div>

      <Heading color={'orange.600'} p={2} size={'lg'} textAlign={'center'} textTransform='uppercase' >Techie Trails Blogs</Heading>
          
      <Routes>
          <Route element={<Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} user={user} />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/signup" element={<Signup isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
              <Route path="/blog/:id" element={<BlogDisplay user={user} />}/>
              <Route path='/about'element={<About/>}/>
              <Route path='/blogs' element={<Blogs  />} />       
              <Route path='/contacts' element={<Contact/>} />  
          </Route> 
      </Routes>
    
     </div>
  );
}

export default App;
