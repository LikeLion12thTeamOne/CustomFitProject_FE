import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 393px;
  height: 1093px;
  margin-top: 0px;
  background: #fff;
  text-align: center;
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
  padding-top: 120px;
  color: #000;
  font-family: "Gothic A1";
  font-size: 25px;
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
  justify-content: flex-start;
  align-items: flex-start;
  text-align: flex-start;
  width: 393px;
  height: 700px;
  flex-shrink: 0;
  background: #fffde8;
`;

export const Wbox = styled.div`
  position: relative;
  display: flex;
  margin-top: 30px;
  margin-left: 28px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 338px;
  height: 279px;
  flex-shrink: 0;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.66);
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  color: #000;
  font-family: "Gothic A1";
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  height: 55px;
`;

export const Stext = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  color: #000;
  text-align: center;
  font-family: "Gothic A1";
  font-size: 15px;
  font-style: normal;
  font-weight: 275;
  line-height: normal;
  width: 84px;
  height: 21px;
  flex-shrink: 0;
`;

export const Ntext = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  color: #edd719;
  text-align: center;
  font-family: "Gothic A1";
  font-size: 100px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  width: 137px;
  height: 103px;
  flex-shrink: 0;
  margin-top: -20px;
`;

export const Etext = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  color: #000;
  text-align: center;
  font-family: "Gothic A1";
  font-size: 13px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  width: 284px;
  height: 16px;
  flex-shrink: 0;
  margin-top: 60px;
`;

export const Sbox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 393px;
  height: 700px;
  flex-shrink: 0;
  background: pink;
  /*background: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 37%, #FFF 69%, #FFF 100%);*/
`;

export const Otext = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #000;
  text-align: center;
  font-family: "Gothic A1";
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: 350px;
  height: 40px;
  flex-shrink: 0;
  margin-top: 50px;
  margin-left: 20px;
`;

export const Button2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: -20px;
  height: 200px;
  width: 393px;
  gap: 15px;
`;

export const Explain = styled.div`
  display: flex;
  color: #000;
  font-family: "Gothic A1";
  font-size: 11px;
  font-style: normal;
  font-weight: 250;
  line-height: normal;
  width: 330px;
  height: 26px;
  flex-shrink: 0;
  margin-top: 10px;
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
  text-align: center;
  span {
    margin-top: 30px;
    height: 70%;
    width: 80%;
  }
`;

export const Star = styled.div`
  display: flex;
  margin-top: 20px;
  weight: 393px;
  height: 50px;
  cursor: pointer;
  gap: 10px;
`;

export const Button = styled.div`
  margin-top: 50px;
  margin-left: 30px;
  width: 298px;
  height: 39px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #f2f2f2;
  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;

export const ButtonText = styled.div`
  margin-top: 10px;
  color: #000;
  text-align: center;
  font-family: "Gothic A1";
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
