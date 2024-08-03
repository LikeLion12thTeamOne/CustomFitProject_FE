import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as b from "../style/styledinfo3";

const Info3 = () => {
  const navigate = useNavigate();
  const [selectedBox, setSelectedBox] = useState(null);

  const handleBoxClick = (index) => {
    setSelectedBox(index);
  };

  const diseaseOptions = [
    { name: "당뇨", className: "position1" },
    { name: "근손실", className: "position2" },
    { name: "비만", className: "position3" },
    { name: "고혈압", className: "position4" },
  ];

  const onSubmit = async () => {
    if (selectedBox === null) {
      alert("질병을 선택해 주세요.");
      return;
    }

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = JSON.stringify({
        disease: diseaseOptions[selectedBox].name,
      });

      const res = await axios.patch(
        "http://127.0.0.1:8000/register/step4/",
        body,
        config
      );
      console.log("질병 저장 성공:", res.data);
      navigate("/info4");
    } catch (err) {
      console.error("Error during axios request:", err);
    }
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
          을 진행해 주세요!
          <br />
          <span
            style={{ fontWeight: "400", fontSize: "12px", color: "#ED4C19" }}
          >
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
            {diseaseOptions.map((option, index) => (
              <b.Keywordd key={index}>
                <b.SmallBox5
                  isClicked={selectedBox === index}
                  onClick={() => handleBoxClick(index)}
                  className={option.className}
                >
                  <span style={{ fontWeight: "bold", fontSize: "15px" }}>
                    {option.name}
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
            onClick={onSubmit}
          />
        </b.Button>
      </b.Body>
    </b.Container>
  );
};

export default Info3;
