import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as i5 from "../style/styledchangeinfo5";

const Changeinfo5 = () => {
  const navigate = useNavigate();
  const [selectedBox, setSelectedBox] = useState(null); // 클릭된 박스의 인덱스를 관리

  const goMain = () => {
    navigate(`/`);
  };

  // 클릭된 박스의 상태를 업데이트하는 함수
  const handleBoxClick = (index) => {
    setSelectedBox(index); // 클릭된 박스의 인덱스를 상태로 저장
  };

  return (
    <i5.Container>
      <i5.Header>
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
        <i5.Border>
          <div></div>
        </i5.Border>
      </i5.Header>

      <i5.Ybox>
        <i5.Top>
          나에게{" "}
          <span style={{ fontWeight: "bold", fontSize: "20px" }}>
            딱 맞는 맞춤 비교
          </span>
          를 위해
          <br />
          <span style={{ fontWeight: "bold", fontSize: "20px" }}>
            키워드 선택
          </span>
          을 진행해 주세요!
        </i5.Top>

        <i5.Text>
          <br />
          <br />
          🔵 <span>몸무게</span>를 선택해 주세요.
        </i5.Text>
      </i5.Ybox>

      <i5.Body>
        <i5.Box>
          <i5.Box2>
            {[
              "39kg 이하",
              "40~44kg",
              "45~49kg",
              "50~54kg",
              "55~59kg",
              "60~64kg",
              "65~69kg",
              "70~74kg",
              "75~79kg",
              "80~84kg",
              "85~89kg",
              "90~94kg",
              "100kg 이상"
            ].map((weightRange, index) => (
              <i5.Keywordd key={index}>
                <i5.SmallBox5
                  isClicked={selectedBox === index} // 클릭 상태에 따라 스타일 적용
                  onClick={() => handleBoxClick(index)} // 클릭 시 상태 업데이트
                >
                  <span style={{ fontWeight: "500", fontSize: "15px" }}>
                    {weightRange}
                  </span>
                </i5.SmallBox5>
              </i5.Keywordd>
            ))}
          </i5.Box2>
        </i5.Box>

        <i5.Button>
          <img
            id="restore"
            src={`${process.env.PUBLIC_URL}/logo/restore.svg`}
            alt="restore"
            onClick={goMain}
          />
        </i5.Button>
      </i5.Body>
    </i5.Container>
  );
};

export default Changeinfo5;
