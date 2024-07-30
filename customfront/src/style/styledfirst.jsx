import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 393px;
  height: 1800px;
  margin-top: 0px;
  background: #fff;
`;

export const Top = styled.div`
  text-align: left;
  color: #fff;
  font-family: "Gothic A1";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Keywordd = styled.div`
  margin-left: 20px;
  margin-top: 30px;
  display: flex;
  justify-content: center;
`;

export const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  margin-top: -100px;
  width: 393px;
  height: 465px;
  flex-shrink: 0;
  background: none;
`;

export const Body2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  margin-top: 290px;
  width: 393px;
  height: 465px;
  flex-shrink: 0;
  background: #fff;
  #text1 {
    margin-left: 100px;
    margin-bottom: 20px;
  }
  #text2 {
    margin-left: -70px;
  }
`;

export const Body3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 393px;
  height: 570px;
  flex-shrink: 0;
  background: #000;
`;

export const Sub = styled.div`
  justify-content: flex-start;
  margin-top: -210px;
  margin-left: -100px;
  flex-shrink: 0;
`;

export const Ybox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 393px;
  height: 200px;
  flex-shrink: 0;
  background: #fff;
`;

export const Box = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: -150px;
  width: 393px;
  height: 465px;
  flex-shrink: 0;
  background: linear-gradient(180deg, #fff 41.3%, #fffba6 94.8%);
`;

export const Title = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 393px;
  height: 300px;
  flex-shrink: 0;
  z-index: 2;
  #title {
    margin-top: 170px;
    margin-left: 60px;
  }
`;

export const Box2 = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  width: 393px;
  height: 215px;
  flex-shrink: 0;
  background: linear-gradient(180deg, #fffba6 50.5%, #fff 100%);
  border: none;
`;

export const Click = styled.div`
  position: absolute;
  right: 2px;
  top: 3px;
  cursor: pointer;
`;

export const News = styled.div`
  display: flex;
  margin-top: 20px;
  flex-direction: row;
  width: 340px;
  height: 280px; 
  gap: 7px; 
  overflow-x: auto; 
  overflow-y: hidden;
  scrollbar-width: none; 
  background-color: transparent; 
  border: none;

  &::-webkit-scrollbar {
    display: none; 
  }
`;

export const Card = styled.div`
  position: relative;
  margin-left: 5px;
  flex-shrink: 0;
  width: 100%; 
  height: 280px; 
  display: flex; 
  gap: 15px; 
  img {
    width: 100%; 
    height: auto; 
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
  z-index: 1;
  justify-content: center;
  align-items: center;
  margin-top: -270px;
  width: 334px;
  height: 45px;
  flex-shrink: 0;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.43);
  box-shadow: 0px 0px 4px 2px rgba(158, 154, 154, 0.25);
  cursor: pointer;
  #down {
    margin-top: 40px;
  }
`;

export const ButtonText = styled.div`
  margin-top: 13px;
  color: #000;
  text-align: center;
  font-family: "Gothic A1";
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const Bottom = styled.div`
  position: absolute;
  justify-content: center;
  align-items: center;
  margin-top: 320px;
  width: 340px;
  height: 45px;
  flex-shrink: 0;
  border-radius: 10px;
  background: linear-gradient(90deg, #edd719 0%, #a7faf0 100%);
  box-shadow: 0px 0px 4px 2px rgba(76, 75, 75, 0.25);
  cursor: pointer;
  #down {
    margin-top: 40px;
  }
`;

export const BottomText = styled.div`
  margin-top: 12px;
  color: #000;
  text-align: center;
  font-family: "Gothic A1";
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;