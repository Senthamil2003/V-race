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
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
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
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
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
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
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
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
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
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially uncha
            </p>
          </div>
        </div>
      </div>
    )
  }
}
