import app from './App.module.css';
import CustomNavbar from './components/navbar';
import {Container, Row, Col} from 'react-bootstrap'
import CustomSearchBar from './components/searchbar';
import {useLocation, Routes, Route} from 'react-router-dom'
import Menubar from './components/Menubar.js';
import Specification from './pages/Specification.js';
import Services from './pages/Services.js';
import Posts from './pages/Posts.js';
// import Main from './pages/Main.js';
import Info from './pages/Info.js';
import './RouteAnimation.css';
import Progressbar from './components/Progressbar.js';
import Profile from './components/Profile.js';
import { faGithub} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Login from './components/Login.js';
// import {open} from './store.js';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useDispatch, useSelector } from 'react-redux';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function App() {
  const loginModal = useSelector(state=>state.loginModal);
  const dispatch = useDispatch();
  const location = useLocation();
  return (
    <div>
      <div style={{position:'relative'}}>
        {/* {loginModal==true ? <Login/> : ""} */}
        <Progressbar></Progressbar>
        <Menubar></Menubar>
        <CustomNavbar></CustomNavbar>
        <div className={app.mainBg}>
          <div className={app.mainText}>
            <p>카프리치노의 개발공간</p>
          </div>
        </div>
        <div className={app.mainContent}>
          <Container fluid style={{padding:'10px'}}>
            <Row>
              <Col xl={2} md={3}><div/></Col>
              <Col xl={8} md={8} xs={12}><CustomSearchBar/></Col>
              <Col xl={2} md={1}><div/></Col>
            </Row>
          </Container>
          <Container fluid>
            <Row>   
                  <Col xl={2} md={3}>
                    <Profile/>
                  </Col>
                  <Col xl={8} md={8}>
                    <TransitionGroup component={null}>
                      <CSSTransition key={location.key} classNames="fade" timeout={100}>
                        <Routes location={location}>
                          <Route path='/' element={<Posts/>}></Route>
                          <Route path='/services' element={<Services/>}></Route>
                          <Route path='/specification' element={<Specification/>}></Route>
                          <Route path='/info' element={<Info/>}></Route>
                        </Routes>
                      </CSSTransition>
                    </TransitionGroup>
                  </Col>
                  <Col xl={2} md={1}></Col>
            </Row>
          </Container>  
        </div>
        <div className={app.underBg}>
          {/* <div>
            <button className={app.loginButton} onClick={()=>dispatch(open())}><p><b>로그인</b></p></button>
          </div> */}
          <div style={{position:'absolute', padding:'1vw', left:'5%', bottom:'30%', color:'aliceblue'}}>
            <FontAwesomeIcon icon={faGithub} className={app.appIcon}
            style={{marginRight:'15px', fontSize:'40px'}}  
            onClick={()=>{window.open('https://github.com/Kapurichino', '_blank')}}/>
            <FontAwesomeIcon icon={faEnvelope} className={app.appIcon}
            style={{marginRight:'15px', fontSize:'40px'}}
            onClick={()=>{window.location ='mailto:bsw9698@gmail.com'}}/>
          </div>
          <div style={{textAlign:'center', position:'absolute', bottom:'5px', width:'100%', color:'aliceblue'}}>       
            <p>ⓒ 2022 Kapurichino. All Rights Reserved. </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}


export default App;
