// HomePage.js
import React from 'react';
import "../styles/HomePage.css"
import Blogs from './Blogs';
const HomePage = () => {
  return (
    <div>
      
      <div className='home'>
      
        <h1>Techie Trails Blog</h1>
        <div>
          <img
            src="https://media.istockphoto.com/id/1480602468/photo/happy-asian-woman-wearing-headphones-and-sitting-on-sofa-listening-to-music-in-living-room-at.webp?b=1&s=170667a&w=0&k=20&c=L9_j9Bxk3nSFmFGNoyBI8VbkysXr3vMBOZydFgtGt38="
            alt="Sample"
          />
        </div>
        <h2>In "Harmonizing Code: The Art of Coding While Listening to Music," we explore the fascinating synergy between two seemingly unrelated worlds: coding and music.
             <br/><br/>
            Discover how the rhythmic patterns of your favorite tunes can enhance your coding flow and creativity. Uncover the science behind this creative combination and learn practical tips to optimize your coding experience while enjoying the melodies that inspire you.
            <br/><br/>
            Join us in this unique exploration of the harmony between code and music and unlock the potential for a more immersive and productive coding journey.</h2>
            <h3>Author: Sharon Asaja</h3>
      </div>
      <Blogs/>
  
    </div>
  );
};

export default HomePage;
