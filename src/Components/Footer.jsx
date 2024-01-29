import React from 'react'
export const Footer = () => {
  return (
    <div>
      <footer className="footer-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6">
              <div className="single-footer-widget" data-aos="fade-in" data-aos-duration={1200} data-aos-delay={100}>
                <div className="logo">
                <a href="/">
                <img src="/images/logo.png" alt="Logo" />
                </a>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                <ul className="social-links">
                  <li>
                  <a href="https://www.facebook.com/" target="_blank">
                    <FaFacebookF className='social-icons-footer'/>
                  </a>
                  </li>
                  <li>
                  <a href="https://twitter.com/" target="_blank">
                      <FaTwitter className='social-icons-footer' />
                  </a>
                  </li>
                  <li>
                  <a href="https://linkedin.com/" target="_blank">
                      <FaLinkedinIn className='social-icons-footer' />
                  </a>
                  </li>
                  <li>
                  <a href="https://www.instagram.com/" target="_blank">
                      <GrInstagram className='social-icons-footer' />
                  </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget ml-4 pl-5" data-aos="fade-in" data-aos-duration={1200} data-aos-delay={200}>
                <h3>Explore</h3>
                <ul className="list">
                  <li><a href="/">Home</a></li>
                  <li><a href="/about/">About</a></li>
                  <li><a href="/services/">Services</a></li>
                  <li><a href="/portfolio/">Portfolio</a></li>
                  <li><a href="/team/">Team</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-footer-widget ml-4" data-aos="fade-in" data-aos-duration={1200} data-aos-delay={300}>
                <h3>Quick Links</h3>
                <ul className="list">
                  <li><a href="/contact/">Contact Us</a></li>
                  <li><a href="/pricing/">Pricing</a></li>
                  <li><a href="/faq/">Faq</a></li>
                  <li><a href="/privacy-policy/">Privacy Policy</a></li>
                  <li><a href="/terms-conditions/">Terms &amp; Conditions</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-footer-widget" data-aos="fade-in" data-aos-duration={1200} data-aos-delay={400}>
                <h3>Get in Touch</h3>
                <ul className="get-in-touch">
                  <li><i className="fa-solid fa-location-dot" /> 2750 Quadra Street Punjab, Pakistan.</li>
                  <li><i className="fa-solid fa-headset" /><a href="tel:#">+098-7654-321</a><br /><a href="tel:#">+123-4567-890</a></li>
                  <li><i className="fa-solid fa-envelope" /><a href="#"><span className="__cf_email__" >bilal@pungent.com</span></a>
                    <a href="#"><span className="__cf_email__" >support@pungent.com</span></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <p>Copyright © 2023 Pungent. All Rights Reserved By 
              <a href="#" target="_blank" style={{marginLeft:"4px"}}>Bilal</a></p>
          </div>
        </div>
      </footer>
    </div>
  )
}