import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './page/home';

import Pwchange from './page/pwchange';
import Pwchange1 from './page/pwchange1';
import Info2 from './page/info2';
import Info3 from './page/info3';
import Changeinfo2 from './page/changeinfo2';
import Changeinfo3 from './page/changeinfo3';
import Main0 from './page/main0';
import Main4 from './page/main4';
import Login from './page/login';
import Mypage from './page/mypage';
import Membership from './page/membership';

import './App.css';
import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} /> {/* 기본 경로 처리 */}
          
          <Route path="/pwchange" element={<Pwchange />} />
          <Route path="/pwchange1" element={<Pwchange1 />} />
          <Route path="/info2" element={<Info2 />} />
          <Route path="/info3" element={<Info3 />} />
          <Route path="/changeinfo2" element={<Changeinfo2 />} />
          <Route path="/changeinfo3" element={<Changeinfo3 />} />
          <Route path="/main0" element={<Main0 />} />
          <Route path="/main4" element={<Main4 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/membership" element={<Membership />} />
          
         
        </Routes>
      </div>
    </Router>
  );
}  //1
//2

export default App; 