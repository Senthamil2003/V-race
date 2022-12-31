import React, { Component } from 'react'
import "./test.css"
import test from "../../image/test.png"
import { Link } from 'react-router-dom'

export default class Testdash extends Component {
    render() {
        return (
            <div className='thome1'>
                <div className='tstcat'>
                   <button className='tdb1'>Previous Report</button>
                  
                </div>
                <div className='tdcont'>
                    <div className='tdtst'>
                        <img src={test} alt="hi" className='tdimg1'/>
                        <div className='tdtxt'>
                        <p className='tdtstp1'>Public Speaking Assestment</p>
                        <p className='tdtstp2'>31-Dec-2022</p>
                       <Link to="/student/academics/result"><button className='tdb3'>View Result</button></Link> 
                        </div>
                       
                    </div>

                    
                </div>
                

            </div>
        )
    }
}
