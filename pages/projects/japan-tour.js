import React from 'react'
import Layout from '../../components/Layout'

const JapanTour = () => {
  return (
    <div>
      <Layout />
      <div className="container">
        <h2 className="title">Japan Tour Live Performances</h2>
        <p className="year">2019</p>
        <div className="iframe-container">
          <h3>Fazıl Say - Sarı Gelin</h3>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/5OkIgGQ5vUw"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="iframe-container">
          <h3>
            H.Ferid Alnar: 8 Piano Pieces - 5. Un peu plus agite (Biraz da
            Yürükçe!)
          </h3>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/WIdCpmyMI3I"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="iframe-container">
          <h3>Hideki Kozakura: Reine Liebe</h3>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/aDSa4KFmMaI"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="iframe-container">
          <h3>Haruyuki Suzuki - Ringlet (2019, World Premiere) </h3>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/tAQzijswL4o"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <style jsx>
        {`
          @media (max-width: 675px) {
            .iframe-container {
              position: relative;
              width: 100%;
              padding-bottom: 70.25%;
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
          .iframe-container {
            margin-bottom: 2rem;
          }
        `}
      </style>
    </div>
  )
}

export default JapanTour
