import React from "react";
import { useNavigate } from "react-router-dom";
import * as k from "../style/styledmain0";

const Main0 = () => {
  const navigate = useNavigate();

  const goMain = () => {
    navigate(`/`);
  };

  return (
    <k.Container>
      <k.Header>
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
        <k.Border>
          <div></div>
        </k.Border>
      </k.Header>

      <k.Top>
        000님에게 맞는 <br />
        식품을 찾아볼까요?
      </k.Top>

      <k.Keyword>
        <k.SmallBox>#당뇨</k.SmallBox>
        <k.SmallBox>#체중감소</k.SmallBox>
        <k.SmallBox>#단백질이 좋아</k.SmallBox>
      </k.Keyword>

      <k.InputBlank>
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
      </k.InputBlank>

      <k.Body>
        <k.Box2>
          <k.SmallBox5> </k.SmallBox5>
          <k.SmallBox5> </k.SmallBox5>
          <k.SmallBox5> </k.SmallBox5>
          <k.SmallBox5> </k.SmallBox5>
        </k.Box2>
    </k.Body>

        <k.Button>
           <img
            id="myreview"
            src={`${process.env.PUBLIC_URL}/logo/myreview.svg`}
            alt="myreview"
            onClick={goMain}
          />
        </k.Button>

        <k.Buttontwo>
           <img
            id="mypage"
            src={`${process.env.PUBLIC_URL}/logo/mypage.svg`}
            alt="mypage"
            onClick={goMain}
          />
        </k.Buttontwo>

    </k.Container>
  );
};

export default Main0;