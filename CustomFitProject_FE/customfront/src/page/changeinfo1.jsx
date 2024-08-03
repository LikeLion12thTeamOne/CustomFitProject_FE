import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as i1 from "../style/styledchangeinfo1";

const Changeinfo1 = () => {
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
    <i1.Container>
      <i1.Header>
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
        <i1.Border>
          <div></div>
        </i1.Border>
      </i1.Header>

      <i1.Ybox>
        <i1.Top>
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
        </i1.Top>

        <i1.Text>
          <br />
          <br />
          🔴 <span>연령대</span>를 선택해 주세요.
        </i1.Text>
      </i1.Ybox>

      <i1.Body>
        <i1.Box>
          <i1.Box2>
            {[
              "19세 이하",
              "20~29세",
              "30~39세",
              "40~49세",
              "50~59세",
              "60~69세",
              "70세 이상",
            ].map((ageRange, index) => (
              <i1.Keywordd key={index}>
                <i1.SmallBox5
                  isClicked={selectedBox === index} // 클릭 상태에 따라 스타일 적용
                  onClick={() => handleBoxClick(index)} // 클릭 시 상태 업데이트
                >
                  <span style={{ fontWeight: "500", fontSize: "15px" }}>
                    {ageRange}
                  </span>
                </i1.SmallBox5>
              </i1.Keywordd>
            ))}
          </i1.Box2>
        </i1.Box>

        <i1.Button>
          <img
            id="restore"
            src={`${process.env.PUBLIC_URL}/logo/restore.svg`}
            alt="restore"
            onClick={goMain}
          />
        </i1.Button>
      </i1.Body>
    </i1.Container>
  );
};

export default Changeinfo1;
