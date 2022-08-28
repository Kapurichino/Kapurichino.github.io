import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChartPie, faClipboardQuestion, faFlag, faHeadphones, faHouseChimney,  } from "@fortawesome/free-solid-svg-icons";
import app from '../App.module.css';
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const IconWrapper = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`


function Menubar(){
    let navigate = useNavigate();
    return(
      <div className={app.menubar}>
        <div className={app.textIcon} onClick={()=>{navigate('/')}}>
          <IconWrapper>
            <FontAwesomeIcon className={app.menuIcon} icon={faHouseChimney}/>
          </IconWrapper>  

            <span className={app.menuText}>home</span>

        </div>
        <div className={app.textIcon} onClick={()=>{navigate('/services')}}> 
          <IconWrapper> 
            <FontAwesomeIcon className={app.menuIcon} icon={faHeadphones}/>
          </IconWrapper>
          <span className={app.menuText}>Services</span>
        </div>
        <div className={app.textIcon} onClick={()=>{navigate('/info')}}> 
          <IconWrapper> 
            <FontAwesomeIcon className={app.menuIcon} icon={faClipboardQuestion}/>
          </IconWrapper>
          <span className={app.menuText}>Info</span>
        </div>
        <div className={app.textIcon} onClick={()=>{navigate('/specification')}}>  
          <IconWrapper>
            <FontAwesomeIcon className={app.menuIcon} icon={faChartPie}/>
          </IconWrapper>
          <span className={app.menuText}>Stats</span>
        </div>
        {/* <div className={app.textIcon} onClick={()=>{navigate('/posts')}}>  
          <FontAwesomeIcon className={app.menuIcon} icon={faBookBookmark}/>
          <span className={app.menuText}>Posts</span>
        </div> */}
      </div>
    )
  }

  export default Menubar