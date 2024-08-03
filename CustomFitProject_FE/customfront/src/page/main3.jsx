import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as z from "../style/styledmain3";

const Main3 = () => {
  const navigate = useNavigate();

  const goMain = () => {
    navigate(`/`);
  };

  const goReviewcheck3 = () => {
    navigate(`/Reviewcheck3`);
  };

  const [rating, setRating] = useState(0);

  const handleStarClick = (value) => {
    setRating(value);
  };

  return (
    <z.Container>
      <z.Header>
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
        <z.Border>
          <div></div>
        </z.Border>
      </z.Header>

      <z.Ybox>
        <z.Top>
          000님의 건강 기준에
          <br /> 가장 적합한 제품이에요!
        </z.Top>
        <z.Keyword>
          <z.SmallBox>#당뇨</z.SmallBox>
          <z.SmallBox>#당류 싫어</z.SmallBox>
        </z.Keyword>

        <z.Wbox>
          <z.Text>제품명입니다</z.Text>
          <z.Stext>당류함량</z.Stext>
          <z.Ntext>Ng</z.Ntext>
          <z.Etext>선택하신 제품들 중 당류 함량이 가장 낮아요.</z.Etext>
        </z.Wbox>
        <z.Otext>[당뇨]를 선택한 다른 회원들의 의견이에요!</z.Otext>
      </z.Ybox>

      <z.Sbox>
        <z.Button2>
          <img
            id="ylogo"
            src={`${process.env.PUBLIC_URL}/logo/good2.png`}
            alt="logo"
            width="65px"
          />
          <img
            id="ylogo"
            src={`${process.env.PUBLIC_URL}/logo/bad2.png`}
            alt="logo"
            width="90px"
          />
        </z.Button2>
        <z.Otext>맞춤의 추천 서비스에 만족하시나요?</z.Otext>
        <z.Explain>
          만족도를 체크해 주시면, 추천 알고리즘을 정비하는 데 도움이 돼요!
          <br />
          ㅇㅇㅇ님의 만족도에 기반하여 더 좋은 서비스를 제공할게요!
        </z.Explain>
        <z.Star>
        {[1, 2, 3, 4, 5].map((value) => (
          <img
            key={value}
            className="star"
            src={
              rating >= value
                ? `${process.env.PUBLIC_URL}/logo/fullstar.svg`
                : `${process.env.PUBLIC_URL}/logo/star.svg`
            }
            onClick={() => handleStarClick(value)}
            alt={`별 ${value}개`}
            style={{ cursor: "pointer", width: "44px", height: "43px", margin: "2px" }}
          />
        ))}
        </z.Star>
        <z.Button onClick={goReviewcheck3}>
        <z.ButtonText>만족도 결과 보내기</z.ButtonText>
        </z.Button>
      </z.Sbox>
    </z.Container>
  );
};

export default Main3;
