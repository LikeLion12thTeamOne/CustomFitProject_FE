import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as c from "../style/styledchangeinfo2";

const Changeinfo2 = () => {
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
    <c.Container>
      <c.Header>
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
      </c.Header>

      <c.Ybox>
        <c.Top>
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
        </c.Top>

        <c.Text>
          <br />
          <br />
          🟠 <span>성별</span>을 선택해 주세요.
        </c.Text>
      </c.Ybox>

      <c.Body>
        <c.Box>
          <c.Box2>
            {[
              "여성",
              "남성",
            ].map((ageRange, index) => (
              <c.Keywordd key={index}>
                <c.SmallBox5
                  isClicked={selectedBox === index} // 클릭 상태에 따라 스타일 적용
                  onClick={() => handleBoxClick(index)} // 클릭 시 상태 업데이트
                >
                  <span style={{ fontWeight: "bold", fontSize: "15px" }}>
                    {ageRange}
                  </span>
                </c.SmallBox5>
              </c.Keywordd>
            ))}
          </c.Box2>
        </c.Box>

        <c.Button>
          <img
            id="next"
            src={`${process.env.PUBLIC_URL}/logo/next.svg`}
            alt="next"
            onClick={goInfo3}
          />
        </c.Button>
      </c.Body>
    </c.Container>
  );
};

export default Changeinfo2;