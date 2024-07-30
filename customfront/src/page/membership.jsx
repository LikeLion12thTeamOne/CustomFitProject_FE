import React from "react";
import { useNavigate } from "react-router-dom";
import * as s from "../style/styledmembership";

const Membership = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate(-1);
  };

  return (
    <s.Container>
      <s.Header>
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
          width="42px"
        />
      </s.Header>

      <s.Top>
        <span>회원가입</span>
      </s.Top>

      <s.Body>
      <s.Idbutton>
          <span
            style={{
              fontWeight: "400",
              color: "#fff",
              fontSize: "13px",
              top: "10px",
            }}
          >
            중복확인
          </span>
        </s.Idbutton>
        <s.Label>아이디</s.Label>
        <s.InputBlank2>
          <input
            type="text"
            placeholder="4~16자리 / 영문, 숫자, 특수문자 사용 가능"
          />
        </s.InputBlank2>

        <s.Label>비밀번호</s.Label>
        <s.InputBlank>
          <input
            type="text"
            placeholder="8~16자리 / 영문, 숫자, 특수문자 조합"
          />
        </s.InputBlank>

        <s.Label>비밀번호 확인하기</s.Label>
        <s.InputBlank>
          <input
            type="text"
            placeholder="4~16자리 / 영문, 숫자, 특수문자 조합"
          />
        </s.InputBlank>

        <s.Label>이름</s.Label>
        <s.InputBlank>
          <input type="text" placeholder="이름 입력하기" />
        </s.InputBlank>

        <s.Label>이메일</s.Label>
        <s.InputBlank>
          <input type="text" placeholder="Customfit@gmail.com" />
        </s.InputBlank>

        <s.Label2>약관</s.Label2>

        <s.Bottom>
          <s.BottomText>
            <img
              id="checkbox"
              alt="checkbox"
              src={`${process.env.PUBLIC_URL}/logo/checkbox.svg`}
            />
            <div id="check">전체 동의하기</div>
          </s.BottomText>
          <s.BottomText>
            <img
              id="checkbox"
              alt="checkbox"
              src={`${process.env.PUBLIC_URL}/logo/checkbox.svg`}
            />
            <div id="check">(필수) 개인회원 약관에 동의</div>
          </s.BottomText>
          <s.BottomText>
            <img
              id="checkbox"
              alt="checkbox"
              src={`${process.env.PUBLIC_URL}/logo/checkbox.svg`}
            />
            <div id="check">(필수) 개인정보 수집 및 이용에 동의</div>
          </s.BottomText>
          <s.BottomText>
            <img
              id="checkbox"
              alt="checkbox"
              src={`${process.env.PUBLIC_URL}/logo/checkbox.svg`}
            ></img>
            <div id="check">(선택) 이메일 등 마케팅 정보 수신 동의</div>
          </s.BottomText>
        </s.Bottom>

        <s.Button onClick={goHome}>
          <s.ButtonText>🔥 회원 정보 저장하고 키워드 선택하기</s.ButtonText>
        </s.Button>
      </s.Body>
    </s.Container>
  );
};

//1

export default Membership;
