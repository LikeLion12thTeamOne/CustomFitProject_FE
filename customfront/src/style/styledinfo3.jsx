import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 393px;
  height: 852px;
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
  background: #fff;
`;

export const Top = styled.div`
  text-align: left;
  margin-left: 25px;
  margin-top: 80px;
  color: #000;
  font-family: "Gothic A1";
  font-size: 20px;
  font-weight: 400;
  line-height: normal;
`;

export const Text = styled.div`
  text-align: left;
  margin-left: 25px;
  color: #000;
  font-family: "Gothic A1";
  font-size: 15px;
  font-weight: 500;
  line-height: normal;
  span {
    font-size: 15px;
    font-weight: 600;
  }
`;

export const Keywordd = styled.div`
  display: flex;
  flex: 0 0 50%; 
  justify-content: center;
  align-items: center;
  margin: 10px;
`;


export const Box2 = styled.div`
  display: flex;
  flex-wrap: wrap; 
  justify-content: space-between;
  width: 100%;
`;



export const Body = styled.div`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  margin-top: 0px;
  width: 393px;
  height: 110px;
`;

export const Box = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 393px;
  height: 490px;
  background: none;
  margin-left: 5px;
`;

export const SmallBox5 = styled.div`
  width: 160px; 
  height: 162px;
  margin-bottom: 10px; 
  position: relative;
  display: flex;
  margin: 10px;
  justify-content: center;
  align-items: center;
  height: 162px;
  border-radius: 15px;
  border: 0.3px solid #000;
  background: ${(props) => (props.isClicked ? "#fffba6" : "#fff")};
  cursor: pointer;
  filter: ${(props) =>
    props.isClicked ? "drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25))" : "none"};
  transition: all 0.1s ease;
  text-align: center;

  span {
    margin-left: 10px;
  }
`;

export const SmallBox6 = styled(SmallBox5)``;

export const Button = styled.div`
  margin-top: 480px;
  cursor: pointer;
`;

export const ButtonText = styled.div`
  margin-top: 12px;
  color: #fff;
  text-align: center;
  font-family: "Gothic A1";
  font-size: 15px;
  font-weight: 500;
  line-height: normal;
`;
