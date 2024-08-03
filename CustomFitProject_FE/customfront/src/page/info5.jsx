import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as b from "../style/styledinfo5";

const Info5 = () => {
  const navigate = useNavigate();
  const [selectedBox, setSelectedBox] = useState(null);

  const handleBoxClick = (index) => {
    setSelectedBox(index);
  };

  const weightOptions = [
    { label: "39kg 이하", value: "under_39" },
    { label: "40~44kg", value: "40-44" },
    { label: "45~49kg", value: "45-49" },
    { label: "50~54kg", value: "50-54" },
    { label: "55~59kg", value: "55-59" },
    { label: "60~64kg", value: "60-64" },
    { label: "65~69kg", value: "65-69" },
    { label: "70~74kg", value: "70-74" },
    { label: "75~79kg", value: "75-79" },
    { label: "80~84kg", value: "80-84" },
    { label: "85~89kg", value: "85-89" },
    { label: "90~94kg", value: "90-94" },
    { label: "95~99kg", value: "95-99" },
    { label: "100kg 이상", value: "over_100" },
  ];

  const onSubmit = async () => {
    if (selectedBox === null) {
      alert("몸무게를 선택해 주세요.");
      return;
    }

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = JSON.stringify({ weight: weightOptions[selectedBox].value });

      const res = await axios.patch(
        "http://127.0.0.1:8000/register/step6/",
        body,
        config
      );
      console.log("몸무게 저장 성공:", res.data);
      navigate("/main"); // 메인 페이지로 이동
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
            {weightOptions.map((option, index) => (
              <b.Keywordd key={index}>
                <b.SmallBox5
                  isClicked={selectedBox === index}
                  onClick={() => handleBoxClick(index)}
                >
                  <span style={{ fontWeight: "bold", fontSize: "15px" }}>
                    {option.label}
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
            onClick={onSubmit} // onSubmit 함수 호출
          />
        </b.Button>
      </b.Body>
    </b.Container>
  );
};

export default Info5;
