import React from 'react'
import Layout from '../../components/Layout'

const Anicca = () => {
  return (
    <div>
      <Layout />
      <div className="container">
        <h2 className="title">Anicca</h2>
        <p className="year">2022</p>

        <div className="iframe-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/2GmfMq5xuS8"
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
        `}
      </style>
    </div>
  )
}

export default Anicca