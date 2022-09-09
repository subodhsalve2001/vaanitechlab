import React from 'react'
import Footer from '../components/Footer'

export default function ContactUs() {
  return (<>
   <h1 className='headings'>CONTACT US</h1>
    <div className="container">
      <div className="row">
        <div className="col-sm-8 d-flex">

        
      <div className="row">

        <div class="col-md-8">
          <h2>Contact Us & <span className='business'>Reach !!</span></h2>
          <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quaerat autem corrupti asperiores accusantium et fuga! Facere excepturi, quo eos, nobis doloremque dolor labore expedita illum iusto, aut repellat fuga!</p>
          <div className=" d-flex">
          <div className=' col-sm-6'>

            <ul class="list-unstyled pl-md-5 mb-5">
              <li class="d-flex text-black mb-2">
                <span class="mr-3"><span class="icon-map"></span></span> 34 Street Name, City Name Here,  United States
              </li>
              <li class="d-flex text-black mb-2"><span class="mr-3"><span class="icon-phone"></span></span> +1 (222) 345 6789</li>
              <li class="d-flex text-black"><span class="mr-3"><span class="icon-envelope-o"></span></span> info@mywebsite.com </li>
            </ul>
          </div>
          <div className="vr"></div>
          <div className='col-sm-3'>

            <ul class="list-unstyled pl-md-5 mb-5">
              <li class="d-flex text-black mb-2">
                <span class="mr-3"><span class="icon-map"></span></span> 34 Street Name, City Name Here,  United States
              </li>
              <li class="d-flex text-black mb-2"><span class="mr-3"><span class="icon-phone"></span></span> +1 (222) 345 6789</li>
              <li class="d-flex text-black"><span class="mr-3"><span class="icon-envelope-o"></span></span> info@mywebsite.com </li>
            </ul>
          </div>
          </div>
        </div>
          
              <div class="col-md-4 ">
                <div>
                  <label for="name" class="form-label">First Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    placeholder="Enter Your Name"
                  />
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Please choose a username.</div>
                </div>
                <div>
                  <label for="email" class="form-label">First Email</label>
                  <input
                    type="text"
                    class="form-control"
                    id="email"
                    placeholder="Enter Your Email"
                  />
                </div>
                <div class="mt-2">
                  <label for="password" class="form-label">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    placeholder="Enter Your Password"
                  />
                </div>
                <div class="mt-2">
                  <label for="number" class="form-label">Number</label>
                  <input
                    type="password"
                    class="form-control"
                    id="number"
                    placeholder="Enter Your Number"
                  />
                </div>

                <div class="mt-2">
                  <label for="id" class="form-label">Message</label>
                  <textarea class="form-control" id="id" rows={6}></textarea>
                </div>

                <button type="button" class="btn btn-primary w-100 mt-3">
                  Submit
                </button>
                <p class="text-center mt-3">
                </p>
              </div>
            </div>
          </div>
          </div>
      </div>
    <div className='mt-3'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14717.62951502395!2d75.8952977!3d22.7502582!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xffc162dcc09c70e1!2sSnayvik%20Tech%20Labs%20Private%20Limited!5e0!3m2!1sen!2sin!4v1662705232439!5m2!1sen!2sin" width="1600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <Footer/>
  </>
  )
}