import React from 'react'
import Layout from '../../components/Layout'

const Snowflake = () => {
  return (
    <div>
      <Layout />
      <div className="container">
        <h2 className="title">A Song For a Snowflakes Dance</h2>
        <p className="year">2019</p>
        <div className="iframe-poem">
          <div className="iframe-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/YZtmNtAlpHg"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="poem">
            <p>every snowflake</p>
            <p>every little bird</p>
            <p>dancing slowly</p>
            <p>the sun is confirms them and</p>
            <p>I'm watching this beautiful reflection of dance on the wall.</p>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          @media (max-width: 675px) {
            .iframe-container {
              position: relative;
              width: 100%;
              padding-bottom: 80.25%;
              height: 0;
            }
            .iframe-container iframe {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              heigth: 100%;
            }
          }
          .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 2rem;
          }
          .year {
            margin-bottom: 1em;
          }
          .poem {
            margin-top: 2em;
          }
        `}
      </style>
    </div>
  )
}

export default Snowflake
