import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as b from "../style/styledinfo2";

const Info2 = () => {
  const navigate = useNavigate();
  const [selectedBox, setSelectedBox] = useState(null); // 클릭된 박스의 인덱스를 관리

  const goInfo3 = () => {
    navigate(`/info3`);
  };

  // 클릭된 박스의 상태를 업데이트하는 함수
  const handleBoxClick = (index) => {
    setSelectedBox(index); // 클릭된 박스의 인덱스를 상태로 저장
  };

  return (
    <b.Container>
      <b.Header>
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
      </b.Header>

      <b.Ybox>
        <b.Top>
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
        </b.Top>

        <b.Text>
          <br />
          <br />
          🟠 <span>성별</span>을 선택해 주세요.
        </b.Text>
      </b.Ybox>

      <b.Body>
        <b.Box>
          <b.Box2>
            {[
              "여성",
              "남성",
            ].map((ageRange, index) => (
              <b.Keywordd key={index}>
                <b.SmallBox5
                  isClicked={selectedBox === index} // 클릭 상태에 따라 스타일 적용
                  onClick={() => handleBoxClick(index)} // 클릭 시 상태 업데이트
                >
                  <span style={{ fontWeight: "bold", fontSize: "15px" }}>
                    {ageRange}
                  </span>
                </b.SmallBox5>
              </b.Keywordd>
            ))}
          </b.Box2>
        </b.Box>

        <b.Button>
          <img
            id="next"
            src={`${process.env.PUBLIC_URL}/logo/next.svg`}
            alt="next"
            onClick={goInfo3}
          />
        </b.Button>
      </b.Body>
    </b.Container>
  );
};

export default Info2;