import React from "react";
import { useNavigate } from "react-router-dom";
import * as p1 from "../style/styledpwchange";

const Pwchange1 = () => {
  const navigate = useNavigate();

  return (
    <p1.Container>
      <p1.Header>
        <img
          id="back"
          src={`${process.env.PUBLIC_URL}/logo/backbtn.svg`}
          alt="back button"
          style={{
            position: "absolute",
            top: "8px",
            left: "8px",
            cursor: "pointer",
          }}
          onClick={() => navigate(-1)}
        />
        <img
          id="logo"
          src={`${process.env.PUBLIC_URL}/logo/ylogo.svg`}
          alt="logo"
          width="40px"
        />
        <img
          id="alarm"
          src={`${process.env.PUBLIC_URL}/logo/alarm.svg`}
          alt="alarm button"
          style={{
            position: "absolute",
            top: "8px",
            left: "8px",
            cursor: "pointer",
          }}
          onClick={() => navigate(-1)}
        />
        <img
          id="menu"
          src={`${process.env.PUBLIC_URL}/logo/menu.svg`}
          alt="menu button"
          style={{
            position: "absolute",
            top: "8px",
            left: "8px",
            cursor: "pointer",
          }}
          onClick={() => navigate(-1)}
        />
        <p1.Border>
          <div></div>
        </p1.Border>
      </p1.Header>



      <p1.Kit>
      링크가 전송되었습니다.
      </p1.Kit>

      <p1.Check>메일로 이동해 비밀번호 변경을 진행해 주세요!</p1.Check>

      <img
          id="success"
          src={`${process.env.PUBLIC_URL}/logo/success.svg`}
          alt="success"
          style={{
            position: "absolute",  // 또는 "relative", "fixed", "sticky" 등
            top: "333px",           // 원하는 위치로 조정
            left: "50px",          // 원하는 위치로 조정  
          }}
        /> 

    </p1.Container>
  );
};

export default Pwchange1;