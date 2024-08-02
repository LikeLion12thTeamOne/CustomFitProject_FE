import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import * as v from "../style/styledreviewcheck2";

const Reviewcheck2 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { product, review, selectedImage } = location.state || {}; // selectedImage 추가
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    const fetchProductData = async () => {
      if (product) {
        try {
          const token = localStorage.getItem('token');
          if (!token) {
            throw new Error("No token found");
          }

          const config = {
            headers: {
              'Authorization': `Token ${token}`
            }
          };

          const response = await axios.get(`http://127.0.0.1:8000/myPage/recommended-products/${product.id}/`, config);
          setProductData(response.data);
        } catch (err) {
          if (err.message === "No token found") {
            alert("토큰이 없습니다. 로그인이 필요합니다.");
            navigate("/login");
          } else {
            console.error("An error occurred:", err.message);
          }
        }
      }
    };

    fetchProductData();
  }, [product, navigate]);

  const goMain = () => {
    navigate(`/`);
  };

  const goReviewcheck3 = () => {
    if (product && review) {
      navigate(`/Reviewcheck3`, { state: { product, review, selectedImage } }); // selectedImage 추가
    } else {
      alert("제품 정보나 리뷰가 없습니다.");
    }
  };

  if (!product || !review) {
    return <div>Error: 제품 정보나 리뷰가 없습니다.</div>;
  }

  return (
    <v.Container>
      <v.Header>
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
        <v.Border>
          <div></div>
        </v.Border>
      </v.Header>

      <v.Ybox>
        <v.Top>[{product.name}]</v.Top>
        <v.Click>
          <img
            id="review-image"
            src={selectedImage === 'good'
              ? `${process.env.PUBLIC_URL}/logo/good2.png`
              : selectedImage === 'bad'
              ? `${process.env.PUBLIC_URL}/logo/bad2.png`
              : `${process.env.PUBLIC_URL}/logo/default.png`} // 선택된 이미지가 없을 경우 기본 이미지
            alt={selectedImage || 'default'}
            width="95px"
          />
        </v.Click>
      </v.Ybox>

      <v.Body>
        <v.Box>
          <v.Box2>
            <v.Keywordd key={product.id}>
              <v.SmallBox5>
                <span style={{ fontSize: "13px" }}>{review}</span>
              </v.SmallBox5>
            </v.Keywordd>
          </v.Box2>
        </v.Box>

        <v.Button onClick={goReviewcheck3}>
          <v.ButtonText>리뷰 수정하기</v.ButtonText>
        </v.Button>
      </v.Body>
    </v.Container>
  );
};

export default Reviewcheck2;
