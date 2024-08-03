import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as d from "../style/styledchangeinfo3";

const Changeinfo3 = () => {
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
    <d.Container>
      <d.Header>
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
      </d.Header>

      <d.Ybox>
        <d.Top>
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
        </d.Top>

        <d.Text>
          <br />
          <br />
          🟡 <span>관리가 필요한 부분을 선택해 주세요.</span>
        </d.Text>
      </d.Ybox>

      <d.Body>
        <d.Box>
          <d.Box2>
            {[
              { name: "당뇨", position: { top: "50px", left: "9px" } },
              { name: "근손실", position: { top: "50px", left: "190px" } },
              { name: "비만", position: { top: "250px", left: "9px" } },
              { name: "고혈압", position: { top: "250px", left: "190px" } },
            ].map((item, index) => (
              <d.Keywordd key={index}>
                <d.SmallBox5
                  isClicked={selectedBox === index}
                  onClick={() => handleBoxClick(index)}
                  style={{
                    position: "absolute",
                    top: item.position.top,
                    left: item.position.left,
                  }}
                >
                  <span style={{ fontWeight: "bold", fontSize: "15px" }}>
                    {item.name}
                  </span>
                </d.SmallBox5>
              </d.Keywordd>
            ))}
          </d.Box2>
        </d.Box>

        <d.Button>
          <img
            id="next"
            src={`${process.env.PUBLIC_URL}/logo/next.svg`}
            alt="next"
            onClick={goMain}
          />
        </d.Button>
      </d.Body>
    </d.Container>
  );
};

export default Changeinfo3;