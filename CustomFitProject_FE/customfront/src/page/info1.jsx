import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as b from "../style/styledinfo1";

axios.defaults.withCredentials = true;

const Info1 = () => {
  const navigate = useNavigate();
  const [selectedBox, setSelectedBox] = useState(null);
  const [errors, setErrors] = useState(null); // 에러 메시지 관리

  const ageRanges = [
    { label: "19세 이하", value: "under_19" },
    { label: "20~29세", value: "20-29" },
    { label: "30~39세", value: "30-39" },
    { label: "40~49세", value: "40-49" },
    { label: "50~59세", value: "50-59" },
    { label: "60~69세", value: "60-69" },
    { label: "70세 이상", value: "over_70" },
  ];

  const handleBoxClick = (index) => {
    setSelectedBox(index);
  };

  useEffect(() => {
    const getSessionData = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/register/session/"
        );
        const { session_data } = response.data;
        console.log("Current session data:", session_data);
        const { age } = session_data;
        if (age) {
          const index = ageRanges.map((a) => a.value).indexOf(age);
          setSelectedBox(index);
        }
      } catch (error) {
        console.error("Error fetching session data:", error);
      }
    };

    getSessionData();
  }, []);

  const onSubmit = async () => {
    if (selectedBox === null) {
      setErrors("연령대를 선택해 주세요.");
      return;
    }

    const age = ageRanges[selectedBox].value;

    try {
      const csrfToken = document.cookie
        .split("; ")
        .find((row) => row.startsWith("csrftoken="))
        ?.split("=")[1];

      const config = {
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": csrfToken,
        },
        // withCredentials: true,
      };

      const body = JSON.stringify({ age });

      const res = await axios.put(
        "http://127.0.0.1:8000/register/step2/",
        body,
        config,
        { withCredentials: true }
      );
      console.log("회원가입 2단계 성공:", res.data);
      console.log("Updated session data:", res.data.session_data);
      navigate("/info2");
    } catch (err) {
      if (err.response && err.response.data) {
        const serverErrors = err.response.data;
        setErrors(serverErrors.detail ? serverErrors.detail : serverErrors);
      } else {
        console.error("Error during axios request:", err);
      }
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
          🔴 <span>연령대</span>를 선택해 주세요.
        </b.Text>
      </b.Ybox>

      <b.Body>
        <b.Box>
          <b.Box2>
            {ageRanges.map((ageRange, index) => (
              <b.Keywordd key={index}>
                <b.SmallBox5
                  $isclicked={selectedBox === index}
                  onClick={() => handleBoxClick(index)}
                >
                  <span style={{ fontWeight: "500", fontSize: "15px" }}>
                    {ageRange.label}
                  </span>
                </b.SmallBox5>
              </b.Keywordd>
            ))}
          </b.Box2>
        </b.Box>

        {errors && <div style={{ color: "red" }}>{errors}</div>}

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

export default Info1;
