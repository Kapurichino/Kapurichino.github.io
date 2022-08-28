import React, { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/components/effect-coverflow/effect-coverflow.scss';
import app from '../App.module.css';


import SwiperCore, { Navigation, Pagination, EffectCoverflow } from "swiper";
SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

// SwiperCore.use([EffectCoverflow, Pagination, Navigation ]);
const post =  [{
    id : 1,
    title: "FactoryUI",
    description:
      "공장하면 떠오르는 색과 오브젝트를 표현하였습니다.",
  },
  {
    id : 2,
    title: "Universe",
    description:
      "어두운 테마의 우주를 생각하며 만들었습니다.",
  },
  {
    id : 3,
    title: "youtubePreference",
    description:
      "Youtube API를 이용하여 사용자가 원하는 키워드의 동영상을 추출하고자 합니다.",
  }]


function Posts() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className={app.whiteBox}>
      <div className={app.postContainer}>
        <div>
          <h1>Project</h1>
        </div>
        <div>
          <Swiper
            modules={[EffectCoverflow, Pagination, Navigation]}
            effect={"coverflow"}
            centeredSlides={true}
            spaceBetween={20}
            slidesPerView={"auto"}
            pagination={{clickable:true}}
            scrollbar={{draggable:true}}
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
              0:{
                slidesPerView:1,
              },
              960:{
                slidesPerView: 3,
                spaceBetween:10
              }
            }}
            >
              {post.map( post=> (
                <SwiperSlide key={post.id} className="slide" >
                  <div style={{width:'100%'}}   >
                    <div>
                      <img src={process.env.PUBLIC_URL+`./imgs/ch${post.id}.webp`} alt="" className={app.postImage} onClick={()=>{
                    window.open(`https://kapurichino.github.io/${post.title}/`, '_blank')
                  }}/>
                    </div>
                    <div style={{width:'100%', height:'300px', marginBottom:'10px'}}>
                      <h5 style={{overflow:"hidden", width:'100%', height:'6vh'}}>{post.title}</h5>
                      <p className="post-testimonial" style={{overflow:"hidden", width:'100%', height:'29vh'}}>
                        <i>{post.description}</i>
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
    </div> 
  )
}


export default Posts