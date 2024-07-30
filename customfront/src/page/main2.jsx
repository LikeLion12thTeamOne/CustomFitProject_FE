import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as l from "../style/styledmain2";

const Main2 = () => {
  const navigate = useNavigate();

  const goMain = () => {
    navigate(`/`);
  };

  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  // List2의 아이템 상태 관리
  const [list2Items] = useState([
    { id: 1, name: "상품명1", manufacturer: "제조사A", size: "Ng" },
    { id: 2, name: "상품명2", manufacturer: "제조사A", size: "Ng" },
    { id: 3, name: "상품명3", manufacturer: "제조사A", size: "Ng" },
    { id: 4, name: "상품명4", manufacturer: "제조사A", size: "Ng" },
    { id: 5, name: "상품명5", manufacturer: "제조사A", size: "Ng" },
    { id: 6, name: "상품명6", manufacturer: "제조사A", size: "Ng" },
    { id: 7, name: "상품명7", manufacturer: "제조사A", size: "Ng" },
    { id: 8, name: "상품명8", manufacturer: "제조사A", size: "Ng" },
    { id: 9, name: "상품명9", manufacturer: "제조사A", size: "Ng" },
    { id: 10, name: "상품명10", manufacturer: "제조사A", size: "Ng" },
    { id: 11, name: "상품명11", manufacturer: "제조사A", size: "Ng" }
  ]);

  // Box2의 아이템 상태 관리
  const [box2Items, setBox2Items] = useState([
    { id: 1, name: "과자 1" },
    { id: 2, name: "과자 2" },
    { id: 3, name: "과자 3" },
    { id: 4, name: "과자 4" },
    { id: 5, name: "과자 5" }
    //{ id: 6, name: "과자 6" }//
  ]);

  // Box2의 개별 아이템 삭제 함수
  const deleteItemFromBox2 = (id) => {
    setBox2Items(box2Items.filter(item => item.id !== id));
  };

  // Box2의 모든 아이템 삭제 함수
  const clearBox2Items = () => {
    setBox2Items([]);
  };

  return (
    <l.Container>
      <l.Header>
        <img
          id="back"
          src={`${process.env.PUBLIC_URL}/logo/backbtn.svg`}
          alt="back button"
          style={{
            position: "absolute",
            top: "8px",
            left: "8px",
            cursor: "pointer",
          }}
          onClick={() => navigate(-1)}
        />
        <img
          id="logo"
          src={`${process.env.PUBLIC_URL}/logo/ylogo.svg`}
          alt="logo"
          width="40px"
          onClick={goMain}
        />
        <img
          id="alarm"
          src={`${process.env.PUBLIC_URL}/logo/alarm.svg`}
          alt="alarm button"
          style={{
            position: "absolute",
            top: "8px",
            left: "8px",
            cursor: "pointer",
          }}
          onClick={() => navigate(-1)}
        />
        <img
          id="menu"
          src={`${process.env.PUBLIC_URL}/logo/menu.svg`}
          alt="menu button"
          style={{
            position: "absolute",
            top: "8px",
            left: "8px",
            cursor: "pointer",
          }}
          onClick={() => navigate(-1)}
        />
        <l.Border>
          <div></div>
        </l.Border>
      </l.Header>

      <l.Top>
        000님에게 맞는 <br />
        식품을 찾아볼까요?
      </l.Top>

      <l.Keyword>
        <l.SmallBox>#당뇨</l.SmallBox>
        <l.SmallBox>#체중감소</l.SmallBox>
        <l.SmallBox>#단백질이 좋아</l.SmallBox>
      </l.Keyword>

      <l.InputBlank>
        <img
          id="ylogo"
          src={`${process.env.PUBLIC_URL}/logo/ylogo.svg`}
          alt="logo"
          width="30px"
        />
        <input type="text" placeholder="검색어를 입력하세요." />
        <img
          id="search"
          src={`${process.env.PUBLIC_URL}/logo/search.svg`}
          alt="search button"
          onClick={goMain}
        />
      </l.InputBlank>

      <l.List>
        <l.Keywordd>
          <l.SmallBox2>상품명</l.SmallBox2>
          <l.SmallBox2>제조사</l.SmallBox2>
          <l.SmallBox2>용량</l.SmallBox2>
          <l.SmallBox2>선택하기</l.SmallBox2>
        </l.Keywordd>

        <l.List2>
          {list2Items.map((item) => (
            <l.Keywordd key={item.id}>
              <l.SmallBox3>{item.name}</l.SmallBox3>
              <l.SmallBox3>{item.manufacturer}</l.SmallBox3>
              <l.SmallBox3>{item.size}</l.SmallBox3>
              <l.SmallBox4>
                <l.Checkborder>
                  <l.Check isChecked={isChecked} onClick={toggleCheckbox}>
                    {isChecked && "\u2714"}
                  </l.Check>
                </l.Checkborder>
              </l.SmallBox4>
            </l.Keywordd>
          ))}
        </l.List2>
      </l.List>

      <l.Kit>맞춤 건강 키트</l.Kit>

      <l.Body>
        <l.Box>
          <l.Box2>
            {box2Items.map((item) => (
              <l.Keywordd key={item.id}>
                <l.SmallBox5>
                  <span>{item.name}</span>
                  <l.DelButton>
                    <img
                      id="del"
                      src={`${process.env.PUBLIC_URL}/logo/delbtn.svg`}
                      alt="delbutton"
                      width="21px"
                      height="22"
                      onClick={() => deleteItemFromBox2(item.id)}  // 개별 아이템 삭제
                    />
                  </l.DelButton>
                </l.SmallBox5>
              </l.Keywordd>
            ))}
          </l.Box2>
          <l.Icon>
            <img
              id="trash"
              src={`${process.env.PUBLIC_URL}/logo/trash.svg`}
              alt="trash"
              width="21px"
              height="22"
              onClick={clearBox2Items}  // Box2 아이템 전체 삭제
            />
          </l.Icon>
        </l.Box>
        <l.Button onClick={goMain}>
          <l.ButtonText>비교하기</l.ButtonText>
        </l.Button>
      </l.Body>
    </l.Container>
  );
};

export default Main2;