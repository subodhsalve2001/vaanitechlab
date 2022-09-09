import React from 'react'

import { idex } from './../index.css'
export default function Footer() {
    return (
        <>
        <section className='footer'>
            <div className="footer-container col-sm-12  d-flex justify-content-around ">
                <div className="mx-2 d-inline-block">
                    <div className="box">
                        <img className='img-fluid' src="https://vaanitechlabs.com/public/frontend/assets/webp_images/Resize_Image/site-logo.webp" alt="" />
                        <p className="box-content">
                        Whatever field or industry you are in, with our qualified experts, you will find perfect web & mobile apps solutions that go beyond your expectations in terms of performance and usability
                        </p>
                    </div>
                </div>
                <div className="mx-2 d-inline-block">
                    <ul>Quick Links
                        <li >Web Desing</li>
                        <li>Android App Development</li>
                        <li>IOS App Development</li>
                        <li>Custom CRM Development</li>
                        <li>Flutter App Development</li>
                        <li>Graphic Design</li>
                    </ul>
                </div>
                <div className="mx-2 d-inline-block">
                    <ul>Other Pages
                        <li >Carrer With Us</li>
                        <li>Business With Us</li>
                        <li>Terms & Condition</li>
                        <li>Privacy Policy</li>
                        <li>Return Policy</li>
                        <li>Help Center</li>
                    </ul>
                </div>
                <div className="mx-2 d-inline-block">
                    <ul>Location Address
                        <li >Know where to find us? Let's take a look and get in touch !</li>
                        <br />
                        <li className='d-flex'><div className="location-img"><img src="https://vaanitechlabs.com/public/frontend/assets/webp_images/Resize_Image/map-widget.webp" alt="" /></div>
                            <div className="location-title"><span><i class="bi bi-geo-alt"></i>   181/47 Raja Rammohan Roy Road, Kolkata 700041</span>
                            <p><i class="bi bi-telephone"></i>   +91 8159842029</p>
                            <p><i class="bi bi-envelope"></i>   info@vaanitechlabs.com</p>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>
            </section>
        </>
    )
}
