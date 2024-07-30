import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as i4 from "../style/styledchangeinfo4";

const Changeinfo4 = () => {
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
    <i4.Container>
      <i4.Header>
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
        <i4.Border>
          <div></div>
        </i4.Border>
      </i4.Header>

      <i4.Ybox>
        <i4.Top>
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
        </i4.Top>

        <i4.Text>
          <br />
          <br />
          🟢 <span>키</span>를 선택해 주세요.
        </i4.Text>
      </i4.Ybox>

      <i4.Body>
        <i4.Box>
          <i4.Box2>
            {[
              "149cm 이하",
              "150~154cm",
              "155~159cm",
              "160~164cm",
              "165~169cm",
              "170~174cm",
              "175~179cm",
              "180cm 이상"
            ].map((heightRange, index) => (
              <i4.Keywordd key={index}>
                <i4.SmallBox5
                  isClicked={selectedBox === index} // 클릭 상태에 따라 스타일 적용
                  onClick={() => handleBoxClick(index)} // 클릭 시 상태 업데이트
                >
                  <span style={{ fontWeight: "500", fontSize: "15px" }}>
                    {heightRange}
                  </span>
                </i4.SmallBox5>
              </i4.Keywordd>
            ))}
          </i4.Box2>
        </i4.Box>

        <i4.Button>
          <img
            id="restore"
            src={`${process.env.PUBLIC_URL}/logo/restore.svg`}
            alt="restore"
            onClick={goMain}
          />
        </i4.Button>
      </i4.Body>
    </i4.Container>
  );
};

export default Changeinfo4;
