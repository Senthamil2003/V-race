import React, { Component } from 'react'
import "./report.css"
import ProgressBar from 'react-bootstrap/ProgressBar';
import immerse from "../../image/immerse.png"
import  { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import ps1 from "../../image/publicspeakorg1.jpg"
import ps2 from "../../image/publicspeakorg2.jpg"
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useEffect } from 'react';

export default function Report() {
  const [show, setShow] = useState(false);
  const [val,setVal] = useState(1);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  useEffect(()=>{

    setVal(localStorage.getItem('Pavg'))
    console.log(val)
  })
 
  let col=''
  if(val>0){
    if(val<=50){
         col='danger'
    }
    else if(val<=70){
      col='warning'
    }
    else if(val<=100){
      col="success"
    }
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c1ks8z1', 'template_e0bjaxu', form.current, 'UGVN-a4q5q7ZLQRs7')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className='reportcont'>
    <p className='rp1'>Feedback</p>
   
    <div className='gph1'>
    <p className='rp1'>What is Public Speaking?</p>
    <div className='rpv1'>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/eIho2S0ZahI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    </div>
    <div className='gph3'>
      <h1 className='rp1'>Your Analysis</h1>
      <p className='rpp1'> The score you got is {val} and you have to improve your Public Speaking skills inorder to made you to shine in your speaking skills and the VR experience would help you to get more knowledge in your Public Speaking</p>
      <h3>Where You Stand?</h3>
      <div className='stnd'>
    <ProgressBar className='mpcont'>
      <ProgressBar variant={col} now={val} key={1} label={`${val}%`} className="pg"/>
      
    </ProgressBar>
    <p className='w'>Weak</p>
    
    <p className='g'>Strong</p>
    </div>
    </div>
    <div className='gph4'>
    <p className='rp1'>Immerse Yourself</p>
    <div className='rpc1'>
      <img src={immerse} className="rpimg1"/>

    </div>
    <div className='rpc2'>
      <p className='rpp2'>IMMERSE YOUR SELF <br/>IN THE <br/> NEW WORLD </p>
      <Button variant="primary" className='rpbtn1' onClick={handleShow}>
        Download
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter the mail Connect to Mobile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form ref={form} onSubmit={sendEmail}>
      
      <input type="email" name="to_email"  placeholder='Email' className='minp'/>
     <br/>
      <Button type="submit" value="Send" variant="primary" className='mail' onClick={handleClose}>Send</Button>
    </form>
        </Modal.Body>
   
      </Modal>
    </div>
   
    </div>
    <div className='jd'>
      <p className='rpmh1'>Materials For Reference</p>
      <div>
        <div className='rpmtcont1'>
          <div className='bkcont'>
          <Card style={{ width: '18rem' }} className="bkcomp1">
            <Card.Img variant="top" src={ps1} className="rpbkimg"/>
            <Card.Body>
            <Card.Title>Bulltet from the Mouth</Card.Title>
              <Card.Text>
              By Lisa Schreiber, Ph.D. and Morgan Hartranft
Millersville University, Millersville, PA
              </Card.Text>
              <Button className='bkbtn'  variant="primary" target='_blank' href="https://www.baycollege.edu/_resources/pdf/academics/academic-resources/open-education/principles-public-speaking.pdf">View PDF</Button>
            </Card.Body>
          </Card>

          </div>
          <div className='bkcont'>
          <Card style={{ width: '18rem' }} className="bkcomp2">
            <Card.Img variant="top" src={ps2} className="rpbkimg"/>
            <Card.Body>
            <Card.Title>Share your Mind</Card.Title>
              <Card.Text>
              UNIVERSITY OF TEXAS AT AUSTIN
INDUSTRIAL EDUCATION 'DEPARTMENT

Austin, Texas 78712 
              </Card.Text>
              <Button className='bkbtn' href='https://www.ojp.gov/pdffiles1/Digitization/55261NCJRS.pdf' target='_blank' variant="primary">View PDF</Button>
            </Card.Body>
          </Card>

          </div>

        </div>
        <div className='rpmtcont2'>
          <p className='rpmh2'>REFER THE PDF AND <br/>EXPLORE MORE <br/> TO IMPROVE YOUR KNOWLEDGE</p>
      
        </div>

      </div>
      <div className='rpvid'>
        <div className='rpvidc1'>
        <p className='rpmh2'>REFER THE VIDEO LINK AND <br/>EXPLORE MORE <br/> TO IMPROVE YOUR KNOWLEDGE</p>

        </div>
        <div className='rpvidc2'>
        <div className='bkcont'>
          <Card style={{ width: '18rem' }} className="bkcomp1">
            <Card.Img variant="top" src={ps1} className="rpbkimg"/>
            <Card.Body>
            <Card.Title>Way to success</Card.Title>
              <Card.Text>
              4 Tips To IMPROVE Your Public Speaking - How to CAPTIVATE an Audience
              </Card.Text>
              <Button className='bkbtn' href="https://youtu.be/962eYqe--Yc" variant="primary" target='_blank'>Watch Video</Button>
            </Card.Body>
          </Card>

          </div>
          <div className='bkcont'>
          <Card style={{ width: '18rem' }} className="bkcomp2">
            <Card.Img variant="top" src={ps2} className="rpbkimg"/>
            <Card.Body>
            <Card.Title>Overcome fear</Card.Title>
              <Card.Text>
              How I Overcame My Fear of Public Speaking | Danish Dhamani | TEDxKids@SMU
              </Card.Text>
              <Button className='bkbtn'  href="https://youtu.be/80UVjkcxGmA" variant="primary" target='_blank'>Watch Video</Button>
            </Card.Body>
          </Card>
       
          </div>


        </div>
        

      </div>
   
    </div>
    
    
  </div>
  )
}

