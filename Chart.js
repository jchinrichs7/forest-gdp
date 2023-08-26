import React, { useEffect } from 'react';
import { Line } from 'react-chartjs-2';

function Chart({ forestData, gdpData, index}) {
  console.log(gdpData.length)
  let countryIndex = index
   if (countryIndex >= forestData.length || countryIndex >= gdpData.length) {
    return null; // Return nothing if the index is too high
  }
  //console.log("Chart component. forestData is:", forestData);
  //console.log("Chart component. gdpData is:", gdpData);
  const matchingGdpIndex = gdpData.findIndex(item => item.Country === forestData[countryIndex].Country);

  const data = {
    datasets: [
      {
        label: 'Forest Area (% of land mass)',
        data: forestData[countryIndex].Years, // Example data, make sure it's valid
        yAxisID: 'y-axis-1', // Use the id of the left y-axis
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'GDP ($ of PPP)',
        data: matchingGdpIndex !== -1 ? gdpData[matchingGdpIndex].Years : [],
        yAxisID: 'y-axis-2', // Use the id of the right y-axis
        borderColor: 'rgba(192, 75, 75, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const options = {
    scales: {
      x: {
        type: 'category',
        labels: ['1990', '1991', '1992', '1993', '1994'],
      },
      y: [
        {
          id: 'y-axis-1',
          type: 'linear',
          position: 'left',
        },
        {
          id: 'y-axis-2',
          type: 'linear',
          position: 'right',
        },
      ],
    },
  };

  return (
    <div>
      <h1>{forestData[countryIndex].Country} Forest Area v. GDP per Capita (PPP)</h1>
      <Line data={data} options={options} />
    </div>
  );
}

export default Chart;
