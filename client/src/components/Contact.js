import React from 'react';
import '../styles/Contacts.css';

function Developer({ name, image, description, contact }) {
  return (
    <div className="developer-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{contact}</p>
    </div>
  );
}

function Contact() {
  const teamMembers = [
    {
      name: 'Mercy Muriithi',
      image: 'https://images.pexels.com/photos/6120395/pexels-photo-6120395.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'I\'m inspired by the endless possibilities that coding offers. It\'s amazing to see how a few lines of code can bring ideas to life and make a positive impact.',
      contact: '0704294159'
    },
    {
      name: 'Benedict Langat',
      image: 'https://images.pexels.com/photos/3852577/pexels-photo-3852577.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Coding is like solving puzzles for me. It challenges my problem-solving skills and allows me to create solutions that can change the world.',
      contact: '0798556327'
    },
    {
      name: 'Sharon Asaja',
      image: 'https://media.istockphoto.com/id/1321462048/photo/digital-transformation-concept-system-engineering-binary-code-programming.jpg?b=1&s=612x612&w=0&k=20&c=5S5LGG4cZl8DE3T-kD5ZYQRZMntgYg4E2IQAB-VJjqg=',
      description: 'Coding and lifestyle are closely intertwined for me. I believe that technology can enhance our daily lives, making them more convenient and enjoyable.',
      contact: ' 0701616817'
    },
    {
      name: 'Obadia Maasai',
      image: 'https://images.pexels.com/photos/3246665/pexels-photo-3246665.png?auto=compress&cs=tinysrgb&w=600',
      description: 'Coding is my way of creating art. I love how it allows me to express my creativity, and I\'m inspired by the continuous learning and improvement it offers.',
      contact: '0702707326'
    },
    {
      name: 'Kevin Bett',
      image: 'https://media.istockphoto.com/id/1367967285/photo/automation-software-technology-process-system-business-concept.jpg?s=1024x1024&w=is&k=20&c=4FOdgCZQ3c_xwY3jkLn7RoAclq_NHxdtXJK9D2xDVas=',
      description: 'Coding and lifestyle go hand in hand. I\'m inspired by the power of coding to automate tasks and simplify life. It\'s a tool for making life more efficient.',
      contact:'0725847094'
    },
    {
      name: 'We appreciate your feedback',
      image:'https://media.istockphoto.com/id/1322205588/photo/cropped-shot-of-three-young-businessmpeople-working-together-on-a-laptop-in-their-office-late.jpg?s=612x612&w=0&k=20&c=G5dWfl2JH9Lqp0Yjgo4qYLjg88v5QGoIU-Bqw2qTXrA=',
      description: 'Signup to access Other Blogs!',
      contact:'contact us at:  group5@gmail.com'
    }
  ];

  return (
    <div className='heading-about'>
      <p>
        Welcome to Techie Trails Blogs, where we explore the exciting world of coding and how it intertwines with our daily lives.
      </p>
      <p>
        Our team of five passionate individuals is dedicated to sharing their stories, experiences, and insights in the realms of coding and lifestyle. Let us introduce ourselves:
      </p>
      <div className="developer-list">
        {teamMembers.map((member, index) => (
          <Developer key={index} name={member.name} image={member.image} description={member.description} contact={member.contact}/>
        ))}
      </div>
      <p>
        Techie Trails Blogs is a place for us to connect with you, our readers, and offer a glimpse into the world of coding and how it shapes our lives. We hope our experiences and knowledge inspire and help you on your own techie journey.
      </p>
    </div>
  );
}

export default Contact;