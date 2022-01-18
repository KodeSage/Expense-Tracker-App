import React from 'react'
import './Chart.css';

import ChartBar from './ChartBar';


const Chart = (props) => {
    const dataPointsValues = props.dataPoint.map(dataPoint => dataPoint.value);
    const totalMaxim = Math.max(...dataPointsValues);

    return (
      <div className="chart">
        {props.dataPoint.map((data) => (
          <ChartBar
            key={data.label}
            value={data.value}
            maxValue={totalMaxim}
            label={data.label}
          />
        ))}
      </div>
    );
}

export default Chart
