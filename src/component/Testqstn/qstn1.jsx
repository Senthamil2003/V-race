import React, { Component } from 'react'
import "./qstn.css"
import { Link } from 'react-router-dom'
export default class Qstn1 extends Component {
    render() {
        return (
            <div className='qs1'>
                <div className='qsdiv1'>
                    <p className='qsp1'>1.What is the basic unit of our neural system?</p>

                </div>
                <div className='option'>
                    <input type="radio" name="ans"/>
                    <label className='ans'>Neutron</label>
                    <br></br>
                    <br></br>
                    <input type="radio" name="ans"/>
                    <label className='ans'>Neuron</label>
                    <br></br>
                    <br></br>
                    <input type="radio" name="ans"/>
                    <label className='ans'>Nephron</label>
                    <br></br>
                    <br></br>
                    <input type="radio" name="ans"/>
                    <label className='ans'>Neuclotron</label>

                </div>

                <div className='footer'>
                <Link to="/test/main/qs1"> <button className='sbtn5'>Previous</button></Link>
                <Link to="/test/main/qs2">  <button className='sbtn7'>Next</button></Link>

                </div>



            </div>
        )
    }
}
