import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as q from "../style/styledalarm1";

const Alarm1 = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [notices, setNotices] = useState([]);

  const goMain = () => {
    navigate(`/`);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/myPage/notices/');
        setNotices(response.data);
      } catch (error) {
        if (error.response) {
          // 서버가 응답했지만 상태 코드는 2xx 범위에 있지 않음
          console.error("Error response:", error.response);
          console.error("Status:", error.response.status);
          console.error("Data:", error.response.data);
        } else if (error.request) {
          // 요청이 만들어졌지만 응답을 받지 못함
          console.error("Error request:", error.request);
        } else {
          // 요청을 설정하는 중에 문제가 발생
          console.error("Error message:", error.message);
        }
        console.error("Error config:", error.config);
      }
    };

    fetchNotices();
  }, []);

  return (
    <q.Container>
      <q.Header>
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
          onClick={goMain}
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
            right: "8px",
            cursor: "pointer",
          }}
          onClick={toggleMenu}
        />
        <q.Border>
          <div></div>
        </q.Border>
      </q.Header>

      {isMenuOpen && (
        <>
          <q.Backdrop onClick={closeMenu} />
          <q.DropdownMenu>
            <q.DropdownItem onClick={() => navigate("/mypage")}>
              <img
                id="mypage"
                src={`${process.env.PUBLIC_URL}/logo/mypage.svg`}
                alt="mypage"
                style={{
                  position: "absolute",
                  top: "8px",
                  right: "8px",
                  cursor: "pointer",
                }}
                onClick={toggleMenu}
              />
            </q.DropdownItem>
            <q.DropdownItem onClick={() => navigate("/myreview")}>
              <img
                id="myreview"
                src={`${process.env.PUBLIC_URL}/logo/myreview.svg`}
                alt="myreview"
                style={{
                  position: "absolute",
                  top: "8px",
                  right: "8px",
                  cursor: "pointer",
                }}
                onClick={toggleMenu}
              />
            </q.DropdownItem>
            <q.DropdownItem onClick={goMain}>
              <img
                id="mainpage"
                src={`${process.env.PUBLIC_URL}/logo/mainpage.svg`}
                alt="mainpage"
                style={{
                  position: "absolute",
                  top: "8px",
                  right: "8px",
                  cursor: "pointer",
                }}
                onClick={toggleMenu}
              />
            </q.DropdownItem>
          </q.DropdownMenu>
        </>
      )}

      <q.Ybox>
        <q.Top>알림 확인하기</q.Top>
      </q.Ybox>

      <q.Body>
        <q.Box>
          <q.Box2>
            {notices.map((item) => (
              <q.Keywordd key={item.id}>
                <q.SmallBox5>
                  <span style={{ fontSize: "13px" }}>{item.title}</span>
                </q.SmallBox5>
              </q.Keywordd>
            ))}
          </q.Box2>
        </q.Box>
      </q.Body>
    </q.Container>
  );
};

export default Alarm1;

