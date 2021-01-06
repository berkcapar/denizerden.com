import Layout from '../../components/Layout'

const QuarentineOne = () => {
  return (
    <div>
      <Layout />
      <div className="container">
        <h2 className="title">Quarantine Improvisiation One</h2>
        <p className="year">2020</p>
        <div className="iframe-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/mCg6Lt2kJFQ"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <style jsx>
        {`
          @media (max-width: 675px) {
            .iframes-container {
              display: flex;
              flex-direction: column;
            }
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
          .iframes-container {
            display: flex;
          }
          .iframe-container {
            margin-left: 2rem;
            margin-right: 2rem;
          }
        `}
      </style>
    </div>
  )
}
export default QuarentineOne
