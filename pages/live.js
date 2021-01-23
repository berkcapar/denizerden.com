import Footer from '../components/Footer'
import Layout from '../components/Layout'

const Live = () => {
  return (
    <div>
      <Layout />
      <div className="text-container">
        <div className="text">
          <h3>
            Listen my Root Radio set "ELEKTROLIT" on{' '}
            <a href="rootradio.live"> rootradio.live</a> at every second
            tuesday.
          </h3>
        </div>
        <div className="container">
          <div className="iframe-container">
            <iframe
              width="100%"
              height="300"
              scrolling="no"
              frameborder="no"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/854866885&color=%23e1bfd1&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
            <div className="soundcloud">
              <a
                href="https://soundcloud.com/rootradiolive"
                title="Root︱روت"
                target="_blank"
              >
                Root︱روت
              </a>{' '}
              ·{' '}
              <a
                href="https://soundcloud.com/rootradiolive/elektrolit-root-radio-16062020"
                title="ELEKTROLIT | Root Radio 16/06/2020"
                target="_blank"
              >
                ELEKTROLIT | Root Radio 16/06/2020
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer />
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
            .text-container {
              padding-bottom: 35%;
              flex-direction: column;
            }
          }
          .container {
            display: flex;
            flex-direction: column;
            align-items: center;
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
          .footer {
            margin-top: 10%;
          }
          .text-container {
            display: flex;
            align-items: center;
            width: 50%;
            margin: 0 auto;
            margin-top: 3rem;
            padding-bottom: 12%;
          }
          .text {
            width: 90%;
            margin-right: 3rem;
          }
        `}
      </style>
    </div>
  )
}

export default Live
