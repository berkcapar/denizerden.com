import Footer from '../../components/Footer'
import Layout from '../../components/Layout'

const Iris = () => {
  return (
    <div>
      <Layout />
      <div className="container">
        <div className="salda">
        <iframe 
        border= "0" 
        width = "350px" 
        height= "442px" 
        src="https://bandcamp.com/EmbeddedPlayer/track=3196078415/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless>
        <a href="https://denizerden.bandcamp.com/track/iris">Iris by Deniz Erden</a>
        </iframe>
        <div className="text"> 
          <p>
          Aiming to emphasize the importance of the Istanbul Convention, this piece is dedicated to 176 women who were murdered since the beginning of this year and all the women who we lost in past years.  </p>
          <p>The piece starts with a sound repeated 176 times accompanied by an elegy that I composed on piano. After an intense echo of silence, the piece ends with the March 8th Feminist Night Walk sounds. When I began to compose this piece, the number of murdered women was 176, by the time the piece was completed, this number totaled 185 murdered women. Hence, while the repeating sound permeates in the time with its all reality, it also carries the irony of “becoming normal” 
          
          An iris flower in the pursuit of justice. Left to earth where violence is not justified. 
          </p>
          <p>
          Note: by donating this track you will contribute to SPoD, a non-governmental LGBTI+ organization in Turkey that has been working for equality and human rights for lesbian, gay, bisexual, and trans people. spod.org.tr  
          </p>
          </div>
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
            margin-bottom: 2rem;
          }
          .salda,
          .ida {
            display: flex;
            margin-top: 2rem;
          }
          .salda iframe {
           
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
              width: 80%;
            }
            .salda p,
            .ida p {
              margin-left: 0rem;
            }
            .salda iframe,
            .ida iframe {
                margin-bottom: 1rem;
            }
            .text{
                width: 90%;
                margin: 0 auto;
            }
          }
        `}
      </style>
    </div>
  )
}

export default Iris
