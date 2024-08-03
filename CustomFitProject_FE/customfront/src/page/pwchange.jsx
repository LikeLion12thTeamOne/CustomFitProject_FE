import React from "react";
import { useNavigate } from "react-router-dom";
import * as p from "../style/styledpwchange";

const Pwchange = () => {
  const navigate = useNavigate();



  return (
    <p.Container>
      <p.Header>
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
        <p.Border>
          <div></div>
        </p.Border>
      </p.Header>


      <p.Top>
      </p.Top>

      <p.Kit>
      비밀번호 변경하기
      </p.Kit>

      <p.Check>계정 생성시 사용한 E Mail을 입력해주세요.</p.Check>


      <p.Body>
        <p.Button>
          <p.ButtonImage>
            <img src={`${process.env.PUBLIC_URL}/logo/plus.svg`} alt="icon" />
          </p.ButtonImage> 
          <p.ButtonText>더 많은 알림 확인하기</p.ButtonText>
        </p.Button>
      </p.Body>

    </p.Container>
  );
};

export default Pwchange;