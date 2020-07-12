import React from 'react';
import {Pie} from 'react-chartjs-2';

export default function PieChart(props) {

    
    const state = {
    
        labels: props.compositePortfolio.map((r) => r.stockSymbol),
        datasets: [
          {
            label: 'Percentage',
            backgroundColor: [
              '#20B2AA',
              '#36747D',
              '#E25822',
              '#FE4EDA',
              '#FAE7B5',
              '#676767',
              '#B03060',
              '#B2EC5D',
              '#A8E4A0',
              '#B784A7',
              '#EE82EE',
              '#996666',
              '#7DF9FF',
              '#817C00',
              '#F6DA75',
              '#4914A0',
              '#36A500',
              '#3A38B8',
              '#148223',
              '#7FF2B1',
              '#05020D',
              '#CB4803',
              '#E09915',
              '#D8291A',
              '#2B0E62'
            ],
            hoverBackgroundColor: [
            '#77D2CE',
            '#00B533',
            ' #4B2C3A',
            '#E23E09',
            '#601FC4',
            '#DD8335',
            ' #5931F6',
            '#AC90AE',
            '#C68141',
            '#BFAB6D',
            '#4179A8',
            '#3C1686',
            '#AD4294',
            '#026672',
            '#A26E9E',
            '#470BA0',
            '#520506',
            '#3674DE',
            '#51F590',
            '#1A2B21',
            '#4886DC',
            '#32369A',
            '#38B5A5',
            '#658BA0',
            '#BE88B9'
            
            ],
            data: props.compositePortfolio.map((r) => r.currentPriceTotal)
          }
        ]
      }
  console.log(props)
    return (
      <div>
        <Pie
          data={state}
          options={{
            title:{
              display:true,
              text:'Portfolio Composition',
              fontSize:20
            },
            legend:{
              display:true,
              position:'bottom'
            }
          }}
        />
      </div>
    );
  }
