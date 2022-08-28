// import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import login from '../App.module.css';
// import { close } from '../store.js';


// export default function Login(){
//     const [idInput, setIdInput] = useState("");
//     const [pwInput, setPwInput] = useState("");
//     const dispatch = useDispatch();
//     const loginCheck = useSelector(state=>state.loginCheck);

// return( 
//     <div>
//         <div style={{zIndex:"10", position:'absolute', width:'100%', height:'100%', backgroundColor:'black', opacity:'0.3'}}></div>
//         <form name="person_info" style={{position:"fixed", zIndex:"10", width:'300px', height:'300px', margin:'0 auto',left:'0', right:'0', top:"30vh"}}>
//             <fieldset className={login.whiteBox} style={{width:"100%", height:"100%"}}>
//                 <div>
//                     <button style={{border:'none', background:'none', fontSize:'30px'}} onClick={()=>dispatch(close())}><FontAwesomeIcon icon={faArrowLeftLong}/></button>
//                 </div>
//                 <legend><b>Developer Login</b></legend>  
//                 <div style={{textAlign:'justify'}}>
//                     ID <span style={{color:"red"}}>↓ID입력</span>
//                     <input type="text" name ="id" style={{borderRadius:'5px', width:'100%'}} onChange={(e)=>{setIdInput(e.target.value)}}/>
//                 </div>
//                 <div style={{marginTop:'10px', textAlign:'justify'}}>
//                     Password <span style={{color:"red"}}>↓PW입력</span>
//                     <input type="text" name = "password" style={{borderRadius:'5px', width:'100%'}} onChange={(e)=>{setPwInput(e.target.value)}}/>
//                 </div>
//                 <button type="submit" style={{marginTop:'10px', border:'none', borderRadius:'5px'}} 
//                 onClick={()=>
//                     dispatch(close())}>로그인</button>
//             </fieldset>
//         </form>
//     </div>
// )};