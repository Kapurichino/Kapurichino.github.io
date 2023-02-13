import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import React from 'react';
import sp from './Specification.module.css'
import app from '../App.module.css';

ChartJS.register(ArcElement, Tooltip, Legend);

function Specification(){
    const data = {
        labels: ['Html&CSS', 'React', 'Next.js', 'Javascript', 'Flutter', 'Typescript'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
    return(
      <div className={app.whiteBox}>
            <div className={sp.textContainer}>
                <h3 className={sp.textEffect}>주인장의 현재 관심사</h3>
                <Pie data={data}/>   
            </div>
      </div>
    )
}

export default Specification