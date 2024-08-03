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
  border-bottom: 1.5px solid black;
  width: 393px;
  padding-bottom: 2px;
`;

export const Top = styled.div`
  text-align: center;
  margin-top: 100px;
  color: #000;
  font-family: "Gothic A1";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Click = styled.div`
  position: relative;
  right: 2px;
  top: 20px;
  z-index: 1;
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
  margin-top: -10px;
  width: 393px;
  height: 110px;
`;

export const Ybox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 393px;
  height: 240px;
  flex-shrink: 0;
  background: #fff9c2;
`;

export const Box = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: -10px;
  width: 393px;
  height: 182px;
  flex-shrink: 0;
  background: none;
`;

export const Box2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 370px;
  height: 250px;
`;

export const SmallBox5 = styled.div`
  position: relative;
  display: flex;
  margin-left: -18px;
  width: 345px;
  height: 219px;
  flex-shrink: 0;
  font-size: 13px;
  background: #fff;
  box-shadow: 0px 0px 4px 1px #d9d9d9;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align:center;
  span{
  margin-top: 30px;
  height: 70%;
  width: 80%;
  }
`;



export const Button2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  height: 300px;
  width: 393px;
  gap: 15px;
`;

export const Button = styled.div`
  margin-top: 100px;
  margin-left: 30px;
  width: 85%;
  height: 30px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 0.5px solid #fff9c2;
  background: #fff9c2;
  box-shadow: 0px 0px 2px 2px rgba(173, 170, 170, 0.25);
  cursor: pointer;
`;

export const ButtonText = styled.div`
  margin-top: 5px;
  color: #000;
  text-align: center;
  font-family: "Gothic A1";
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
