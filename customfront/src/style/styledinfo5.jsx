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
  #back2 {
    margin-top: 5px;
    cursor: pointer;
  }
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
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  margin-left: 30px;
  cursor: pointer;
  width: 334px;
  height: 45px;
  flex-shrink: 0;
  border-radius: 30px;
  background: linear-gradient(90deg, #fffba6 0%, #a7faf0 100%);
  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.25);
`;

export const ButtonText = styled.div`
  margin-top: 12px;
  color: #000;
  text-align: center;
  font-family: "Gothic A1";
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 22.5px */
  letter-spacing: -0.165px;
`;
