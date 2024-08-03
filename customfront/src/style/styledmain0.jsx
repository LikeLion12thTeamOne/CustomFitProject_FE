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

export const Keyword = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const SmallBox = styled.div`
  display: inline-flex;
  margin-top: 15px;
  margin-left: 18px;
  padding: 5px 13px;
  flex-shrink: 0;
  border-radius: 30px;
  background: linear-gradient(180deg, #e1e1e1 0%, #fffba6 100%);
  font-size: 13px;
`;

export const InputBlank = styled.div`
  display: flex;
  align-items: center;
  margin-top: 25px;
  margin-left: 18px;
  width: 356px;
  height: 45px;
  flex-shrink: 0;
  border-radius: 50px;
  background: #fff;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.25);
  input {
    background: none;
    border: none;
    outline: none;
    width: 273px;
    margin-left: 5px;
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


export const SmallBox2 = styled.div`
  display: inline-flex;
  margin-left: 5px;
  margin-bottom: 20px;
  height: 25px;
  width: 79px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 0.5px solid #edd719;
  background: #fffde8;
  font-size: 10px;
  font-weight: 600;
  justify-content: center;
  align-items: center;
  text-align: center;
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
  margin-top: 60px;
  margin-left: 215px; 
  width: 393px;
  height: 400px;
`;

export const Box2 = styled.div`
  display: flex;
  flex-direction: row;
  width: 370px;
  height: 500px;
  gap: 7px;
  margin-left: -205px;
  overflow-y: auto;
  scrollbar-width: none;
  background-color: none;
  border: none;
`;

export const SmallBox5 = styled.div`
  position: relative;
  display: flex;
  margin-left: 10px;
  width: 299px;
  height: 362px;
  flex-shrink: 0;
  font-size: 13px;
  border-radius: 10px;
  background: #F2F2F2;
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Box = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 29px;
  width: 85%;
  height: 37px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 0px 4px 4px #f2f2f2;
`;


export const Button = styled.div`
  position: absolute;
  top: 724px;
  left: 13px;
  flex-shrink: 0;
  cursor: pointer;
`;

export const Buttontwo = styled.div`
  position: absolute;
  top: 724px;
  left: 205px;
  flex-shrink: 0;
  cursor: pointer;
`;