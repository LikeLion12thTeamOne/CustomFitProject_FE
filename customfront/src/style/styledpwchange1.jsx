import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 393px;
  height: 924px;
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
  text-align: left;
  padding-left: 25px;
  padding-top: 80px;
  color: #000;
  font-family: "Gothic A1";
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Name = styled.div`
  text-align: left;
  position: absolute;
  left: 169px;
  top: 121px;
  color: #000;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;


export const Kit = styled.div`
  position: absolute;
  top: 200px;
  left: 50px;
  color: #000;
  font-family: "Gothic A1";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 30px */
  letter-spacing: -0.22px;
`;

export const Check = styled.div`
  position: absolute;
  top: 
  left: 
  color: #000;
  font-family: "Gothic A1";
  font-size: 13px;
  font-style: normal;
  font-weight: 300;
  line-height: 150%; /* 19.5px */
  letter-spacing: -0.143px;
`;


export const Body = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  width: 393px;
  height: 275px;
  flex-shrink: 0;
  background: #FFF;
`;

export const Text = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  width: 308px;
  height: 20px;
  flex-shrink: 0;
  color: #000;
  font-family: "Gothic A1";
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 22.5px */
  letter-spacing: -0.165px;
`;

export const Box = styled.div`
  margin-top: 10px;
  margin-left: 30px;
  width: 345px;
  height: 50px; 
  flex-shrink: 0;
  border-radius: 10px;
  background: #FFF;
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;