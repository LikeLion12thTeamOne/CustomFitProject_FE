import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as f from "../style/styledinfo4";

const Info4 = () => {
  const navigate = useNavigate();
  const [selectedBox, setSelectedBox] = useState(null); // 클릭된 박스의 인덱스를 관리

  const goInfo5 = () => {
    navigate(`/info5`);
  };

  // 클릭된 박스의 상태를 업데이트하는 함수
  const handleBoxClick = (index) => {
    setSelectedBox(index); // 클릭된 박스의 인덱스를 상태로 저장
  };

  return (
    <f.Container>
      <f.Header>
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
      </f.Header>

      <f.Ybox>
        <f.Top>
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
        </f.Top>

        <f.Text>
          <br />
          <br />
          🟢 <span>키</span>를 선택해 주세요.
        </f.Text>
      </f.Ybox>

      <f.Body>
        <f.Box>
          <f.Box2>
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
              <f.Keywordd key={index}>
                <f.SmallBox5
                  isClicked={selectedBox === index} // 클릭 상태에 따라 스타일 적용
                  onClick={() => handleBoxClick(index)} // 클릭 시 상태 업데이트
                >
                  <span style={{ fontWeight: "500", fontSize: "15px" }}>
                    {heightRange}
                  </span>
                </f.SmallBox5>
              </f.Keywordd>
            ))}
          </f.Box2>
        </f.Box>

        <f.Button>
          <img
            id="next"
            src={`${process.env.PUBLIC_URL}/logo/next.svg`}
            alt="next"
            onClick={goInfo5}
          />
        </f.Button>
      </f.Body>
    </f.Container>
  );
};

export default Info4;
