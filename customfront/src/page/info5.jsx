import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as g from "../style/styledinfo5";

const Info5 = () => {
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
    <g.Container>
      <g.Header>
        <img
          id="back2"
          src={`${process.env.PUBLIC_URL}/logo/backbtn2.svg`}
          alt="back button"
          style={{
            position: "absolute",
            top: "8px",
            left: "8px",
            cursor: "pointer",
          }}
          onClick={() => navigate(-1)}
        />
      </g.Header>

      <g.Ybox>
        <g.Top>
          나에게{" "}
          <span style={{ fontWeight: "bold", fontSize: "20px" }}>
            딱 맞는 맞춤 비교
          </span>
          를 위해
          <br />
          <span style={{ fontWeight: "bold", fontSize: "20px" }}>
            키워드 선택
          </span>
          을 진행해 주세요!<br/>
          <span style={{ fontWeight: "400", fontSize: "12px", color: "#ED4C19" }}>키워드 선택이 완료되어야 다음 단계로 이동이 가능합니다.</span>
        </g.Top>

        <g.Text>
          <br />
          <br />
          🔵 <span>몸무게</span>를 선택해 주세요.
        </g.Text>
      </g.Ybox>

      <g.Body>
        <g.Box>
          <g.Box2>
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
              <g.Keywordd key={index}>
                <g.SmallBox5
                  isClicked={selectedBox === index} // 클릭 상태에 따라 스타일 적용
                  onClick={() => handleBoxClick(index)} // 클릭 시 상태 업데이트
                >
                  <span style={{ fontWeight: "500", fontSize: "15px" }}>
                    {weightRange}
                  </span>
                </g.SmallBox5>
              </g.Keywordd>
            ))}
          </g.Box2>
        </g.Box>

        <g.Button onClick={goMain}>
          <g.ButtonText>🔥 키워드 선택 완료하고 계정 생성하기</g.ButtonText>
        </g.Button>
      </g.Body>
    </g.Container>
  );
};

export default Info5;
