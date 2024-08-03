import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as f1 from "../style/styledfirst";

const First = () => {
  const navigate = useNavigate();

  const goLogin = () => {
    navigate("/login");
  };

  const LottiePlayer = () => {
    useEffect(() => {
      // 외부 스크립트 로드
      const script = document.createElement("script");
      script.src =
        "https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs";
      script.type = "module";
      document.body.appendChild(script);

      // 스크립트 로드 후 정리
      return () => {
        document.body.removeChild(script);
      };
    }, []);

    return (
      <div>
        <dotlottie-player
          src="https://lottie.host/4c2680be-cf8b-4a05-83ca-f458436a1d2f/jDnda9mWsC.json"
          background="transparent"
          speed="1"
          style={{
            width: "200px",
            height: "160px",
            position: "absolute",
            top: "920px",
            right: "120px",
          }}
          loop
          autoplay
        ></dotlottie-player>

        <dotlottie-player
          src="https://lottie.host/8a90597c-f6df-4de5-a72b-a7e8cfb6d37e/lN0eGr8bK9.json"
          background="transparent"
          speed="1"
          style={{ width: "300px", height: "300px" }}
          loop
          autoplay
        ></dotlottie-player>
      </div>
    );
  };

  return (
    <f1.Container>
      <f1.Ybox>
        <f1.Top>
          <span style={{ fontWeight: "500", fontSize: "20px", color: "#000" }}>
            당신의 건강을 위한
          </span>
          <br />
          <span style={{ fontWeight: "700", fontSize: "20px", color: "#000" }}>
            맞춤형 영양 정보 비교 분석 서비스
          </span>
        </f1.Top>
      </f1.Ybox>

      <f1.Body>
        <f1.Title>
          <img
            id="title"
            src={`${process.env.PUBLIC_URL}/logo/title.svg`}
            alt="title"
            style={{
              position: "absolute",
              top: "8px",
              left: "8px",
              cursor: "pointer",
            }}
          />
        </f1.Title>
        <f1.Box>
          <LottiePlayer />
        </f1.Box>
        <f1.Box2></f1.Box2>

        <f1.Button onClick={goLogin}>
          <f1.ButtonText>서비스 이용하기</f1.ButtonText>
          <img
            id="down"
            src={`${process.env.PUBLIC_URL}/logo/down.svg`}
            alt="down"
          />
        </f1.Button>
      </f1.Body>
      <f1.Body2>
        <img
          id="text1"
          src={`${process.env.PUBLIC_URL}/logo/text1.svg`}
          alt="text1"
        />
        <img
          id="text2"
          src={`${process.env.PUBLIC_URL}/logo/text2.svg`}
          alt="text2"
        />
      </f1.Body2>
      <f1.Body3>
        <f1.Sub>
          <span
            style={{
              fontWeight: "700",
              fontSize: "15px",
              color: "#EDD719",
              marginLeft: "30px",
            }}
          >
            건강한 식생활
          </span>
          <span
            style={{
              fontWeight: "700",
              fontSize: "15px",
              color: "#FFF",
              marginRight: "2px",
            }}
          >
            에 도움되는
          </span>
          <span
            style={{ fontWeight: "700", fontSize: "15px", color: "#EDD719" }}
          >
            {" "}
            꿀팁
          </span>
          <span style={{ fontWeight: "700", fontSize: "15px", color: "#FFF" }}>
            도 꿀꺽
          </span>
        </f1.Sub>
        <f1.News>
          <f1.Card>
            <img
              id="card"
              src={`${process.env.PUBLIC_URL}/logo/card.png`}
              alt="card"
            />
            <img
              id="card"
              src={`${process.env.PUBLIC_URL}/logo/card.png`}
              alt="card"
            />
            <img
              id="card"
              src={`${process.env.PUBLIC_URL}/logo/card.png`}
              alt="card"
            />
          </f1.Card>
        </f1.News>
        <f1.Bottom onClick={goLogin}>
          <f1.BottomText>
            🔥로그인 / 회원가입하고 모든 서비스 이용하기
          </f1.BottomText>
        </f1.Bottom>
      </f1.Body3>
    </f1.Container>
  );
};

export default First;
