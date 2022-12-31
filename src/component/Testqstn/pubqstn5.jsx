import React, { Component } from 'react'
import "./qstn.css"
import { Link } from 'react-router-dom'
import { useEffect } from 'react'


export default function Pubqstn6() {

    
    const click = ()=>{
        let str = localStorage.getItem('Parr')
        let arr = str.split(',')
       

        let range =document.getElementById('range').value;

        arr.push(range)
        localStorage.setItem('Parr',arr);
        console.log((arr))
       
    }



  return (
    <div className='qs1'>
    <div className='qsdiv1'>
        <p className='qsp1'>5.How do you feel during presentations ?</p>

    </div>
    <br />
    <div className='option'>
    
    <label for="customRange1" class="form-label">Example range</label>
<input type="range" min="0" max="5" class="form-range" defaultValue={0} id="range"/>

    </div>
    <div className='footer'>
    <Link to="/test/main/pqs4"> <button className='sbtn5'>Previous</button></Link>
    <Link to="/test/main/pqs6">  <button onClick={click} className='sbtn7'>Next</button></Link>

    </div>



</div>
  )
}
