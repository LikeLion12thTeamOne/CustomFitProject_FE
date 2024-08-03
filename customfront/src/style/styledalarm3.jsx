import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 393px;
  height: 852px;
  margin-top: 0px;
  background: #fffde7;
`;

export const Header = styled.div`
  position: fixed;
  background: #fff;
  width: 393px;
  height: 50px;
  z-index: 2;
  #back {
    cursor: pointer;
  }
  #logo {
    display: absolute;
    margin-top: 8px;
    cursor: pointer;
  }
  #alarm {
    display: absolute;
    margin-top: 3px;
    margin-left: 305px;
    cursor: pointer;
  }
  #menu {
    display: absolute;
    margin-top: 5px;
    margin-left: 343px;
    cursor: pointer;
  }
`;

export const Border = styled.div`
  position: fixed;
  border-bottom: 1.5px solid black;
  width: 393px;
  padding-bottom: 2px;
`;

export const Top = styled.div`
  position: relative;
  top: 106px;
  left: 20px;
  text-align: left;
  color: #000;
  font-family: "Gothic A1";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  #alarm3{
  margin-top: 470px;
  margin-left: 0px;

  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -10px;
  width: 393px;
  height: 110px;
`;

export const Ybox = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: flex-start;
  width: 393px;
  height: 240px;
  flex-shrink: 0;
`;

// 드롭다운 메뉴 스타일

export const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 393px;
  height: 852px;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 80px;
  right: 20px;
  width: 50px;
  height: 314px;
  flex-shrink: 0;
  border-radius: 50px;
  background: #fff;
  box-shadow: 0px 0px 8px 8px #544c4c;
  padding: 20px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  #mypage {
    margin-top: 30px;
    margin-right: 7px;
  }
  #myreview {
    margin-top: 130px;
    margin-right: 7px;
  }
  #mainpage {
    margin-top: 230px;
    margin-right: 7px;
  }
`;

export const DropdownItem = styled.button`
  background: none;
  border: none;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  color: #333;
  width: 100%;
  text-align: center;
  border-radius: 50%;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }
`;
