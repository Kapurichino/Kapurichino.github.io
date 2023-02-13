import app from '../App.module.css';
import {Container, Row, Col, Table} from 'react-bootstrap';
import styled, { keyframes } from 'styled-components';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Image = styled.img`
    transition : all 1s;
    &:hover{

    }
`;

const Styledli = styled.li`
    font-size:20px;

`;
function Services(){
    return(
        <div className={app.whiteBox}>      
            <Container>
                <h1><b>이 사람은 이런 걸 합니다</b></h1>
                <Row>
                    <Col xs={12} sm={12} md={4}>
                        <img src={process.env.PUBLIC_URL+"./imgs/ch4.webp"} style={{borderRadius:"10px"}}/>
                    </Col>
                    <Col xs={12} sm={12} md={8}>
                        <ul>
                            <Styledli>웹디자인을 좋아합니다.</Styledli>
                            <Styledli>React 프레임워크를 이용한 웹 프로젝트를 하고 있습니다.</Styledli>  
                            <Styledli>Animation 제작에 진심입니다.</Styledli>
                            <Styledli>3D object control에 관심을 가지고 있습니다.</Styledli>
                            <Styledli>Three.js, Flutter를 공부중입니다.</Styledli> 
                            <Styledli>Typescript, Next.js를 공부할 예정입니다.</Styledli>
                        </ul>
                        <div>
                            <span>궁금하신점이 있으시다면 E-Mail 부탁드립니다</span>
                            <FontAwesomeIcon icon={faEnvelope} className={app.appIcon} style={{marginLeft:'10px', fontSize:'30px'}}
                            onClick={()=>{window.location ='mailto:bsw9698@gmail.com'}}/>
                        </div>
                    </Col>
                </Row>
                    
                <Row>

                </Row>
            </Container>
        </div>
    )
}

export default Services