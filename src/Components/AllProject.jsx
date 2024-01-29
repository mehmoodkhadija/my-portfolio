import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AllProject = () => {
  const cardData = [
    { image: 'https://pungent-react.envytheme.com/images/freelancer-portfolio/portfolio-img1.jpg', title: 'Designing a better cinema experience', content: 'Web Design' },
    { image: 'https://pungent-react.envytheme.com/images/freelancer-portfolio/portfolio-img2.jpg', title: 'Building design process within teams', content: 'Web Development' },
    { image: 'https://pungent-react.envytheme.com/images/freelancer-portfolio/portfolio-img3.jpg', title: 'How intercom brings play eCommerce', content: 'eCommerce Development' },
    { image: 'https://pungent-react.envytheme.com/images/freelancer-portfolio/portfolio-img4.jpg', title: 'UI/UX Design for ABC company', content: 'UI/UX Design' },
    { image: 'https://pungent-react.envytheme.com/images/freelancer-portfolio/portfolio-img5.jpg', title: 'Examples of different types of sprints', content: 'Digital Marketing' },
    { image: 'https://pungent-react.envytheme.com/images/freelancer-portfolio/portfolio-img6.jpg', title: 'Redesigning the New York times app', content: 'PSD to HTML' },
    { image: 'https://pungent-react.envytheme.com/images/freelancer-portfolio/portfolio-img7.jpg', title: 'We provide any type of JavaScript development', content: 'JavaScript Development' },
    { image: 'https://pungent-react.envytheme.com/images/freelancer-portfolio/portfolio-img8.jpg', title: 'We provide any type of Mobile App', content: 'Mobile App' },
    { image: 'https://pungent-react.envytheme.com/images/freelancer-portfolio/portfolio-img9.jpg', title: 'We provide any type of WordPress', content: 'WordPress Development' },
    { image: 'https://pungent-react.envytheme.com/images/freelancer-portfolio/portfolio-img10.jpg', title: 'Maintenance service provides for ABC Company', content: 'IT Maintenance' },
    { image: 'https://pungent-react.envytheme.com/images/freelancer-portfolio/portfolio-img11.jpg', title: 'We provide any type of Email Marketing', content: 'Marketing & Reporting' },
    { image: 'https://pungent-react.envytheme.com/images/freelancer-portfolio/portfolio-img12.jpg', title: 'We provide any type of Marketing & Reporting', content: 'Marketing & Reporting' },
   

  ];

  return (
    <div>
      <h1 className='center all-project'>My all Projects</h1>
      <Row>
        {cardData.map((cardData, index) => (
          <Col key={index} className='col-lg-4 col-md-6 col-sm-12'>
            <div style={{ width: '95%',marginBottom:'35px'}}>
              <img src={cardData.image} style={{ width: '100%', borderRadius:'20px'}}/>
              
                <h4 className='card-title'>{cardData.title}  <a href='#'><i class="fa-solid fa-arrow-right"></i></a></h4>
               
                <h5 className='card-content'>
                  {cardData.content}
                </h5>
           
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default AllProject;
