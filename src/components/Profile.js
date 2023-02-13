import app from '../App.module.css'
import {Row, Col} from 'react-bootstrap'

function Profile(){
    return(
    <div className={app.whiteBox}>
                  <div className={app.profileContainer}>
                    <div className={app.flipOuter}>
                      <div className={app.flipInner}>
                        <div className={app.front}>
                          <img src={process.env.PUBLIC_URL + '/imgs/cat.gif'} className={app.front}/>
                        </div>
               
                        <div className={app.back}>
                          <h4 style={{fontSize:"100%"}}>Kapurichino<br/>Front-End Developer</h4>
                        </div>
                      </div>
                    </div>
                    <p className={app.introduce}>Where there’s a will,<br/>there’s a way.</p>  
                  </div>
                  
              </div>
    )
}

export default Profile