import React from "react";
import { useNavigate } from "react-router-dom";
import * as r from "../style/styledreview";

const Review = () => {
  const navigate = useNavigate();

  const goMain = () => {
    navigate(`/`);
  };

  const goReviewcheck1 = () => {
    navigate(`/Reviewcheck1`);
  };

  // Box2의 아이템 상태 관리 (setBox2Items 제거)
  const box2Items = [
    { id: 1, name: "과자 1" },
    { id: 2, name: "과자 2" },
    { id: 3, name: "과자 3" },
    { id: 4, name: "과자 4" },
    { id: 5, name: "과자 5" },
  ];

  return (
    <r.Container>
      <r.Header>
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
        <r.Border>
          <div></div>
        </r.Border>
      </r.Header>

      <r.Top>리뷰 작성하기</r.Top>

      <r.Body>
        <r.Box>
          <r.Kit>후기를 작성할 제품을 선택해 주세요.</r.Kit>
          <r.Box2>
            {box2Items.map((item) => (
              <r.Keywordd key={item.id}>
                <r.SmallBox5>
                  <span>{item.name}</span>
                </r.SmallBox5>
              </r.Keywordd>
            ))}
          </r.Box2>
        </r.Box>

        <r.Under>
          김세모님! <br />
          [제품명]은 어떠셨어요?
        </r.Under>

        <r.Button2>
          <img
            id="ylogo"
            src={`${process.env.PUBLIC_URL}/logo/good.svg`}
            alt="logo"
            width="65px"
          />
          <img
            id="ylogo"
            src={`${process.env.PUBLIC_URL}/logo/bad.svg`}
            alt="logo"
            width="65px"
          />
        </r.Button2>

        <r.InputBlank>
          <input type="text" placeholder="텍스트 리뷰를 작성해 주세요." />
        </r.InputBlank>

        <r.Button onClick={goReviewcheck1}>
          <r.ButtonText>저장하기</r.ButtonText>
        </r.Button>
      </r.Body>
    </r.Container>
  );
};

export default Review;
