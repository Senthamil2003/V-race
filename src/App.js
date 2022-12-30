
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Loginfun from './component/signin/Login';
import Nav from "./component/nav/Nav"
import MainTest from './component/teststatic/MainTest';

import BeforeTest from './component/teststatic/BeforeTest';
import Greet from "./component/greet/greet"
import Qstn1 from './component/Testqstn/qstn1';
import Dashboard from './component/Main/Dashoard';
import Testdash from './component/teststatic/testdashacadamics';
import Feedback from './component/teststatic/testdashfeedback';
import Tdash from './componentteachers/teachersdash/tdash';
import Report from './component/report/Report';
import Roadmap from './component/Roadmap/Roadmap';
import Qstn2 from './component/Testqstn/qstn2';
import Qstn3 from './component/Testqstn/qstn3';
import Qstn4 from './component/Testqstn/qstn4';
import Register from './component/signin/Register';
import Signup from './component/signin/Login';



function App() {

  return (
    <div className="App">
      <Router>

        <Routes>
          <Route path="/" element={<Greet />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/register" element={<Register />} />
          <Route path="/student" element={<Nav />} >
            <Route path="/student/dashboard" element={<Dashboard />} />
            <Route path="/student/acadamics" element={<Testdash />} />
            <Route path="/student/acadamics/feedback" element={<Feedback />} />
            <Route path="/student/material" element={<Report />} />
            <Route path="/student/roadmap" element={<Roadmap />} />
            


          </Route>
          <Route path="/test/beforetst" element={<BeforeTest />} />

          <Route path="/test/main" element={<MainTest />} >

                           
            <Route path="/test/main/qs1" element={<Qstn1 />} />
            <Route path="/test/main/qs2" element={<Qstn2 />} />
            <Route path="/test/main/qs3" element={<Qstn3 />} />
            <Route path="/test/main/qs4" element={<Qstn4 />} />
          

          </Route>
          <Route path="/teachers" element={<Tdash />} />












        </Routes>

      </Router>

    </div>
  );
}

export default App;