import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 393px;
  height: 924px;
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
    position: absolute;
    margin-top: 8px;
    cursor: pointer;
  }
  #alarm {
    position: absolute;
    margin-top: 3px;
    margin-left: 305px;
    cursor: pointer;
  }
  #menu {
    position: absolute;
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

export const Keyword = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start; 
  width: 343px;
  height: 105px;
  top: 156px;
  left: 24px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #FFF9C2;
  position: absolute;
  padding: 10px;
`;

export const Small = styled.div`
  padding: 5px 13px;
  flex-shrink: 0;
  border-radius: 30px;
  background: linear-gradient(180deg, #E1E1E1 0%, #FFFBA6 100%);
  font-size: 13px;
  z-index: 2;
`;

export const SmallOne = styled(Small)``;
export const SmallTwo = styled(Small)``;
export const SmallThree = styled(Small)``;
export const SmallFour = styled(Small)``;
export const SmallFive = styled(Small)``;

export const Wrap = styled.div`
  display: flex;
  justify-content: flex-start; 
  align-items: flex-start; 
  width: 300px;
  height: 40px;
  top: 174px;
  left: 175px;
  flex-shrink: 0;
  border-radius: 10px;
  position: absolute;
`;

export const Wrap2 = styled.div`
  display: flex;
  justify-content: flex-start; 
  align-items: flex-start; 
  width: 343px;
  height: 40px;
  top: 174px;
  left: 175px;
  flex-shrink: 0;
  border-radius: 10px;
  position: absolute;
`;

export const Kit = styled.div`
  height: 10px;
  flex-shrink: 0;
  text-align: left;
  margin-top: 400px;
  margin-left: 30px;
  font-family: "Gothic A1";
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Check = styled.div`
  width: 165px;
  height: 25px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #F2F2F2;
  padding: 20px 0px 20px 0px;
  text-align: center;
  margin-top: 13px;
  margin-left: 24px;
  font-family: "Gothic A1";
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Write = styled.div`
  width: 165px;
  height: 25px;
  flex-shrink: 0;
  border-radius: 10px;
  background: linear-gradient(90deg, rgba(190, 255, 224, 0.45) 0%, #FFF9C2 100%);
  padding: 20px 0px 20px 0px;
  text-align: center;
  top: 503px;
  left: 204px;
  position: absolute;
  font-family: "Gothic A1";
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  width: 393px;
  height: 275px;
  flex-shrink: 0;
  background: #FFF9C2;
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
  margin-left: 15px;
  width: 345px;
  height: 50px; 
  flex-shrink: 0;
  border-radius: 10px;
  background: #FFF;
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.25);
  text-align: left;
  display: flex; /* 자식 요소를 수평으로 정렬하기 위해 flex 사용 */
  align-items: center; /* 수직 가운데 정렬 */
  padding-left: 15px;
  cursor: pointer;
`;

export const Button = styled.div``;

export const ButtonImage = styled.div`
  position: absolute;
  top: 800px;
  left: 113px;
`;

export const ButtonText = styled.div`
  position: absolute;
  top: 805px;
  left: 142px;
  color: #000;
  text-align: center;
  font-family: "Gothic A1";
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 22.5px */
  letter-spacing: -0.165px;
  cursor: pointer;
`;
