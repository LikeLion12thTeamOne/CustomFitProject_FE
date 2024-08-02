import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as h from "../style/styledlogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [csrfToken, setCsrfToken] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCsrfToken = async () => {
      const token = localStorage.getItem('csrftoken');
      setCsrfToken(token);
    };

    fetchCsrfToken();
  }, []);

  const handleLogin = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/rest-auth/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": csrfToken,
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error("로그인 실패");
      }

      const data = await response.json();
      console.log("로그인 성공:", data);

      // 서버에서 응답한 토큰이 'key' 필드에 있는 경우
      const token = data.key; 
      localStorage.setItem('token', token);

      // 로그인 성공 후 네비게이션 처리
      navigate(`/main2`);
    } catch (error) {
      console.error(error);
      alert("로그인 실패: 사용자 이름이나 비밀번호를 확인하세요.");
    }
  };

  const LottiePlayer = () => {
    useEffect(() => {
      const script = document.createElement("script");
      script.src =
        "https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs";
      script.type = "module";
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }, []);

    return (
      <dotlottie-player
        src="https://lottie.host/8a90597c-f6df-4de5-a72b-a7e8cfb6d37e/lN0eGr8bK9.json"
        background="transparent"
        speed="1"
        style={{ position: "absolute", width: "300px", height: "300px", top: "200px", left: "50px" }}
        loop
        autoplay
      ></dotlottie-player>
    );
  };

  const goMembership = () => {
    navigate(`/membership`);
  };

  return (
    <h.Container>
      <h.Title>
        <h.Box></h.Box>
      </h.Title>
      <img
        id="logintitle"
        src={`${process.env.PUBLIC_URL}/logo/logintitle.svg`}
        alt="logintitle"
        style={{
          position: "absolute",
          top: "8px",
          left: "8px",
          cursor: "pointer",
        }}
        onClick={() => navigate(-1)}
      />
      <LottiePlayer />

      <h.InsertA>
        <input
          type="text"
          id="Id"
          placeholder="ID"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ outline: "none" }}
        />
      </h.InsertA>
      <h.InsertB>
        <input
          type="password"
          id="Pw"
          placeholder="PASSWORD"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ outline: "none" }}
        />
      </h.InsertB>

      <h.LoginBox onClick={handleLogin}>
        <div id="LoginText" style={{ cursor: "pointer" }}>
          로그인
        </div>
      </h.LoginBox>

      <h.MembershipBox onClick={goMembership}>
        <div id="MembershipText" style={{ cursor: "pointer" }}>
          회원가입
        </div>
      </h.MembershipBox>
    </h.Container>
  );
};

export default Login;