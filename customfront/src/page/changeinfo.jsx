import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as i0 from "../style/styledchangeinfo";

const Changeinfo = () => {
  const navigate = useNavigate();
  const [selectedBox, setSelectedBox] = useState(null); // 클릭된 박스의 인덱스를 관리

  const goMain = () => {
    navigate(`/`);
  };

  // 클릭된 박스의 상태를 업데이트하는 함수
  const handleBoxClick = (index) => {
    setSelectedBox(index); // 클릭된 박스의 인덱스를 상태로 저장

    // 클릭된 항목에 따라 이동할 경로를 결정
    switch(index) {
      case 0:
        navigate('/changeinfo1'); 
        break;
      case 1:
        navigate('/changeinfo1'); 
        break;
      case 2:
        navigate('/changeinfo4'); 
        break;
      case 3:
        navigate('/changeinfo5'); 
        break;
      default:
        break;
    }
  };

  return (
    <i0.Container>
      <i0.Header>
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
        <i0.Border>
          <div></div>
        </i0.Border>
      </i0.Header>

      <i0.Ybox>
        <i0.Top>
          <span style={{ fontWeight: "bold", fontSize: "20px" }}>
            변경이 필요한<br/>키워드를 선택해 주세요!
          </span>
        </i0.Top>
      </i0.Ybox>

      <i0.Body>
        <i0.Box>
          <i0.Box2>
            {[
              "연령",
              "관리가 필요한 부분",
              "키",
              "몸무게"
            ].map((item, index) => (
              <i0.Keywordd key={index}>
                <i0.SmallBox5
                  isClicked={selectedBox === index} // 클릭 상태에 따라 스타일 적용
                  onClick={() => handleBoxClick(index)} // 클릭 시 상태 업데이트 및 경로 이동
                >
                  <span style={{ fontWeight: "500", fontSize: "15px" }}>
                    {item}
                  </span>
                </i0.SmallBox5>
              </i0.Keywordd>
            ))}
          </i0.Box2>
        </i0.Box>
      </i0.Body>
    </i0.Container>
  );
};

export default Changeinfo;
