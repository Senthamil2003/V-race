
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Loginfun from './component/signin/Login';
import Nav from "./component/nav/Nav"
import MainTest from './component/teststatic/MainTest';

import BeforeTest from './component/teststatic/BeforeTest';
import Greet from "./component/greet/greet"
import Pqstn1 from './component/Testqstn/pubqstn1';
import Dashboard from './component/Main/Dashoard';
import Testdash from './component/teststatic/testdashacadamics';
import Feedback from './component/teststatic/testdashfeedback';
import Tdash from './componentteachers/teachersdash/tdash';
import Report from './component/report/Report';
import Roadmap from './component/Roadmap/Roadmap';
import Pqstn2 from './component/Testqstn/pubqstn2';
import Pqstn3 from './component/Testqstn/pubqstn3';
import Pqstn4 from './component/Testqstn/pubqstn4';
import Pqstn5 from './component/Testqstn/pubqstn5';
import Pqstn6 from './component/Testqstn/pubqstn6';
import Register from './component/signin/Register';
import Signup from './component/signin/Login';
import UnderConstruction from './component/Main/underConstruction';



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
            <Route path="/student/underconstruction" element={<UnderConstruction />} />
            <Route path="/student/academics" element={<Testdash />} />
            <Route path="/student/acadamics/feedback" element={<Feedback />} />
            <Route path="/student/academics/result" element={<Report />} />
            <Route path="/student/roadmap" element={<Roadmap />} />
            


          </Route>
          <Route path="/test/beforetst" element={<BeforeTest />} />

          <Route path="/test/main" element={<MainTest />} >

                           
            <Route path="/test/main/pqs1" element={<Pqstn1 />} />
            <Route path="/test/main/pqs2" element={<Pqstn2 />} />
            <Route path="/test/main/pqs3" element={<Pqstn3 />} />
            <Route path="/test/main/pqs4" element={<Pqstn4 />} />
            <Route path="/test/main/pqs5" element={<Pqstn5 />} />
            <Route path="/test/main/pqs6" element={<Pqstn6 />} />

          </Route>
          <Route path="/teachers" element={<Tdash />} />












        </Routes>

      </Router>

    </div>
  );
}

export default App;
