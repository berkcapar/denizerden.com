import React from 'react'
import Layout from '../../components/Layout'

const Lush = () => {
  return (
    <div>
      <Layout />
      <div className="container">
        <h2 className="title">Lush Town People</h2>
        <p className="year">2020</p>
        <div className="iframe-poem">
          <div className="iframe-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/-P34-czyscc"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="poem">
            <p>Lush town people</p>
            <p>lives under the unlimited shiny reflections,</p>
            <p>one day a little girl called out to butterflies on her bed</p>
            <p>for to find a new way to go there</p>
            <p>that's how she take to the road towards the mysterious land</p>
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

export default Lush
