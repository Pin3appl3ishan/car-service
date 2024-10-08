import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import { FaRegClock } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import React, { useState } from 'react';
import "./Contact.css"

const Contact = () => {
    return (
    <> 
        <Navbar/>
           <div className="contact-container">
                <div className="contact-banner">
                    <div className="banner-wrapper">
                        <div className="banner-info-container">
                            <h1>Contact us</h1>
                            <div>Get in touch with us</div>
                        </div>
                    </div>
                </div>

                <div className="content-wrap">
                    <div className="contact-info">
                        <div className="contact-info-wrap">
                          <div className="info" > 
                            <div className="info-col">
                                <div className="info-box-col"> 
                                  <div className="info-box-col-content">
                                    <div className="info-box">
                                      <div className="info-box-left-right-wrap">
                                        <div className="info-box-content">
                                            <div className="info-box-content-icon">
                                              
                                              <span className="icon-wrap">
                                                <span className="icon">
                                                  
                                                  <div className="icon-circle"><FaRegClock className="icon-size-up"/> </div>
                                                  
                                                </span>           
                                              </span>
                                                   
                                            </div>
                                            <div className="info-box-content-title">
                                                <h3>Opening Times </h3>
                                            </div>

                                            <div className="info-box-separator">
                                                <div className="info-box-separator-line">
                                                </div>
                                            </div>
                                            
                                            <div className="info-box-content-text">
                                                <div className="info-box-text">
                                                    <p>Monday - Friday 24/7</p> 
                                                </div>
                                            </div>
                                          </div>
                                        </div>
                                    </div>
                                      
                                  </div> 
                                </div>
                            </div>
                          </div>

                          <div className="info"> 
                            <div className="info-col">
                                <div className="info-box-col"> 
                                  <div className="info-box-col-content">
                                    <div className="info-box">
                                      <div className="info-box-left-right-wrap">
                                        <div className="info-box-content">
                                            <div className="info-box-content-icon">
                                              <span className="icon-wrap">
                                                  <span className="icon">
                                                    
                                                    <div className="icon-circle"><FaPhoneVolume className="icon-size-up"/> </div>
                                                    
                                                  </span>           
                                              </span>
                                            </div>
                                            <div className="info-box-content-title">
                                                <h3>Contact Phone</h3>
                                            </div>

                                            <div className="info-box-separator">
                                                <div className="info-box-separator-line">
                                                </div>
                                            </div>
                                            
                                            <div className="info-box-content-text">
                                                <div className="info-box-text">
                                                    <p>0-16 22 5511</p> 
                                                </div>
                                            </div>
                                          </div>
                                        </div>
                                    </div>
                                      
                                  </div> 
                                </div>
                            </div>
                          </div>

                          <div className="info"> 
                            <div className="info-col">
                                <div className="info-box-col"> 
                                  <div className="info-box-col-content">
                                    <div className="info-box">
                                      <div className="info-box-left-right-wrap">
                                        <div className="info-box-content">
                                            <div className="info-box-content-icon">
                                                <span className="icon-wrap">
                                                  <span className="icon">
                                                    
                                                    <div className="icon-circle"><IoMail className="icon-size-up"/> </div>
                                                    
                                                  </span>           
                                                </span>
                                            </div>
                                            <div className="info-box-content-title">
                                                <h3>E-mail </h3>
                                            </div>

                                            <div className="info-box-separator">
                                                <div className="info-box-separator-line">
                                                </div>
                                            </div>
                                            
                                            <div className="info-box-content-text">
                                                <div className="info-box-text">
                                                    <p> asoservice69@gmail.com</p> 
                                                </div>
                                            </div>
                                          </div>
                                        </div>
                                    </div>
                                      
                                  </div> 
                                </div>
                            </div>
                          </div>
                          
                          <div className="info"> 
                            <div className="info-col">
                                <div className="info-box-col"> 
                                  <div className="info-box-col-content">
                                    <div className="info-box">
                                      <div className="info-box-left-right-wrap">
                                        <div className="info-box-content">
                                            <div className="info-box-content-icon">
                                                <span className="icon-wrap">
                                                  <span className="icon">
                                                    
                                                    <div className="icon-circle"><FaLocationDot className="icon-size-up"/> </div>
                                                    
                                                  </span>           
                                                </span>
                                            </div>
                                            <div className="info-box-content-title">
                                                <h3>Address </h3>
                                            </div>

                                            <div className="info-box-separator">
                                                <div className="info-box-separator-line">
                                                </div>
                                            </div>
                                            
                                            <div className="info-box-content-text">
                                                <div className="info-box-text">
                                                    <p>P84J+876, Kathmandu 44600</p> 
                                                </div>
                                            </div>
                                          </div>
                                        </div>
                                    </div>
                                      
                                  </div> 
                                </div>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>

                <div className="form-row-content-wrap">
                  <div className="form-row-content">
                    <div className="form-col-group">
                      <div className="form-col">
                        <div className="form-col-map">
                          <div className="form-map-col-module">
                            <div className="form-map-col-content">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.3609923548993!2d85.32740427535776!3d27.706138376183148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190a74aa1f23%3A0x74ebef82ad0e5c15!2sSoftwarica%20College%20of%20IT%20and%20E-Commerce!5e0!3m2!1sen!2snp!4v1724148315174!5m2!1sen!2snp" className="map"></iframe>
                            </div>
                          </div>
                        </div>
                        
                      </div>

                      <div className="form-col">
                        <div className="form-col-content">
                          <div className="form-col-header">
                            
                            <h2>
                              <span> Message us</span>
                            </h2>
                          </div>

                          <div className="form-col-module">
                            <div className="form-col-module-content">
                              <div className="form-col-module-content-inner">
                                <div className="form-col-module-wrapper">
                                  <form>
                                    <div className="form-body">
                                      <ul className="form-list-fields">
                                        <li className="list-field">
                                          <label className="list-label"> Your Name</label>
                                          <div className="inpout-container">
                                            <input type="text" className="input-field" placeholder="Enter your name"/>  
                                          </div>
                                        </li>
                                        <li className="list-field">
                                          <label className="list-label"> Your email</label>
                                          <div className="inpout-container">
                                            <input type="text" className="input-field" placeholder="Enter your e-mail"/>  
                                          </div>
                                        </li>
                                        <li className="list-field">
                                          <label className="list-label"> Your phone number</label>
                                          <div className="inpout-container">
                                            <input type="text" className="input-field" placeholder="Enter your phone number"/>  
                                          </div>
                                        </li>
                                        <li className="list-field">
                                          <label className="list-label"> Your phone number</label>
                                          <div className="inpout-container">
                                            <textarea className="input-field input-area" placeholder="Enter your message"></textarea>  
                                          </div>
                                        </li>
                                      </ul>
                                      <div className="form-submit">
                                        <button type="submit" className="no-underline text-white rounded-xl transition-all 
                                          py-3 px-6 bg-slate-500 text-lg hover:bg-slate-600 mb-10">
                                            Send
                                        </button>
                                      </div>
                                    </div>
                                    <div className="form-footer"></div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>            
                      </div>
                    </div>
                  </div>
                </div>
           </div>
        <Footer/>
    </>)
}
export default Contact