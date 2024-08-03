import React from "react";
import { useNavigate } from "react-router-dom";
import * as i from "../style/styledreviewcheck3";

const Reviewcheck3 = () => {
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
    <i.Container>
      <i.Header>
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
        <i.Border>
          <div></div>
        </i.Border>
      </i.Header>

      <i.Top>리뷰 작성하기</i.Top>

      <i.Body>
        <i.Box>
          <i.Kit>후기를 작성할 제품을 선택해 주세요.</i.Kit>
          <i.Box2>
            {box2Items.map((item) => (
              <i.Keywordd key={item.id}>
                <i.SmallBox5>
                  <span>{item.name}</span>
                </i.SmallBox5>
              </i.Keywordd>
            ))}
          </i.Box2>
        </i.Box>

        <i.Under>
          김세모님! <br />
          [제품명]은 어떠셨어요?
        </i.Under>

        <i.Button2>
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
        </i.Button2>

        <i.InputBlank>
          <input type="text" placeholder="텍스트 리뷰를 작성해 주세요." />
        </i.InputBlank>

        <i.Button onClick={goReviewcheck1}>
          <i.ButtonText>저장하기</i.ButtonText>
        </i.Button>
      </i.Body>
    </i.Container>
  );
};

export default Reviewcheck3;
