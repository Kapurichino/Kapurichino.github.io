
import app from '../App.module.css'
import { useSelector} from 'react-redux'
import { useNavigate } from 'react-router'



// title, date, descryption 

function Main(){
    let posts = useSelector((state)=>{return state.post});
    let navigate = useNavigate();
    return(
            <>
                <div className={app.whiteBox}>
                  <h4>전체글</h4>
                  {posts.map((a, i)=>{
                    return(
                      <div className={app.post} onClick={()=>{navigate('/contact')}}>
                        <img src={process.env.PUBLIC_URL + './imgs/bg.jpg'} style={{float:'left'}}/>
                        <div style={{float:'right'}}>
                          <h3>{posts[i].data}</h3>
                          <h2>{posts[i].title}</h2> 
                          <p>{posts[i].description}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
            </>
             
    )
  }


 {/* <div className={app.whiteBox}>
                <CustomDropDown/>
              </div> */}

export default Main