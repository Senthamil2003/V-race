import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import time from "../../image/presentation.jpg"
import book from "../../image/publicspeak.jpg"
import calander from "../../image/listen.jpg"
import customer from "../../image/gd.jpg"
import one from "../../image/oneonone.jpeg"
import "./Main.css"
import { Link } from 'react-router-dom'
export default class Dashboard extends Component {
  render() {
    return (
      <div className='mhome'>
        <h2 className='dshh1'>What We Do?</h2>
        <div className='mhome1'>
          <div className='mdd1'>
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={time} className="dashimg1" />
      <Card.Body>
        <Card.Title>Presentation</Card.Title>
        <Card.Text>
        A presentation conveys information from a speaker to an audience. 
        </Card.Text>
        <Button variant="primary">Take Test</Button>
      </Card.Body>
    </Card>
          </div>
          <div className='mdd1'>
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={book} className="dashimg1" />
      <Card.Body>
        <Card.Title>Public Speaking</Card.Title>
        <Card.Text>
        Public speaking means that speak in front of a Group of people
        </Card.Text>
      <Link to="/test/beforetst" > <Button variant="primary">Take Test</Button> </Link>
      </Card.Body>
    </Card>
          </div>
          <div className='mdd1'>
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={one} className="dashimg1" />
      <Card.Body>
        <Card.Title>One-On-One Interraction </Card.Title>
        <Card.Text>
        One-to-one correspondence, also called a bijective function
        </Card.Text>
        <Button variant="primary">Take Test</Button>
        </Card.Body>
    </Card>
          </div>
          <div className='mdd1'>
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={customer} className="dashimg1" />
      <Card.Body>
        <Card.Title>Group Discussion</Card.Title>
        <Card.Text>
          Group discussion allow as to share thoughts in a particular group
        </Card.Text>
      <Button href='/test/main/qs1' variant="primary">Take Test</Button> 
        </Card.Body>
      </Card>
          </div>
        </div>
        <div className='mdsh2'>
          <h2 className='mdshh2'>Listen Open & <br></br>Active</h2>
          <div className='mdsd1'>
            <img src={calander} className="mdimg1"></img>
          </div>
          <div className='mdsd2'>
            <p className='mdp1'>
            Listening within the work context is the process by which you gain an understanding of the needs, demands, and preferences of your stakeholders through direct interaction. A stakeholder could be anyone from your boss, a client, customer, co-worker, subordinate, upper management, board member, interviewer, or job candidate.


            </p>
          </div>
        </div>
      </div>
    )
  }
}
