import React, { Component } from 'react'
import "./Nav.css"
import menu from "../../image/menu.png"
import { NavLink} from "react-router-dom";

export default class Nav2 extends Component {
    render() {
        return (
            <div>

                <div className='side'>
                    <div className='menu'>
                        <img src={menu} alt="hi" className='img2' />

                    </div>
                    <hr className='line'></hr>
                    <NavLink
                        to="/student/dashboard"
                        style={({ isActive }) => ({
                            color: isActive ? 'white' : 'white',
                            backgroundImage: isActive ? 'linear-gradient(195deg, #49a3f1, #1A73E8)' : "",
                            boxShadow: isActive ? " rgba(60, 64, 67, 0.3) 3px 3px 3px 3px" : " rgba(60, 64, 67, 0.3) 0px 0px 0px 0px",
                        })}
                        className='home'
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-house-door" viewBox="0 0 16 16">
                            <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z" />
                        </svg>  <p className='sidep'>Test Yourself</p>
                    </NavLink>
                    <NavLink
                        to="/student/academics"
                        style={({ isActive }) => ({
                            color: isActive ? 'white' : 'white',
                            backgroundImage: isActive ? 'linear-gradient(195deg, #49a3f1, #1A73E8)' : '',
                            boxShadow: isActive ? " rgba(60, 64, 67, 0.3) 3px 3px 3px 3px" : " rgba(60, 64, 67, 0.3) 0px 0px 0px 0px",
                        })}
                        className='report'
                    ><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-card-list" viewBox="0 0 16 16">
                            <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                            <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                        </svg>

                        <p className='sidep'>Test Review</p>
                    </NavLink>
                    
                    
                </div >

            </div>
        )
    }
}
