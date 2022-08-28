import app from '../App.module.css'
import {Row, Col} from 'react-bootstrap'

function Profile(){
    return(
    <div className={app.whiteBox}>
                  <div className={app.profileContainer}>
                    <div className={app.flipOuter}>
                      <div className={app.flipInner}>
                        <img src={process.env.PUBLIC_URL + '/imgs/bg.webp'} style={{borderRadius: '30%'}} className={app.front}/>
                        <div className={app.back}>
                          <h4 style={{fontSize:"100%"}}>Front-End Developer</h4>
                        </div>
                      </div>
                    </div>
                    <p className={app.introduce}>떠오르는 프론트 엔드<br/>업계의 초신성</p>  
                  </div>
                  
              </div>
    )
}

export default Profile