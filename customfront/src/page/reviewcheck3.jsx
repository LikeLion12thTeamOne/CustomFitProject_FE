import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import * as i from "../style/styledreviewcheck3";

const Reviewcheck3 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { product, review } = location.state || {};
  const [newReview, setNewReview] = useState(review);

  const goMain = () => {
    navigate(`/`);
  };

  const goReviewcheck2 = () => {
    // reviewcheck2로 이동하며 현재 제품 정보와 수정된 리뷰를 전달
    if (product && newReview) {
      navigate(`/Reviewcheck2`, { state: { product, review: newReview } });
    } else {
      alert("제품 정보나 리뷰가 없습니다.");
    }
  };

  const handleReviewChange = (e) => {
    setNewReview(e.target.value);
  };

  const saveReview = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error("No token found");
      }

      const csrfTokenMatch = document.cookie.match(/csrftoken=([^;]*)/);
      const csrfToken = csrfTokenMatch ? csrfTokenMatch[1] : '';

      const config = {
        headers: {
          'Authorization': `Token ${token}`,
          'X-CSRFToken': csrfToken,
        }
      };

      const body = {
        "GNB": "G",
        "review": newReview
      };

      await axios.patch(`http://127.0.0.1:8000/myPage/recommended-products/${product.id}/edit/`, body, config);

      // 리뷰 저장 후 Reviewcheck1으로 이동하며 수정된 리뷰를 전달
      navigate(`/Reviewcheck1`, { state: { product, review: newReview } });
    } catch (err) {
      if (err.message === "No token found") {
        alert("토큰이 없습니다. 로그인이 필요합니다.");
        navigate("/login");
      } else {
        console.error("An error occurred:", err.message);
      }
    }
  };

  return (
    <i.Container>
      <i.Header>
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
        <i.Border>
          <div></div>
        </i.Border>
      </i.Header>

      <i.Top>리뷰 작성하기</i.Top>

      <i.Body>

        <i.Under>
          김세모님! <br />
          [{product.name}]은 어떠셨어요?
        </i.Under>

        <i.Button2>
          <img
            id="ylogo"
            src={`${process.env.PUBLIC_URL}/logo/good.svg`}
            alt="logo"
            width="65px"
          />
          <img
            id="ylogo"
            src={`${process.env.PUBLIC_URL}/logo/bad.svg`}
            alt="logo"
            width="65px"
          />
        </i.Button2>

        <i.InputBlank>
          <input
            type="text"
            value={newReview}
            onChange={handleReviewChange}
            placeholder="텍스트 리뷰를 작성해 주세요."
          />
        </i.InputBlank>

        <i.Button onClick={saveReview}>
          <i.ButtonText>저장하기</i.ButtonText>
        </i.Button>

        <i.ButtonTwo onClick={goReviewcheck2}>
          <i.ButtonText>수정 취소하기</i.ButtonText>
        </i.ButtonTwo>
      </i.Body>
    </i.Container>
  );
};

export default Reviewcheck3;
