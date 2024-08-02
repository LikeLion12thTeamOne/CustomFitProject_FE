import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './page/main';
import Main2 from './page/main2';
import Main3 from './page/main3';
import First from './page/first';
import Login from './page/login';
import Mypage from './page/mypage';
import Membership from './page/membership';
import Review from './page/review';
import Reviewcheck1 from './page/reviewcheck1';
import Reviewcheck2 from './page/reviewcheck2';
import Reviewcheck3 from './page/reviewcheck3';
import Info1 from './page/info1';
import Info3 from './page/info3';
import Info4 from './page/info4';
import Info5 from './page/info5';
import Changeinfo from './page/changeinfo';
import Changeinfo1 from './page/changeinfo1';
import Changeinfo4 from './page/changeinfo4';
import Changeinfo5 from './page/changeinfo5';
import Alarm1 from './page/alarm1';
import Alarm2 from './page/alarm2';
import './App.css';
import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} /> {/* 기본 경로 처리 */}
          <Route path="/Main2" element={<Main2 />} />
          <Route path="/Main3" element={<Main3 />} />
          <Route path="/First" element={<First />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Mypage" element={<Mypage />} />
          <Route path="/Membership" element={<Membership />} />
          <Route path="/Review" element={<Review />} />
          <Route path="/Reviewcheck1" element={<Reviewcheck1 />} />
          <Route path="/Reviewcheck2" element={<Reviewcheck2 />} />
          <Route path="/Reviewcheck3" element={<Reviewcheck3 />} />
          <Route path="/Info1" element={<Info1 />} />
          <Route path="/Info3" element={<Info3 />} />
          <Route path="/Info4" element={<Info4 />} />
          <Route path="/Info5" element={<Info5 />} />
          <Route path="/Changeinfo" element={<Changeinfo />} />
          <Route path="/Changeinfo1" element={<Changeinfo1 />} />
          <Route path="/Changeinfo4" element={<Changeinfo4 />} />
          <Route path="/Changeinfo5" element={<Changeinfo5 />} />
          <Route path="/Alarm1" element={<Alarm1 />} />
          <Route path="/Alarm2" element={<Alarm2 />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;