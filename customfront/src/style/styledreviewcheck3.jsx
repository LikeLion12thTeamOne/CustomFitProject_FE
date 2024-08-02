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
  padding-top: 90px;
  color: #000;
  font-family: "Gothic A1";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const InputBlank = styled.div`
  display: flex;
  margin-top: 60px;
  margin-left: 18px;
  width: 356px;
  height: 120px;
  flex-shrink: 0;
  outline: 1.5px dotted #000;
  border-radius: 7px;
  background: #fff;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.25);
  input {
    background: none;
    border: none;
    outline: none;
    width: 273px;
    margin-left: 10px;
    margin-top: -75px;
    color: #000;
    font-family: "Gothic A1";
    font-size: 15px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
  }

  #ylogo {
    margin-left: 10px;
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
  margin-top: 40px;
  width: 393px;
  height: 150px;
`;


export const Under = styled.div`
  text-align: center;
  padding-top: 60px;
  color: #000;
  font-family: "Gothic A1";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
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
  margin-top: 50px;
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

export const ButtonTwo = styled.div`
  margin-top: 20px;
  margin-left: 30px;
  width: 85%;
  height: 30px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 0.5px solid #fff9c2;
  background: #F2F2F2;
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
