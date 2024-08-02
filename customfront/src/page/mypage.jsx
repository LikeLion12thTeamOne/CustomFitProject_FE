import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as m from "../style/styledmypage";

const Mypage = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    firstname: "",
    age: "",
    gender: "",
    disease: "",
    height: "",
    weight: ""
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const goPwchange = () => {
    navigate(`/pwchange`);
  };

  const goInfo1 = () => {
    navigate(`/Info1`);
  };

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error("No token found");
        }

        const config = {
          headers: {
            'Authorization': `Token ${token}`
          }
        };

        // 요청 전 URL 및 인증 토큰 확인
        console.log("Fetching user info from:", 'http://127.0.0.1:8000/myPage/user/');
        console.log("Using token:", token);

        const response = await axios.get('http://127.0.0.1:8000/myPage/user/', config);
        console.log("Response data:", response.data);

        const data = response.data;

        setUserInfo({
          firstname: data.firstname,
          age: data.age,
          gender: data.gender,
          disease: data.disease,
          height: data.height,
          weight: data.weight
        });

        setLoading(false);
      } catch (err) {
        console.error("Error fetching user info:", err);

        if (err.response) {
          console.error("Response error:", err.response.status, err.response.data);
        }

        if (err.message === "No token found") {
          alert("토큰이 없습니다. 로그인이 필요합니다.");
          navigate("/login");
        } else if (err.response && err.response.status === 401) {
          console.error("Authentication error: Unauthorized");
          setError(new Error("인증 오류: 로그인이 필요합니다."));
        } else {
          setError(err);
        }
        setLoading(false);
      }
    };

    fetchUserInfo();
  }, [navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <m.Container>
      <m.Header>
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
          width="40px"
        />
        <img
          id="alarm"
          src={`${process.env.PUBLIC_URL}/logo/alarm.svg`}
          alt="alarm button"
          style={{
            position: "absolute",
            top: "8px",
            left: "8px",
            cursor: "pointer",
          }}
          onClick={() => navigate(-1)}
        />
        <img
          id="menu"
          src={`${process.env.PUBLIC_URL}/logo/menu.svg`}
          alt="menu button"
          style={{
            position: "absolute",
            top: "8px",
            left: "8px",
            cursor: "pointer",
          }}
          onClick={() => navigate(-1)}
        />
        <m.Border>
          <div></div>
        </m.Border>
      </m.Header>

      <img
        id="profile"
        src={`${process.env.PUBLIC_URL}/logo/profile.svg`}
        alt="profile"
        style={{
          position: "absolute",
          top: "97px",
          left: "48px",
          cursor: "pointer",
          zIndex: 10,
        }}
      />

      <m.Top></m.Top>

      <m.Name>
        {userInfo.firstname} 님
      </m.Name>
      
      <m.Keyword>
        <m.Wrap>
          <m.SmallOne>#{userInfo.age}</m.SmallOne>
          <m.SmallTwo>#{userInfo.gender}</m.SmallTwo>
        </m.Wrap>
        <m.Wrap2>
          <m.SmallThree>#{userInfo.disease}</m.SmallThree>
          <m.SmallFour>#{userInfo.height}</m.SmallFour>
          <m.SmallFive>#{userInfo.weight}</m.SmallFive>
        </m.Wrap2>
      </m.Keyword>

      <img
        id="pwchange"
        src={`${process.env.PUBLIC_URL}/logo/pwchange.svg`}
        alt="password change"
        style={{
          position: "absolute",
          top: "276px",
          left: "24px",
          cursor: "pointer",
        }}
        onClick={goPwchange}
      />

      <img
        id="keychange"
        src={`${process.env.PUBLIC_URL}/logo/keychange.svg`}
        alt="info change"
        style={{
          position: "absolute",
          top: "276px",
          left: "204px",
          cursor: "pointer",
        }}
        onClick={goInfo1}
      />

      <m.Kit>
        🔥 후기를 작성하고, 키워드를 강화해요!
      </m.Kit>

      <m.Check>나의 리뷰 확인하기</m.Check>
      <m.Write>리뷰 작성하기</m.Write>

      <m.Body>
        <m.Text>🔔 최근 알림을 확인해 주세요!</m.Text>
        <m.Box>공지 제목입니다.</m.Box>
        <m.Box>공지 제목입니다.</m.Box>

        <m.Button>
          <m.ButtonImage>
            <img src={`${process.env.PUBLIC_URL}/logo/plus.svg`} alt="icon" />
          </m.ButtonImage>
          <m.ButtonText>더 많은 알림 확인하기</m.ButtonText>
        </m.Button>
      </m.Body>
    </m.Container>
  );
};

export default Mypage;
