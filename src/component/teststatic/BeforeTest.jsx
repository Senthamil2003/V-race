import React, { Component } from 'react'
import logo from "../../image/logo.png"
import { Link} from 'react-router-dom'
import "./test.css"

export default class Test extends Component {
    render() {
        return (
            <div>
                <div className='nav1'>
                    <img src={logo} alt="hi" className='tstimg1' />

                </div>
                <div className='body'>
                    <div className='d1'>
                        <h1 className='th1'>Instruction!</h1>
                        <ul className='tsl'>
                           
                            <li className='tstli'>This is just a fun test to evaluate how well you currently communicate.

                            </li>
                            <li className='tstli'>Dont Stress yourself too much this test will not affect your further navigation throughour website

                            </li>
                            <li className='tstli'>Your identity and analysis results will not be shared with any external organizations. 

                            </li>
                            <li className='tstli'>This is an optional test, feel free to skip this test and explore our VR session.

                            </li>

                        </ul>
                        <div className="footer1">
                        <Link to="/test/main/pqs1"><button className='ibtn1'>VR session</button></Link>
                        <Link to="/test/main/pqs1"><button className='ibtn2'>Start Test</button></Link>
                        </div>
                    </div>
                  

                </div>
            </div>
        )
    }
}