import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 393px;
  height: 852px;
  margin-top: 0px;
  background: #fff;
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
  border-bottom: 2px solid black;
  width: 393px;
  padding-bottom: 2px;
`;

export const Ybox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
  width: 393px;
  height: 200px;
  flex-shrink: 0;
  background: #fff;
`;

export const Top = styled.div`
  text-align: left;
  margin-left: 25px;
  margin-top: 80px;
  color: #000;
  font-family: "Gothic A1";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Text = styled.div`
  text-align: left;
  margin-left: 25px;
  color: #000;
  font-family: "Gothic A1";
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  span {
    font-size: 15px;
    font-weight: 600;
  }
`;

export const Keywordd = styled.div`
  margin-left: 20px;
  margin-top: 30px;
  display: flex;
  justify-content: center;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0px;
  width: 393px;
  height: 110px;
`;

export const Box = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 393px;
  height: 490px;
  flex-shrink: 0;
  background: none;
`;

export const Box2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 370px;
  height: 444px;
  overflow-x: auto;
  scrollbar-width: none;
  background-color: none;
  border: none;
`;

export const SmallBox5 = styled.div`
  position: relative;
  display: flex;
  margin-right: 20px;
  margin-top: -20px;
  justify-content: center;
  align-items: center;
  width: 339px;
  height: 61px;
  flex-shrink: 0;
  border-radius: 15px;
  border: 0.3px solid #000;
  background: ${(props) => (props.isClicked ? "#fffba6" : "#fff")};
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  filter: ${(props) =>
    props.isClicked ? "drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25))" : "none"};
  transition: all 0.1s ease;
  span {
    margin-left: 10px;
  }
`;

export const Button = styled.div`
  margin-top: 15px;
  cursor: pointer;
`;

//메뉴바 스타일
export const Backdrop = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 393px;
  height: 852px;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  transform: translate(-50%, -50%);
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 80px;
  left: 80%;
  transform: translateX(-50%);
  width: 50px;
  height: 314px;
  border-radius: 50px;
  background: #fff;
  box-shadow: 0px 0px 8px 8px #544c4c;
  padding: 20px;
  z-index: 11;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  #mypage {
    margin-top: 15px;
    margin-right: 7px;
  }
  #myreview {
    margin-top: 107px;
    margin-right: 7px;
  }
  #mainpage {
    margin-top: 200px;
    margin-right: 7px;
  }
  #logout {
    margin-top: 2px;
    margin-right: 2px;
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
`;
