import Button from 'react-bootstrap/Button';
import React from 'react'

const HeroSection = () => {
    
  return (
    <div className='center'>
  
     <div className='container hero-main'>
     <img src='https://pungent-react.envytheme.com/images/freelancer-portfolio/freelancer-profile.jpg'  />
     <p>Welcome To My Portfolio!</p>
     <h1>Hi, I'm Khadija Mehmood</h1>
     <h1 className='web-hero'>Web Developer.</h1>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

</p>

    
    <div className='social-link'>
<a href='#'><i class="fa-brands fa-linkedin"></i></a>
<a href='#'><i class="fa-brands fa-skype"></i></a>
<a href='#'><i class="fa-brands fa-whatsapp"></i></a>
<a href='#'><i class="fa-brands fa-github-alt"></i></a>
<a href='#'><i class="fa-brands fa-dribbble"></i></a>
    </div>
    <Button className='contact-me'>Contact Me <i class="fas fa-chevron-right"></i></Button>{' '}
    </div>
    </div>
  )
}

export default HeroSection