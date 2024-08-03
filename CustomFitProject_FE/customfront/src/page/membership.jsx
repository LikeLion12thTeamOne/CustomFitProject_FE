import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as s from "../style/styledmembership";

axios.defaults.withCredentials = true;

const Membership = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    password_confirm: "",
    first_name: "",
    email: "",
    terms_accepted: false,
    terms_accepted_1: false,
    terms_accepted_2: false,
    terms_accepted_optional: false,
  });
  const [errors, setErrors] = useState({}); // 에러메시지 관리

  const {
    username,
    password,
    password_confirm,
    first_name,
    email,
    terms_accepted,
    terms_accepted_1,
    terms_accepted_2,
    terms_accepted_optional,
  } = formData;

  const handleCheckAll = () => {
    const newValue = !formData.terms_accepted;
    setFormData({
      ...formData,
      terms_accepted: newValue,
      terms_accepted_1: newValue,
      terms_accepted_2: newValue,
      terms_accepted_optional: newValue,
    });
  };

  const toggleOptionalCheckbox = () => {
    const newValue = !formData.terms_accepted_optional;
    setFormData({
      ...formData,
      terms_accepted_optional: newValue,
    });
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getCsrfToken = () => {
    const csrfToken = document.cookie
      .split("; ")
      .find((row) => row.startsWith("csrftoken="))
      ?.split("=")[1];
    if (csrfToken) {
      return csrfToken;
    } else {
      console.error("CSRF token not found");
      return null;
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const csrfToken = getCsrfToken();
      const config = {
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": csrfToken,
        },
        withCredentials: true,
      };
      const body = JSON.stringify(formData);

      const res = await axios.post(
        "http://127.0.0.1:8000/register/step1/",
        body,
        config
      );
      console.log("회원가입 성공:", res.data);
      console.log("Session cookie:", document.cookie); // 세션 쿠키 확인
      navigate("/info1");
    } catch (err) {
      if (err.response && err.response.data) {
        const serverErrors = err.response.data;
        if (
          serverErrors.username &&
          serverErrors.username.includes(
            "A user with that username already exists."
          )
        ) {
          serverErrors.username = ["중복된 아이디가 있습니다."];
        }
        setErrors(serverErrors);
      } else {
        console.error("Error during axios request:", err);
      }
    }
  };

  return (
    <s.Container>
      <s.Header>
        <img
          id="back"
          src={`${process.env.PUBLIC_URL}/logo/backbtn.svg`}
          alt="뒤로 버튼"
          style={{
            position: "absolute",
            top: "8px",
            left: "8px",
            cursor: "pointer",
          }}
          onClick={() => navigate(-1)}
        />
      </s.Header>

      <s.Top>
        <span>회원가입</span>
      </s.Top>

      <s.Body>
        <form onSubmit={onSubmit}>
          <s.Label>* 아이디</s.Label>
          <s.InputBlank>
            <input
              type="text"
              name="username"
              value={username}
              onChange={onChange}
              placeholder="아이디를 입력해주세요."
              required
            />
            {errors.username && (
              <p style={{ color: "red" }}>{errors.username}</p>
            )}
          </s.InputBlank>

          <s.Label>* 비밀번호</s.Label>
          <s.InputBlank>
            <input
              type="password"
              name="password"
              value={password}
              onChange={onChange}
              placeholder="비밀번호를 입력해주세요."
              required
            />
            {errors.password && (
              <p style={{ color: "red" }}>{errors.password}</p>
            )}
          </s.InputBlank>

          <s.Label>* 비밀번호 확인하기</s.Label>
          <s.InputBlank>
            <input
              type="password"
              name="password_confirm"
              value={password_confirm}
              onChange={onChange}
              placeholder="비밀번호를 확인해주세요."
              required
            />
            {errors.password_confirm && (
              <p style={{ color: "red" }}>{errors.password_confirm}</p>
            )}
          </s.InputBlank>

          <s.Label>* 이름</s.Label>
          <s.InputBlank>
            <input
              type="text"
              name="first_name"
              value={first_name}
              onChange={onChange}
              placeholder="이름을 입력해주세요."
              required
            />
            {errors.first_name && (
              <p style={{ color: "red" }}>{errors.first_name}</p>
            )}
          </s.InputBlank>

          <s.Label>* Email</s.Label>
          <s.InputBlank>
            <input
              type="email"
              name="email"
              value={email}
              onChange={onChange}
              placeholder="Email을 입력해주세요."
              required
            />
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
          </s.InputBlank>

          <s.Label>약관</s.Label>
          <s.Bottom>
            <s.BottomText>
              <input
                type="checkbox"
                checked={terms_accepted}
                onChange={handleCheckAll}
              />
              전체 동의하기
            </s.BottomText>
            <s.BottomText>
              <label>
                <input
                  type="checkbox"
                  name="termsAccepted1"
                  checked={terms_accepted_1}
                  onChange={() =>
                    setFormData({
                      ...formData,
                      terms_accepted_1: !formData.terms_accepted_1,
                    })
                  }
                  required
                />
                (필수) 개인회원 약관에 동의
              </label>
              {errors.terms_accepted_1 && (
                <p style={{ color: "red" }}>{errors.terms_accepted_1}</p>
              )}
            </s.BottomText>

            <s.BottomText>
              <label>
                <input
                  type="checkbox"
                  name="termsAccepted2"
                  checked={terms_accepted_2}
                  onChange={() =>
                    setFormData({
                      ...formData,
                      terms_accepted_2: !formData.terms_accepted_2,
                    })
                  }
                  required
                />
                (필수) 개인정보 수집 및 이용에 동의
              </label>
              {errors.terms_accepted_2 && (
                <p style={{ color: "red" }}>{errors.terms_accepted_2}</p>
              )}
            </s.BottomText>

            <s.BottomText>
              <label>
                <input
                  type="checkbox"
                  name="termsAcceptedOptional"
                  checked={terms_accepted_optional}
                  onChange={toggleOptionalCheckbox}
                />
                (선택) 이메일 등 마케팅 정보 수신 동의
              </label>
              {errors.terms_accepted_optional && (
                <p style={{ color: "red" }}>{errors.terms_accepted_optional}</p>
              )}
            </s.BottomText>
          </s.Bottom>

          <s.Button type="submit" onSubmit={onSubmit}>
            🔥 회원 정보 저장하고 키워드 선택하기
          </s.Button>
        </form>
      </s.Body>
    </s.Container>
  );
};
export default Membership;
