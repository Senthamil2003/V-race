import logo from "../../image/logo.png"

import Carosel from "../carosel/Carosel"
import time from "../../image/presentation.jpg"
import book from "../../image/publicspeak.jpg"
import calander from "../../image/listen.jpg"
import customer from "../../image/gd.jpg"
import one from "../../image/oneonone.jpeg"
import free from "../../image/free.jpg"
import premium from "../../image/premium.jpg"
import elite from "../../image/elite.jpg"

import { Link } from 'react-router-dom'
import "../../font/RockDeath.ttf"
import "./greet.css"


import React from 'react'
let ct1 = 0;
let ct2 = 0;
let ct3 = 0;
let ct4 = 0;
let ct5 = 0;



export default function Greet() {
  
    const para = {
        fontSize: '46px',
        fontWeight:"bold",
        textAlign: 'left',
        lineHeight: "56px",
        marginTop: "70px",
        marginLeft: "-775px",
        color:"white",
        fontFamily: "sanSerif",
    }
    const para1 = {
        fontSize: '46px',
        fontWeight:"bold",
        textAlign: 'center',
        lineHeight: "56px",
        marginTop: "15px",
        marginLeft: "75px",
        color:"white",
        fontFamily: "Poppins",
    }



    const bdiv = {
        marginLeft: "-125.5%",
        marginTop: "5%"
    }
    

    return (
        <div>
            <div className="gbody" >
                <div className='gn'>
                    <div>
                        <img src={logo} className="gimg1" alt="noimg" />
                    </div>

                </div>
                <div className="sample"></div>
                <div className='tot' id="div1">
                    <div className='div2'>

                        <p style={para} >" V Race Fear "</p>
                        <div style={bdiv}>

                            <Link to="/signup"> <button className='b2'>Login</button></Link>
                            <Link to="/signup"> <button className='b3'>Signup</button></Link>
                        </div>
                    </div>
                </div>

                <div className='div3' id="div2">

<div className="td1">
<h1 className="th1">What we do ?...</h1>
    <p className="tp1">We are here to provide support to individuals who are facing hardship in communicationg with others by providing VR practice sessions, study materials and media files.
    </p>
</div>
<div className="td2"><Carosel /></div>



</div>

                <div className='div4'>
                <h1 className="fh1">Ace Yourself</h1>
               
                    <div className="ftdiv">
                        <div className="fdiv">
                            <img src={book} className="fimg1" alt="noimg" />
                            <p className="fp1">Public Speaking</p>

                        </div>
                        <div className="fdiv">
                            <img src={time} className="fimg1" alt="noimg" />
                            <p className="fp2">Presentation</p>

                        </div>
                        <div className="fdiv">
                            <img src={calander} className="fimg1" alt="noimg" />
                            <p className="fp3">Listening</p>

                        </div>
                        <div className="fdiv">
                            <img src={customer} className="fimg1" alt="noimg" />
                            <p className="fp4">Group Discussion</p>

                        </div>
                        <div className="fdiv">
                            <img src={one} className="fimg1" alt="noimg" />
                            <p className="fp4">One-On-One Interraction </p>

                        </div>
                    </div>
                </div>
               


                <div className='div5' id="div3">
                    <h1 className="fh1">Pricings</h1>
                    <div className="ftdiv1">
                        <div className="fdiv">
                            <img src={free} className="fimg2" alt="noimg" />
                            <p className="fp1">Free</p>
                        
                        </div>
                        <div className="fdiv">
                            <img src={premium} className="fimg2" alt="noimg" />
                            <p className="fp2">Premium</p>

                        </div>
                        <div className="fdiv">
                            <img src={elite} className="fimg2" alt="noimg" />
                            <p className="fp3">Elite</p>

                        </div>
                        
                    </div>

                </div>
                
                <div className="div7">
                    <div className="foot">
                        <div className="sfoot">
                          <h3 className="fth1">Contact</h3>
                          <p className="ftp1">Phone:123-344-9891</p>
                          <p className="ftp1">Email:abc@gmail.com</p>
                          <p className="ftp1">Whatsapp:8000-112-112</p>
                        </div>
                        <div className="sfoot">
                        <h3 className="fth1">About</h3>
                          <p className="ftp1">The main goal is to help individuals break the fear of communication</p>
                          

                        </div>
                        <div className="sfoot">
                        <h3 className="fth1">Services</h3>
                          <p className="ftp1">24/7 customer service</p>
                          <p className="ftp1">VR sessions</p>
                          <p className="ftp1">Personalized study materials</p>

                        </div>
                        <div className="sfoot">
                        <h3 className="fth1">Address</h3>
                          <p className="ftp1">RSM Nagar, Gummidipoondi, Taluk, Kavaraipettai, Tamil Nadu 601206</p>
                          

                        </div>
                        

                    </div>

                </div>
               

            </div>
        

        </div>
    )
}