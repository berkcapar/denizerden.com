import Layout from '../../components/Layout'

const Depart = () => {
  return (
    <div>
      <Layout />
      <div>
        <div className="container">
          <h2 className="title">départ: for Istanbul Soundscape Project</h2>
          <p className="year">2019</p>
          <div className="iframe-container">
            <iframe
              width="100%"
              height="300"
              scrolling="no"
              frameborder="no"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/585780201&color=%23e1bfd1&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
            <div className="soundcloud">
              <a
                href="https://soundcloud.com/denizerden"
                title="Deniz Erden"
                target="_blank"
              >
                Deniz Erden
              </a>{' '}
              ·{' '}
              <a
                href="https://soundcloud.com/denizerden/depart-for-istanbul-soundscape-project"
                title="départ: for Istanbul Soundscape Project"
                target="_blank"
              >
                départ: for Istanbul Soundscape Project
              </a>
            </div>
          </div>
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
          .soundcloud {
            font-size: 10px;
            color: #cccccc;
            line-break: anywhere;
            word-break: normal;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            font-family: Interstate, Lucida Grande, Lucida Sans Unicode,
              Lucida Sans, Garuda, Verdana, Tahoma, sans-serif;
            font-weight: 100;
          }
          .soundcloud a {
            color: #cccccc;
            text-decoration: none;
          }
        `}
      </style>
    </div>
  )
}

export default Depart
