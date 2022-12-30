import React from 'react'
import limg from "../../image/register.jpeg"
import { getDatabase, ref, set } from "firebase/database";
import "../../firebase.js"
import { useState } from 'react';
import {useNavigate} from "react-router-dom"
export default function Register() {
    const navigate = useNavigate();
    const [name,setname]=useState("")
    const [mail,setmail]=useState("")
    const [no,setno]=useState("")
    const [pass,setpass]=useState("")
    function write() {
        console.log(name,no,mail)
        const db = getDatabase();
        const uid=Date.now()
        set(ref(db, 'users/'+ uid), {
            Name:name,
            Mail:mail,
            Number:no,
            password:pass
         
        });
        setname("")
        setmail("")
        setno("")
        navigate("/signup")
      }
      function hi(e){
        e.preventDefault()
      }
      
  return (
    <div>
        <div className='rgf1'>
            <form className='rform' onSubmit={hi}>
                <h1 className='rgh1'>Register</h1>
              <input type="text" className='rf1' value={name} onChange={(e)=>{setname(e.target.value)}} placeholder='User Name'/>
              <br></br>
              <input type="text" className='rf1' value={no} placeholder='Mobile' onChange={(e)=>{setno(e.target.value)}}/>
              <br></br>
              <input type="text" className='rf1' value={mail} placeholder='Email' onChange={(e)=>{setmail(e.target.value)}}/>
              <br></br>
              <input type="text" className='rf1' value={pass} placeholder='Email' onChange={(e)=>{setpass(e.target.value)}}/>
              <br></br>
              <button className='rgb1' onClick={write}>Submit</button>
             
            </form>

        </div>
        <div className='rgf2'>
        <img src={limg} className="regimg1"/>

        </div>
    </div>
  )
}
