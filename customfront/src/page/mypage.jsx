import React from "react";
import { useNavigate } from "react-router-dom";
import * as m from "../style/styledmypage";

const Mypage = () => {
  const navigate = useNavigate();

  const goPwchange = () => {
    navigate(`/pwchange`);
  };

  const goInfo1 = () => {
    navigate(`/Info1`);
  };


  return (
    <m.Container>
      <m.Header>
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
        <m.Border>
          <div></div>
        </m.Border>
      </m.Header>

      <img
          id="profile"
          src={`${process.env.PUBLIC_URL}/logo/profile.svg`}
          alt="profile"
          style={{
            position: "absolute",
            top: "97px",
            left: "48px",
            cursor: "pointer",
            zIndex: 10,
          }}
        />


      <m.Top>
      </m.Top>

      <m.Name>
        김세모 님
      </m.Name>
      
      <m.Keyword>
        <m.Wrap>
          <m.SmallOne>#20대</m.SmallOne>
          <m.SmallTwo>#여성</m.SmallTwo>
        </m.Wrap>
        <m.Wrap2>
          <m.SmallThree>#당뇨</m.SmallThree>
          <m.SmallFour>#160~165cm</m.SmallFour>
          <m.SmallFive>#60~65kg</m.SmallFive>
        </m.Wrap2>
      </m.Keyword>

      <img
          id="pwchange"
          src={`${process.env.PUBLIC_URL}/logo/pwchange.svg`}
          alt="alarm button"
          style={{
            position: "absolute",
            top: "276px",
            left: "24px",
            cursor: "pointer",
          }}
          onClick={goPwchange}
        />

      <img
          id="keychange"
          src={`${process.env.PUBLIC_URL}/logo/keychange.svg`}
          alt="alarm button"
          style={{
            position: "absolute",
            top: "276px",
            left: "204px",
            cursor: "pointer",
          }}
          onClick={goInfo1}
        />

      <m.Kit>
      🔥 후기를 작성하고, 키워드를 강화해요!
      </m.Kit>
cd
      <m.Check>나의 리뷰 확인하기</m.Check>
      <m.Write>리뷰 작성하기</m.Write>

      <m.Body>
        <m.Text>🔔 최근 알림을 확인해 주세요!</m.Text>
        <m.Box>공지 제목입니다.</m.Box>
        <m.Box>공지 제목입니다.</m.Box>

        <m.Button>
          <m.ButtonImage>
            <img src={`${process.env.PUBLIC_URL}/logo/plus.svg`} alt="icon" />
          </m.ButtonImage> 
          <m.ButtonText>더 많은 알림 확인하기</m.ButtonText>
        </m.Button>
      </m.Body>

    </m.Container>
  );
};

export default Mypage;