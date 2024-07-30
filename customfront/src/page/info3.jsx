import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as b from "../style/styledinfo3";

const Info3 = () => {
  const navigate = useNavigate();
  const [selectedBox, setSelectedBox] = useState(null);

  const goMain = () => {
    navigate(`/`);
  };

  const handleBoxClick = (index) => {
    setSelectedBox(index);
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
          을 진행해 주세요!<br />
          <span style={{ fontWeight: "400", fontSize: "12px", color: "#ED4C19" }}>
            키워드 선택이 완료되어야 다음 단계로 이동이 가능합니다.
          </span>
        </b.Top>

        <b.Text>
          <br />
          <br />
          🟡 <span>관리가 필요한 부분을 선택해 주세요.</span>
        </b.Text>
      </b.Ybox>

      <b.Body>
        <b.Box>
          <b.Box2>
            {[
              "당뇨",
              "근손실",
              "비만",
              "고혈압",
            ].map((health1Range, index) => (
              <b.Keywordd key={index}>
                <b.SmallBox5
                  isClicked={selectedBox === index}
                  onClick={() => handleBoxClick(index)}
                >
                  <span style={{ fontWeight: "bold", fontSize: "15px" }}>
                    {health1Range}
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
            onClick={goMain}
          />
        </b.Button>
      </b.Body>
    </b.Container>
  );
};

export default Info3;
