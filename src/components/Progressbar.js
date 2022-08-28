import { useState, useEffect } from 'react';
import app from '../App.module.css';



export default function Progressbar(){
    const[scroll, setScroll] = useState(0);
    const[prog, setProg] = useState(0);

    useEffect(() => {
      window.addEventListener("scroll", progres)
    
      return () => {
        window.removeEventListener("scroll", progres)
      }
    }, [scroll])
    

    const progres = () => {
        const scrollTotal = document.documentElement.scrollTop;
        const heightWin = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        setScroll(scrollTotal / heightWin * 100)}

    const progressBar={
        position: "fixed",
        width:"100vw",
        height: "0.5vh",
        zIndex: "10",
        backgroundColor: "rgb(168, 200, 241)"
    }
    
    const progress={
        width:`${scroll}vw`,
        height:'100%',
        backgroundColor: 'rgb(58, 139, 172)',
        transition:'all 1s'
    }
    
    return(
        <div style={progressBar}>
            <div style={progress}></div>
        </div>
    )
}