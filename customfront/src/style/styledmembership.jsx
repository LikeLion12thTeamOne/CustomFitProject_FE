import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 393px;
  height: 1100px;
  background: #fff;
`;

export const Header = styled.div`
  #logo {
    position: absolute; 
    margin-right: -330px;
    margin-top: 3px;
  }
`;


export const Top = styled.div`
  text-align: center;
  padding-top: 20px;
  color: #000;
  font-family: "Gothic A1";
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  span {
    color: #000;
    font-family: "Gothic A1";
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  width: 393px;
  height: 900px;
`;

export const Label = styled.div`
  display: flex;
  margin-top: 15px;
  margin-left: 15px;
  color: #000;
  font-size: 18px;
  font-weight: 500;
  padding-left: 20px;
`;

export const Label2 = styled.div`
  display: flex;
  margin-top: 50px;
  color: #000;
  font-size: 18px;
  font-weight: 500;
  padding-left: 20px;
`;

export const InputBlank = styled.div`
  margin-top: 13px;
  margin-left: 30px;
  margin-bottom: 25px;
  width: 328px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.25);
  input {
    border: none;
    outline: none;
    width: 273px;
    margin-top: 15px;
    margin-left: -30px;
    color: #000;
    font-family: "Gothic A1";
    font-size: 13px;
    font-style: normal;
    font-weight: 250;
    line-height: 150%; /* 19.5px */
    letter-spacing: -0.143px;
    background: none;
  }
`;

export const Idbutton = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 45px;
  margin-left: 290px;
  width: 65px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #535151;
  span {
    margin-top: 15px;
  }
`;


export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-top: 15px;
  margin-left: 30px;
  width: 330px;
  height: 180px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 0.3px solid #000;
`;

export const BottomText = styled.div`
  display: flex;
  flex-direction: row; 
  align-items: center;
  text-align: left;
  background: none;
  margin-bottom: 20px;
  margin-top: 5px;
  margin-left: 20px;

  input {
    position: relative; 
    margin: 0 10px 0 0; 
  }
`;

export const Button = styled.button`
  margin-top: 100px;
  width: 334px;
  height: 45px;
  flex-shrink: 0;
  border-radius: 10px;
  background: linear-gradient(90deg, #edd719 0%, #a7faf0 100%);
  box-shadow: 0px 0px 4px 2px rgba(76, 75, 75, 0.25);
  cursor: pointer;
  border: none;
`;

export const Text = styled.div`
  display: flex;
  position: relative;
  color: #000;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-family: "Gothic A1";
  font-size: 15px;
  font-style: normal;
  font-weight: 550;
  line-height: normal;
`;

export const Error = styled.div`
  color: red;
  font-size: 2px;
  margin-top: 0.5rem;
`;


