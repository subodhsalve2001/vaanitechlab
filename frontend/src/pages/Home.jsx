import React from 'react'
import { index } from '../index.css'
import ContactUs from './ContactUs'
import Portfolio from './Portfolio'
import Service from './Service'
export default function Home() {
  return (
    <>
      <section className='home-banner'>
        <div className="container">
          <div className="row">
            <div className="col-sm-3 offset-1 d-flex flex-wrap align-items-center">
              <div className="banner-content">

                <h1 className="banner-title">Creativity drives us <br /> towards Perfection</h1>
                <div className="banner-text">
                  <p>We craft astonishing websites,magnificent high geared Apps for IOS & others, innovation CRM that ensure overall growth of your business.</p>
                </div>
              </div>
              <div className="banner-button">
                <button to="/aboutus" className='button-round'>Learn More</button>
                <button to="contactus" className='outline-roundoutline-round-white'>Contact us</button>
              </div>
            </div>
            <div className="col-sm-6 d-flex flex-wrap align-items-center">
              <div className="banner-img">
                <img src="https://vaanitechlabs.com/public/frontend/assets/resize_image/resize1_home.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='home-about'>
        <div className="container ">
          <div className="col-sm-10  offset-1">
            <div className="row">
              <div className="about-head-wrap d-flex justicy-content-center">
                <div className="head-outer d-flex ">

                  <div className="title-divider">
                  </div>
                  <h2 className='col-sm-4 p-0'>Introduction About Corporate
                    <span className='business'>  Business</span>
                  </h2>

                  <div className="vr" ></div>
                  <div className="section-second col-sm-4 d-flex">
                    <h1 className='d'>D</h1><span className='pt-2'>o you want to step up your business digitally? We aid in providing website design, app development, and custom  CRM development services from the top experts for both startup companies as well as established companies doing business offline</span>
                  </div>
                  <div className="ex-box">
                    <h1 className='ex-title'>5</h1>
                    <h2 className='ex-body'>YEARS OF EXPERIENCE</h2>
                  </div>
                </div>
              </div>
              <div className="intro-img d-flex">
                <div className="img"><img className='img' src="https://vaanitechlabs.com/public/frontend/assets/webp_images/Resize_Image/home.webp" alt="" /></div>

                <div className="card">
                  <div className="card-body">
                    <p className='quote'>“Kickstart your Startup idea into innovation and reality with our assistance. Find the correct strategy to step your start-up business into the online world through customized website and mobile app solutions.”</p>
                    <div className="range">
                      <label htmlFor="">WEBSITE DESIGN</label><br />
                      <input type="range" class="w-50" id="customRange1" /><span>   95%</span><br />
                    <label htmlFor="">MOBILE APPS DEVELOPMENT</label><br />
                    <input type="range" class="w-50" id="customRange1" /><span>   90%</span>
                    <label htmlFor="">CUSTOM CRM DEVELOPMENT</label><br />
                    <input type="range" class="w-50" id="customRange1" /><span>   90%</span>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      </section >
      <Service/>
      <Portfolio/>
      <ContactUs/>

    </>
  )
}
