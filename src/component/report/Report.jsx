import React, { Component } from 'react'
import Pie from './piegraph'
import Graph from './quadrantgraph'
import "./report.css"


export default class Report extends Component {
  render() {
    return (
      <div className='reportcont'>
        <p className='rp1'>Feedback</p>
        <div className='gph1'>
        <p className='rp1'>Video Wise Analysis</p>
        <div className='rpv1'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/eIho2S0ZahI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        </div>
        <div className='gph1'>
          <Graph />
        </div>
        <div className='gph2'>
        <p className='rp1'>Student Marks</p>
          <Pie />
        </div>

      </div>
    )
  }
}
