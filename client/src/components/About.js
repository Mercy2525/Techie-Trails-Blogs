import React from 'react'
import "../styles/About.css"
import { Heading } from '@chakra-ui/react';

function About() {
  return (
    <div>

      <Heading textTransform={'uppercase'} size={'lg'} textAlign={'center'}>About Us</Heading>
      <Heading p={2} size={'lg'}>Welcome All</Heading>
    


  <section class="about">
      

     <div class="row">
        <div class="about-off">
            <div class="layer">
              <h3>Coding experience...</h3>
              <p>Discover tips and tricks to level up your coding skills.<br></br> From mastering popular programming languages to learning efficient coding practices, Techie-Trails provides in-depth tutorials and guides to help you become a highly skilled developer.</p>
            </div>
        </div>
        <div class="about-off">
            <div class="layer">
              <h3>About Lifestyle...</h3>
              <p>Explore ways to balance your tech career with a healthy lifestyle. Techie-Trails shares insights on work-life balance,<br></br> mental health, and personal development to help you thrive both personally and professionally.</p>
            </div>
        </div>
        <div class="about-off">
            <div class="layer">
              <h3>Education at Moringa School  </h3>
              <p>Learn about the unique educational approach at Moringa School.<br></br> Discover how Moringa School provides hands-on coding education, industry-relevant curriculum, and career support to empower students to succeed in the tech industry.</p>
            </div>
        </div>
        <div class="about-off">
            <div class="layer">
              <h3> Get More about Techie Trail</h3>
              <p>Get a glimpse of some of our most popular blog posts, covering a wide range of topics such as advanced coding techniques, personal success stories, industry insights, and more.<br></br> Explore the Techie-Trails blog to stay up-to-date with the latest tech trends and valuable resources.</p>
            </div>
        </div>
      </div>
     </section>
  <section class="contact">
   
    <a href="/contacts" class="hero-btn">CONTACT US</a>
  </section>
  <footer>
    <div class="footer-content">
      <p>&copy;Techie Trail Blogs</p>
    </div>
  </footer>


    </div>
  );
}

export default About