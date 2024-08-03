import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as b from "../style/styledinfo4";

const Info4 = () => {
  const navigate = useNavigate();
  const [selectedBox, setSelectedBox] = useState(null);

  const handleBoxClick = (index) => {
    setSelectedBox(index);
  };

  const heightOptions = [
    { label: "149 cm 이하", value: "under_149" },
    { label: "150~154 cm", value: "150-154" },
    { label: "155~159 cm", value: "155-159" },
    { label: "160~164 cm", value: "160-164" },
    { label: "165~169 cm", value: "165-169" },
    { label: "170~174 cm", value: "170-174" },
    { label: "175~179 cm", value: "175-179" },
    { label: "180 cm 이상", value: "over_180" },
  ];

  const onSubmit = async () => {
    if (selectedBox === null) {
      alert("키를 선택해 주세요.");
      return;
    }

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = JSON.stringify({ height: heightOptions[selectedBox].value });

      const res = await axios.patch(
        "http://127.0.0.1:8000/register/step5/",
        body,
        config
      );
      console.log("키 저장 성공:", res.data);
      navigate("/info5");
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
            {heightOptions.map((option, index) => (
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

export default Info4;
