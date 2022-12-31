import React, { Component } from 'react'
import "./qstn.css"
import { Link } from 'react-router-dom'



export default function Pubqstn6() {

    const click = ()=>{
        let str = localStorage.getItem('Parr')
        let arr = str.split(',')
       

        let range =document.getElementById('range').value;

        arr.push(range)
        localStorage.setItem('Parr',arr);
        console.log((arr))
        var sum = 0;
     
    // Running the for loop
    for (let i = 0; i < arr.length; i++) {
        sum += parseInt(arr[i]);
    }
    let avg = (sum/5)
    console.log(avg)
        localStorage.setItem('Pavg',avg)
       
    }

  return (
    <div className='qs1'>
    <div className='qsdiv1'>
        <p className='qsp1'>6. you prefer giving a presentation during projects ?</p>

    </div>
    <br /> <div className='option'>
    
    <label for="customRange1" class="form-label">Example range</label>
<input type="range" min="0" max="5" class="form-range" id="range"/>

    </div>
    <div className='footer'>
        <Link to="/test/main/pqs3"> <button className='sbtn5' >Previous</button></Link>
        <Link to="/test/main/pqs4">  <button className='sbtn7' onClick={click}>Submit</button></Link>

    </div>



</div>
  )
}
