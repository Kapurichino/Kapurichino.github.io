import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "swiper/components/effect-coverflow/effect-coverflow.scss";
import app from "../App.module.css";
import "./Posts.scss";

import SwiperCore, { Navigation, Pagination, EffectCoverflow } from "swiper";
import styled from "styled-components";
SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

// SwiperCore.use([EffectCoverflow, Pagination, Navigation ]);
const post = [
  {
    id: 1,
    title: "FactoryUI",
    url: "https://github.com/Kapurichino/FactoryUI",
    description: "공장하면 떠오르는 색과 오브젝트를 표현하였습니다.",
  },
  {
    id: 2,
    title: "Universe",
    url: "https://github.com/Kapurichino/Universe",
    description: "어두운 테마의 우주를 생각하며 만들었습니다.",
  },
  {
    id: 3,
    title: "YoutubePreference",
    url: "https://github.com/Kapurichino/youtubePreference",
    description:
      "Youtube API를 이용하여 사용자가 원하는 키워드의 동영상을 추출하고자 합니다.",
  },
  {
    id: 4,
    title: "GlobalTime",
    url: "https://github.com/CAU-MobileApp/GlobalTime",
    description: "Analog Clock의 감성을 챙긴 Global Time 어플리케이션입니다.",
  },
  {
    id: 5,
    title: "YSIP",
    url: "https://github.com/2022-cau-capstone-team02/web",
    description: "블록체인 상에서 작동하는 유튜브 지분 투자 플랫폼입니다.",
  },
];

const Content = styled.div`
  margin-top: 30px;
  width: 100%;
`;

const Title = styled.h5`
  text-align: center;
  width: 100%;
  font-size: 2rem;
`;

const Text = styled.p`
  margin-top: 30px;
  padding-left: 10%;
  padding-right: 10%;
  overflow: "hidden";
  font-size: 1rem;
  min-height: 100px;
  display: flex;
  justify-content: center;
  opacity: 0.6;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 0%;
  display: flex;
  justify-content: center;
`;

const SwiperContainer = styled.div`
  width: 100%;
  height: 100%;
`;

function Posts() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className={app.whiteBox}>
      <div className={app.postContainer}>
        <h1>Project</h1>
        <Swiper
          effect={"coverflow"}
          centeredSlides={true}
          spaceBetween={20}
          slidesPerView={"auto"}
          pagination={{ clickable: true }}
          grabCursor={true}
          loop={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
        >
          {post.map((post) => (
            <SwiperSlide key={post.id} className="slide">
              <SwiperContainer>
                <ImageWrapper>
                  <img
                    src={process.env.PUBLIC_URL + `./imgs/ch${post.id}.webp`}
                    alt=""
                    onClick={() => {
                      window.open(post.url, "_blank");
                    }}
                  />
                </ImageWrapper>
                <Content>
                  <Title>{post.title}</Title>
                  <Text style={{ overflow: "hidden" }}>
                    <i>{post.description}</i>
                  </Text>
                </Content>
              </SwiperContainer>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Posts;
