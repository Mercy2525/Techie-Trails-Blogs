import React from 'react';
import "./Navbar.css"


function Navbar(){
    return (
    <nav>
      <ul id='navbar'>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/blog">Blog</a>
        </li>
        <li>
          <a href="/post">Post</a>
          <li>
          <a href="/about">About</a>
        </li>  
        </li>
        <li>
          <a href="/signup">Signup</a>
        </li>
      </ul>
    </nav>
  );

}
export default Navbar