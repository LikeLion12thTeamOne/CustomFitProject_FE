import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
  margin: 0 auto;
  width: 393px;
  height: 852px;
  background: #FFF9C2;
  #logintitle{
  margin-top: 110px;
  margin-left: 85px;
  }
`;


export const Title = styled.div`
  positon: relative;
  width: 333px;
  height: 347px;
  flex-shrink: 0;
  padding-top: 100px;
  border-radius: 347px;
  background: rgba(190, 255, 224, 0.56);
  filter: blur(50px);
  margin-left: 30px;
  margin-top: 100px;
`;

export const Box= styled.div`=
  padding-top: 100px;
  margin-top: 100px;
  width: 333px;
  height: 347px;
  flex-shrink: 0;
  background: trnasparent;
`;


export const InsertA = styled.div`
  width: 333px;
  height: 46px;
  position: absolute;
  left:30px;
  top: 540px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1.5px solid #000;
  background: #fff;
  #Id {
    width: 300px;
    height: 21.606px;
    flex-shrink: 0;
    text-align: left;
    margin-top: 10px;
    color: #000;
    font-family: "Gothic A1";
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    border: none;
    background: none;
  }
`;

export const InsertB = styled.div`
  width: 333px;
  height: 46px;
  position: absolute;
  left:30px;
  top: 605px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1.5px solid #000;
  background: #fff;
  }
  #Pw {
    width: 300px;
    height: 21.606px;
    flex-shrink: 0;
    text-align: left;
    margin-top: 10px;
    color: #000;
    font-family: "Gothic A1";
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    border: none;
    background: none;
  }
`;

export const LoginBox = styled.div`
  #LoginText {
    color: #000;
    margin-top: 5px;
    text-align: center;
    font-family: "Gothic A1";
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  width: 150px;
  height: 39px;
  position: absolute;
  left: 205px;
  top: 700px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1.5px solid #000;
  background: #a7faf0;
`;

export const MembershipBox = styled.div`
  #MembershipText {
    color: #000;
    margin-top: 5px;
    text-align: center;
    font-family: "Gothic A1";
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  width: 150px;
  height: 39px;
  position: absolute;
  left: 30px;
  top: 700px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1.5px solid #000;
  background: #fff;
`;