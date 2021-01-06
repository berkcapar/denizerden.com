import React from 'react'
import Layout from '../../components/Layout'

const SuperScience = () => {
  return (
    <div>
      <Layout />
      <div className="container">
        <h2 className="title">
          Super Science - Eser Gündüz Exhibition Opening
        </h2>
        <p className="year">2020</p>
        <div className="iframe-container">
          <iframe
            src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F2222409948040540%2Fvideos%2F727746300966202%2F&show_text=false&width=560"
            width="560"
            height="314"
            scrolling="no"
            frameborder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowFullScreen="true"
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
              border: none;
              overflow: hidden;
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

export default SuperScience
