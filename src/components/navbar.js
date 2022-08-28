import { Collapse, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';
import  {faBars, faBookBookmark, faChartPie, faClipboardQuestion, faFlag, faHeadphones, faHouseChimney   } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from "styled-components";
import app from "../App.module.css";
import { useNavigate } from 'react-router';


const StyledNavbar = styled(Navbar)`
  width:100%;

  @media (max-width:992px){
    position:fixed;
    height:10vw;
    z-index:5; 
  }

`;

const StyledBrand = styled(Navbar.Brand)`

  @media (max-width:992px){
    display : none;
  }
`;


const NavContainer = styled.div`
  width:100%;
  @media (min-width:992px){
    display : none;
  }
`;

const TextIcon = styled(Col)`
  display:flex;
  align-items: center;
  justify-content: center;
  &:hover{
    cursor: pointer;
  }
`;

const MenuText = styled.span`
  display: inline-block;
  margin-left:10px;
  font-size: 3vw;
  @media (max-width:576px){
    font-size: 3vw;
  }
`;
const MenuIcon = styled(FontAwesomeIcon)`
  font-size: 3vw;
  @media (max-width:576px){
    font-size: 3vw;
  }
`;


function CustomNavbar() {
    const [open, setOpen] = useState(false);
    let navigate = useNavigate();
    return (
      <>
      <StyledNavbar bg="light" expand="xxl">
        <Container fluid>
          <StyledBrand className="ms-2" href="#" style={{fontSize:'20px'}} onClick={()=>{navigate('/')}}>Kapurichino's Github.Io</StyledBrand> 
          <NavContainer>
            <Row>
              <TextIcon onClick={()=>{navigate('/')}}>  
                <MenuIcon icon={faHouseChimney}/>
                <MenuText>home</MenuText>
              </TextIcon> 
              <TextIcon onClick={()=>{navigate('/services')}}>  
                <MenuIcon icon={faHeadphones}/>
                <MenuText>Services</MenuText>
              </TextIcon>
              <TextIcon onClick={()=>{navigate('/info')}}>  
                <MenuIcon icon={faClipboardQuestion}/>
                <MenuText>Info</MenuText>
              </TextIcon>
              <TextIcon onClick={()=>{navigate('/specification')}}>  
                <MenuIcon icon={faChartPie}/>
                <MenuText>Stats</MenuText>
              </TextIcon>
              {/* <TextIcon onClick={()=>{navigate('/posts')}}>  
                <MenuIcon icon={faBookBookmark}/>
                <MenuText>Posts</MenuText>
              </TextIcon> */}
            </Row>
          </NavContainer>   
        </Container>
      </StyledNavbar>
      </>
    );
  }



  export default CustomNavbar