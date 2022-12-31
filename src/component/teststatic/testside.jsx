import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from "../../image/logo.png"
import "./maintest.css"
import tstclr from "../../image/testcolor.png"

export default class Testside extends Component {
    render() {
        
        return (
            <div className='tottst'>
                <div className='nav1'>
                    <div className='nimg'>
                        <img src={logo} alt="hi" className='img1' />
                    </div>
                   
                </div>
            </div>
        )
    }
}
