import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as s from "../style/styledmembership";

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

  // 전체 동의하기 클릭 시 호출되는 함수
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

  // 약관 체크박스 클릭 시 호출되는 함수
  const toggleOptionalCheckbox = () => {
    const newValue = !formData.terms_accepted_optional;
    setFormData({
      ...formData,
      terms_accepted_optional: newValue,
    });
  };

  const onChange = e => {
    console.log(`Field ${e.target.name} changed to:`, e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const onSubmit = async e => {
    e.preventDefault();
    console.log("폼 제출됨");
    console.log("Current formData:", formData);
  
    if (password !== password_confirm) {
      alert("비밀번호가 일치하지 않습니다");
      return;
    }
  
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      const body = JSON.stringify(formData);
      console.log("Sending request with body:", body);
  
      const res = await axios.post('http://127.0.0.1:8000/register/step1/', body, config);
      console.log('회원가입 성공:', res.data);
      //navigate(-1); 
    } catch (err) {
      console.error("Error during axios request:", err);
      if (err.response && err.response.data) {
        if (err.response.data.username) {
          alert("이미 사용 중인 사용자 이름입니다.");
          console.error("Username 오류:", err.response.data.username);
        } else {
          alert("회원가입 실패: " + JSON.stringify(err.response.data));
          console.error("회원가입 실패:", err.response.data);
        }
      } else {
        alert("서버와의 통신 오류: " + err.message);
        console.error("서버와의 통신 오류:", err.message);
      }
    }
  };
  

  return (
    <s.Container>
      <s.Header>
        <img
          id="back"
          src={`${process.env.PUBLIC_URL}/logo/backbtn.svg`} // 수정된 부분
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
