import React from "react";
import { useNavigate } from "react-router-dom";
import * as a from "../style/styledmain";

const Main = () => {
  const navigate = useNavigate();

  const goMain = () => {
    navigate(`/main`);
  };

  const goHome = () => {
    navigate(`/home`);
  };

  return (
    <a.Container>
      <a.Header>
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
          onClick={goMain}
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
        <a.Border>
          <div></div>
        </a.Border>
      </a.Header>

      <a.Top>
        000님에게 맞는 <br />
        식품을 찾아볼까요?
      </a.Top>

      <a.Keyword>
        <a.SmallBox>#당뇨</a.SmallBox>
        <a.SmallBox>#체중감소</a.SmallBox>
        <a.SmallBox>#단백질이 좋아</a.SmallBox>
      </a.Keyword>

      <a.InputBlank>
        <img
          id="ylogo"
          src={`${process.env.PUBLIC_URL}/logo/ylogo.svg`}
          alt="logo"
          width="30px"
        />
        <input type="text" placeholder="검색어를 입력하세요." />
        <img
          id="search"
          src={`${process.env.PUBLIC_URL}/logo/search.svg`}
          alt="search button"
          onClick={goHome}
        />
      </a.InputBlank>
    </a.Container>
  );
};

export default Main;
