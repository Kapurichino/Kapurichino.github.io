# Kapurichino.github.io

## 목적

개인 블로그 운영을 위한 React 프레임 워크를 이용한 Github 블로그입니다.

## 구현 기능

### SPA(Single Page Application) *특정 url 처리*
참고 자료 :  [해결법](https://github.com/rafgraph/spa-github-pages)
[자료1](https://github.com/rafgraph/spa-github-pages)
[자료2](https://iamsjy17.github.io/react/2018/11/04/githubpage-SPA.html)   

특정 url 입력시 github 서버에서 인식하지 못하고 404.html을 반환시키는 점을 이용하여,
public 폴더내에 404.html을 생성하여 해당 url을 쿼리스트링으로 만들어 리다이렉션.
index.html에서 이를 해석하여 올바른 url로 만들고 react 코드 실행하게 수정.   
~~(이게 다 Github가 SPA를 지원 안해서 그럼)~~


## 구현 애니메이션

### 메뉴바
![bandicam_2022-07-31_15-14-32-421_AdobeExpress](https://user-images.githubusercontent.com/31788366/182013074-cf29965a-6e11-4733-a1bb-0c459a362863.gif)

### 페이지 스크롤 진행률 Progress Bar
![bandicam_2022-07-31_15-15-31-128_AdobeExpress](https://user-images.githubusercontent.com/31788366/182013084-bd0f372a-6f95-4607-8729-03c9be925881.gif)

### /Posts에서 Post를 터치로 넘기게 하는 슬라이드 구현
![bandicam_2022-08-04_12-36-37-316_AdobeExpress](https://user-images.githubusercontent.com/31788366/182757948-b531056a-80be-455a-888b-3cf48375dc1b.gif)

### Router 이동시 애니메이션 구현
![bandicam_2022-08-06_19-40-16-151_AdobeExpress](https://user-images.githubusercontent.com/31788366/183245713-4fa1b2fa-db9c-4bc1-a556-08c62013a8f8.gif)

## 구현 예정 기능

## INSTALL NPM

* @fortawesome/fontawesome-svg-core@6.1.1
* @fortawesome/free-brands-svg-icons@6.1.1
* @fortawesome/free-solid-svg-icons@6.1.1
* @fortawesome/react-fontawesome@0.2.0
* @reduxjs/toolkit@1.8.3
* @testing-library/jest-dom@5.16.4
* @testing-library/react@13.3.0
* @testing-library/user-event@13.5.0
* bootstrap@5.2.0
* chart.js@3.8.2
* react-bootstrap@2.4.0
* react-chartjs-2@4.3.1
* react-dom@18.2.0
* react-icons@4.4.0
* react-redux@8.0.2
* react-router-dom@6.3.0
* react-router@6.3.0
* react-scripts@5.0.1
* react@18.2.0
* swiper@6.8.4
* web-vitals@2.1.4
* sass@1.54.0
* styled-components@5.3.5
* react-transition-group@4.4.5



