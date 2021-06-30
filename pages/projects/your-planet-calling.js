import Footer from '../../components/Footer'
import Layout from '../../components/Layout'

const Planet = () => {
  return (
    <div>
      <Layout />
      <div className="container">
        <div className="salda">
          <iframe
            src="https://open.spotify.com/embed/track/7ChO3O1ydWVm3kUyxYepBP"
            width="300"
            height="380"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
          <p>
            Salda Lake was announced a "private area" in 2019, and it was
            decided to establish a nation's garden around 800 meters. In this
            piece that I composed to draw attention to the decision made, I used
            the sounds of water by deforming them.
          </p>
        </div>
        <div className="ida">
          <iframe
            src="https://open.spotify.com/embed/track/5WVApHt3Rg23zaRGLSR1oN"
            width="300"
            height="380"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
          <p>
            In Ida Mountains, 195,000 trees were felled. There is no return of
            the animals, the slaughtered nature, whose order is broken for the
            gold mine. In order to draw attention to the subject and take back
            to nature again, the idea of producing music and donating saplings
            to TEMA with the income of the song was born. When I made this song,
            I always carried the sounds of nature, the feeling of being machined
            and destroyed. I felt compelled to do something because the machines
            were traveling around this endless source of inspiration that
            fascinated me at the same time
          </p>
        </div>
      </div>
      <Footer />
      <style jsx>
        {`
          .container {
            width: 60%;
            display: flex;
            flex-direction: column;
            margin: 0 auto;
           
          }
          .salda,
          .ida {
            display: flex;
            margin-top: 2rem;
          }
          .salda {
            border-bottom: 1px solid gray;
          }
          .salda iframe {
            margin-bottom: 2rem;
          }
          .salda p,
          .ida p {
            margin-left: 5rem;
          }
          @media (max-width: 675px) {
            .ida,
            .salda {
              flex-direction: column;
            }
            .container {
              align-items: center;
            }
            .salda p,
            .ida p {
              margin-left: 0rem;
            }
            .salda iframe,
            .ida iframe {
              margin-bottom: 1rem;
            }
          }
        `}
      </style>
    </div>
  )
}

export default Planet
