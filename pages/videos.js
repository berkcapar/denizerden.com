import Layout from '../components/Layout'
import Footer from '../components/Footer'

const Videos = () => {
  return (
    <div>
      <Layout />
      <div className="container">
        <h2 className="title">Here are some piano recordings </h2>
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
        <div className="iframe-container">
          <h3>Ludwig van Beethoven Sonata Op.109 No.30 </h3>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/g891feahlFU"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="iframe-container">
          <h3>C. Debussy - Mouvement </h3>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/movldcTwPkQ"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="iframe-container">
          <h3> Super-Science Exhibition Trailer </h3>
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
      <div className="footer">
        <Footer />
      </div>

      <style jsx>
        {`
          @media (max-width: 675px) {
            .iframe-container {
              position: relative;
              width: 100%;
              padding-bottom: 100.25%;
              height: 0;
              margin-bottom: 5rem;
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
          .title {
            margin-bottom: 2rem;
          }
        `}
      </style>
    </div>
  )
}

export default Videos
