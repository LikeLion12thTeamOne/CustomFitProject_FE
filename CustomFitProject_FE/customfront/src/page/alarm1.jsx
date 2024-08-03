import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as q from "../style/styledalarm1";

//1
//2
//3
//4
//5
const Alarm1 = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const goMain = () => {
    navigate(`/`);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Box2의 아이템 상태 관리
  const box2Items = [
    { id: 1, text: "공지 제목입니다."},
    { id: 2, text: "공지 제목입니다."},
    { id: 3, text: "공지 제목입니다." },
    { id: 4, text: "공지 제목입니다." },
    { id: 5, text: "공지 제목입니다." },
    { id: 6, text: "공지 제목입니다." },
    { id: 7, text: "공지 제목입니다." },
    { id: 8, text: "공지 제목입니다." },
    { id: 9, text: "공지 제목입니다." },
    { id: 10, text: "공지 제목입니다." },
  ];

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
            {box2Items.map((item) => (
              <q.Keywordd key={item.id}>
                <q.SmallBox5>
                  <span style={{fontSize: "13px" }}>{item.text}</span>
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
