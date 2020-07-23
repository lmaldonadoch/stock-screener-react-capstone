import React from 'react';
import { Line } from 'react-chartjs-2';

function Details() {
  const data = {
    labels: ['11:00', '12:00'],
    datasets: [
      {
        label: 'AAPL',
        data: [200, 210],
        backgroundColor: 'rgba(232,89,0, 0.4)',
        borderColor: 'rgba(232,89,0, 1)',
        pointBorderColor: 'rgba(232,89,0, 0.5)',
      },
    ],
  };
  return (
    <div className="Details">
      <Line data={data} />
    </div>
  );
}

export default Details;
