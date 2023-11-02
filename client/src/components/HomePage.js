// HomePage.js
import React from 'react';
import "../styles/HomePage.css"

const HomePage = () => {
  return (
    <div className='container-home' >    

     

        <div className='content'>  

        <div className='image-home'>
        
            <img
              src="https://images.pexels.com/photos/4315839/pexels-photo-4315839.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Sample"
            />
  
        </div>

        <div className='home-content'>

        <h2>In "Harmonizing Code: The Art of Coding While Listening to Music," we explore the fascinating synergy between two seemingly unrelated worlds: coding and music.
             <br/><br/>
            Discover how the rhythmic patterns of your favorite tunes can enhance your coding flow and creativity. Uncover the science behind this creative combination and learn practical tips to optimize your coding experience while enjoying the melodies that inspire you.
            <br/><br/>
            Join us in this unique exploration of the harmony between code and music and unlock the potential for a more immersive and productive coding journey.</h2>

        </div>

        </div> 

    </div>
  );
};

export default HomePage;
