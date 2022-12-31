import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import trig from "../../image/trig.jpg"
import communication from "../../image/communication1.jpeg"
import phy from "../../image/phy.jpeg"
import gram from "../../image/gram.jpg"
import vr from "../../image/vr.jpeg"
import "../greet/greet.css"
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Carosel extends Component {
  render() {
    return (
      <div>
                   <Carousel className='totcar'>
                        <Carousel.Item >
                            <img
                                className="d-block w-90"
                                src={communication}
                                alt="First slide"
                            />
                            <Carousel.Caption className='cap'>
                                <h3 className='th2'>Improve Communication</h3>
                                <p className='tp2'>We are here to break your phobia on communication provide you suggestions and tips to improve your communication skill.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item >
                            <img
                                className="d-block w-90"
                                src={vr}
                                alt="Second slide"
                            />
                            <Carousel.Caption className='cap'>
                                <h3 className='th2'>VR platform</h3>
                                <p className='tp2'>A realistic VR environment to practice public speaking and presentations</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item >
                            <img
                                className="d-block w-90"
                                src={phy}
                                alt="Third slide"
                            />
                            <Carousel.Caption className='cap'>
                                <h3 className='th2'>Materials</h3>
                                <p className='tp2'>
                                Top class materils and media files provided by specialized organizations to improve communication skill 
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
      </div>
    )
  }
}
