import React from "react";
import { useNavigate } from "react-router-dom";
import * as u from "../style/styledmain4";

const Main4 = () => {
  const navigate = useNavigate();

  const goMain = () => {
    navigate(`/`);
  };



  return (
    <u.Container>
      <u.Header>
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
        <u.Border>
          <div></div>
        </u.Border>
      </u.Header>

      <u.Top>
        000님에게 맞는 <br />
        식품을 찾아볼까요?
      </u.Top>

      <u.Keyword>
        <u.SmallBox>#당뇨</u.SmallBox>
        <u.SmallBox>#체중감소</u.SmallBox>
        <u.SmallBox>#단백질이 좋아</u.SmallBox>
      </u.Keyword>

      <u.InputBlank>
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
          onClick={goMain}
        />
      </u.InputBlank>

      <img
          id="apple"
          src={`${process.env.PUBLIC_URL}/logo/apple.svg`}
          alt="apple"
          style={{
            position: "absolute",
            top: "372px",
            left: "93px",
          }}
        />

      <u.Body>
        <u.Kit>맞춤 건강 키트</u.Kit>
        <u.Box>
          <u.Box2>
          </u.Box2>
        </u.Box>
        <u.Button onClick={goMain}>
          <u.ButtonText>비교하기</u.ButtonText>
        </u.Button>
      </u.Body>
    </u.Container>
  );
};

export default Main4;