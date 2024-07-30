import React from "react";
import { useNavigate } from "react-router-dom";
import * as e from "../style/styledreviewcheck1";

const Reviewcheck1 = () => {
  const navigate = useNavigate();

  const goMain = () => {
    navigate(`/`);
  };

  const goReviewcheck2 = () => {
    navigate(`/Reviewcheck2`);
  };

  // Box2의 아이템 상태 관리
  const box2Items = [
    { id: 1, name: "[과자 1]" , text: "텍스트 리뷰입니다."},
    { id: 2, name: "[과자 2]", text: "텍스트 리뷰입니다."},
    { id: 3, name: "[과자 3]", text: "텍스트 리뷰입니다." },
    { id: 4, name: "[과자 4]", text: "텍스트 리뷰입니다." },
    { id: 5, name: "[과자 5]", text: "텍스트 리뷰입니다." }
  ];

  return (
    <e.Container>
      <e.Header>
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
        <e.Border>
          <div></div>
        </e.Border>
      </e.Header>

      <e.Ybox>
        <e.Top>나의 리뷰 확인하기</e.Top>
      </e.Ybox>

      <e.Body>
        <e.Box>
          <e.Box2>
            {box2Items.map((item) => (
              <e.Keywordd key={item.id}>
                <e.SmallBox5>
                  <span style={{ fontWeight: "bold", fontSize: "15px" }}>{item.name}</span>
                  <span style={{fontSize: "13px" }}>{item.text}</span>
                  <e.Click>
                    <img
                      id="good"
                      src={`${process.env.PUBLIC_URL}/logo/good2.png`}
                      alt="good"
                      width="45px"
                    />
                  </e.Click>
                </e.SmallBox5>
              </e.Keywordd>
            ))}
          </e.Box2>
        </e.Box>

        <e.Button onClick={goReviewcheck2}>
          <e.ButtonText>새로운 리뷰 작성하기</e.ButtonText>
        </e.Button>
      </e.Body>
    </e.Container>
  );
};

export default Reviewcheck1;
