import React from 'react'
import Layout from '../../components/Layout'

const Moon = () => {
  return (
    <div>
      <Layout />
      <div className="container">
        <h2 className="title">Moon Around</h2>
        <p className="year">2018</p>

        <div className="iframe-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/m7_4DGzwuxA"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <p className="desc">
          This song composed on a Bodrum summer night while Ayşe and Mert were
          dancing in front of the full moon with a stranger dog.
        </p>
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
            .desc {
              width: 80%;
            }
          }
          .container {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .year {
            margin-bottom: 2em;
          }
          .desc {
            margin-top: 5em;
            margin-bottom: 3em;
          }
        `}
      </style>
    </div>
  )
}

export default Moon
