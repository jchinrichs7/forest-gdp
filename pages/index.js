//https://www.chartjs.org/
import React from 'react';
import Link from 'next/link';
import { MongoClient } from 'mongodb';
import { withRuntimeEnv } from 'next-runtime-dotenv';

function Home({ forestData, gdpData }) {

  console.log("process env", process.env.NEXT_PUBLIC_TEST);
  const countries = [];
  
  for (let i = 0; i < forestData.length; i++) {
    countries.push(forestData[i].Country);
  }
  let indexedCountries = [];
  const notable = ["Low income", "Middle income", "High income", "World"]
  for (let i = 0; i < notable.length; i++) {
    for (let j = 0; j < countries.length; j++) {
      if (countries[j] == notable[i]) {
        indexedCountries.push({country: countries[j], index: j});
      }
    }
  }
  //const indexedCountries = countries.map((country, index) => ({ country, index }));
  const notableCountries = indexedCountries.filter(item => notable.includes(item.country));

  return (
    <>
      <span>
        <h1>Welcome !</h1>
        <h3>
        This app seeks to explore how countries' forest areas relates to their GDP per capita (PPP) over time. 
        I had the idea for this app when I heard the claim that developing countries tend to have net deforestation but as they develop, the trend reverses and they plant more trees. 
        My conclusion from this project is that the claim appears to be true, which you can explore for yourself using the links below (Note that some areas have limited data).
        <br></br><br></br>
        This data is taken from https://data.worldbank.org/ which defines Forest Area and GDP per capita (PPP) as follows:
        </h3>
        <p>
        <i>GDP per Capita (PPP): This indicator provides per capita values for gross domestic product (GDP) expressed in current international 
        dollars converted by purchasing power parity (PPP) conversion factor. GDP is the sum of gross value added by all resident producers 
        in the country plus any product taxes and minus any subsidies not included in the value of the products. conversion factor is a spatial 
        price deflator and currency converter that controls for price level differences between countries. Total population is a mid-year population 
        based on the de facto definition of population, which counts all residents regardless of legal status or citizenship.
        <br></br><br></br>
        Forest Area: land under natural or planted stands of trees of at least 5 meters in situ [that is, without having been moved], whether productive or not, and 
        excludes tree stands in agricultural production systems (for example, in fruit plantations and agroforestry systems) and trees in urban parks 
        and gardens.
        </i>
        </p>
        <h2>Countries, Categories, and Regions</h2>
      </span>
      <span>
        <ul>
          {notableCountries.map(({ country, index }) => (
          <div key={country}>
            <Link href={{
              pathname: `/${country}`,
              query: {
                index,
                countries: JSON.stringify(countries),
                forestData: JSON.stringify(forestData),
                gdpData: JSON.stringify(gdpData)
              }
            }} passHref>
              <li>{country}</li>
            </Link>
          </div>
          ))}
        </ul>
        <hr></hr>
        <ol>
          {countries.map((country, index) => (
            <div key={country}>
              <Link href={{
                pathname: `/${country}`,
                query: {
                  index,
                  countries: JSON.stringify(countries),
                  forestData: JSON.stringify(forestData),
                  gdpData: JSON.stringify(gdpData)
                }
              }} passHref>
                {/* This is the text that the link will display*/}
                <li> {country} </li>
              </Link>
            </div>
          ))}
        </ol>
      </span>
    </>
  );
}

export async function getServerSideProps() {

  const user = encodeURIComponent(process.env.NEXT_PUBLIC_MONGOUSER);
  const pass = encodeURIComponent(process.env.NEXT_PUBLIC_MONGOPASS);
  const uri = `mongodb+srv://${user}:${pass}@countrycluster.dso4dww.mongodb.net/?retryWrites=true&w=majority`;
  const client = new MongoClient(uri, { useUnifiedTopology: true });

  try {
    await client.connect();
    const dbName = 'test';
    const forestCollectionName = 'gdp-json';
    const gdpCollectionName = 'country-json';
    const database = client.db(dbName);

    // Get forest data
    const forestCollection = database.collection(forestCollectionName);
    const forestCursor = forestCollection.find({}, { projection: { _id: 0 } });
    const forestData = [];

    await forestCursor.forEach((document) => {
      const countryData = {
        Country: document['Country Name'],
        CountryCode: document['Country Code'],
        Years: {},
      };

      for (const key in document) {
        if (key !== 'Country Name' && key !== 'Country Code') {
          countryData.Years[key] = document[key];
        }
      }

      forestData.push(countryData);
    });

    // Get GDP data
    const gdpCollection = database.collection(gdpCollectionName);
    const gdpCursor = gdpCollection.find({}, { projection: { _id: 0 } });
    const gdpData = [];

    await gdpCursor.forEach((document) => {
      const countryData = {
        Country: document['Country Name'],
        CountryCode: document['Country Code'],
        Years: {},
      };

      for (const key in document) {
        if (key !== 'Country Name' && key !== 'Country Code') {
          countryData.Years[key] = document[key];
        }
      }

      gdpData.push(countryData);
    });

    return {
      props: {
        forestData,
        gdpData
      },
    };
  } 
  catch (err) {
    console.error('Something went wrong:', err);
    return {
      props: {
        forestData: [],
        gdpData: []
      },
    };
  } 
  finally {
    await client.close();
  }
}

export default Home;
