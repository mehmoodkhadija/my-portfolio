import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import newsletter from '../images/newsletter.jpg'

const Email = () => {

  return (
    <div className='container containerStyle changecontainerStyle' style={{position:'relative',zIndex:'3'}}>
  <img src={newsletter} alt=""  style={{position:'absolute',top:'0px', left:'0px', width:'100%',}}/>
      <div className='textStyle'>
          <p className='bg-next change-started'>GET STARTED INSTANTLY!</p>
          <h2 className='ready-work change-work'>
            Get the only new update from this newsletter
          </h2>
          <InputGroup className="mb-3 email-main">
        <Form.Control className='form-control'
          placeholder="Enter your email"
          aria-label="enter your email"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Text id="basic-addon2" className = 'input-button'>Subscribe!</InputGroup.Text>
      </InputGroup>
        </div>
        </div>
  
  );
};

export default Email;
