import React from "react";
import { useNavigate } from "react-router-dom";
import * as v from "../style/styledreviewcheck2";

const Reviewcheck2 = () => {
  const navigate = useNavigate();

  const goMain = () => {
    navigate(`/`);
  };

  const goReviewcheck3 = () => {
    navigate(`/Reviewcheck3`);
  };

  // Box2의 아이템 상태 관리
  const box2Items = [{ id: 1, text: "텍스트 리뷰입니다.텍스트 리뷰입니다. 이렇고 이런 점이 좋았습니다! 그렇지만 이렇고 이런 특성의 이용자에게는 비추합니다!" }];

  return (
    <v.Container>
      <v.Header>
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
        <v.Border>
          <div></div>
        </v.Border>
      </v.Header>

      <v.Ybox>
        <v.Top>[제품명]</v.Top>
        <v.Click>
          <img
            id="good"
            src={`${process.env.PUBLIC_URL}/logo/good2.png`}
            alt="good"
            width="95px"
          />
        </v.Click>
      </v.Ybox>

      <v.Body>
        <v.Box>
          <v.Box2>
            {box2Items.map((item) => (
              <v.Keywordd key={item.id}>
                <v.SmallBox5>
                  <span style={{ fontSize: "13px" }}>{item.text}</span>
                </v.SmallBox5>
              </v.Keywordd>
            ))}
          </v.Box2>
        </v.Box>

        <v.Button onClick={goReviewcheck3}>
          <v.ButtonText>리뷰 수정하기</v.ButtonText>
        </v.Button>
      </v.Body>
    </v.Container>
  );
};

export default Reviewcheck2;
