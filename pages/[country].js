// pages/[country].js
import React from 'react';
import { useRouter } from 'next/router';
import 'chart.js/auto';
import Chart from '../Chart';

function CountryPage() {
  const router = useRouter();
   const { country, index, countries, forestData, gdpData } = router.query; // Get the query parameters

  const parsedCountries = JSON.parse(decodeURIComponent(countries));
  const parsedForestData = JSON.parse(decodeURIComponent(forestData));
  const parsedGdpData = JSON.parse(decodeURIComponent(gdpData));
  return (
    <>
    <Chart forestData={parsedForestData} gdpData={parsedGdpData} index={index} />
    
    <h2><i>Note that returning to the homepage may take a few seconds of load time.</i></h2>
    </>
  );
}

export default CountryPage;