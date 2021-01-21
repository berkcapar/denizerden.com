import React from 'react'

const Footer = () => {
  return (
    <footer>
      <h3 className="follow-text">Go Follow Me!</h3>
      <div className="icons">
        <a aria-label="Instagram" href="https://www.instagram.com/denizerden/">
          <i className="fab fa-instagram fa-2x"></i>
        </a>
        <a
          aria-label="Youtube"
          href="https://www.youtube.com/channel/UCaKjcv9ns0qRCicbkjmxIuA"
        >
          <i className="fab fa-youtube fa-2x"></i>
        </a>
        <a
          aria-label="Spotify"
          href="https://open.spotify.com/artist/6ugwBDrWkTel2S01VrT72I?si=e1s2MoFnQg-wfXLlhBBG1w"
        >
          <i className="fab fa-spotify fa-2x"></i>
        </a>
        <a aria-label="Soundcloud" href="https://soundcloud.com/denizerden">
          <i className="fab fa-soundcloud fa-2x"></i>
        </a>
        <a
          aria-label="Facebook"
          href="https://www.facebook.com/Deniz-Erden-2222409948040540"
        >
          <i className="fab fa-facebook fa-2x"></i>
        </a>
      </div>
      <style jsx>{`
        footer {
          background-color: #19778a;
          display: flex;
          justify-content: space-around;
        }
        .follow-text {
          width: 30%;
          margin-top: 1.2rem;
          color: white;
        }
        .icons {
          width: 60%;
          display: flex;
          margin: 1rem;
        }
        .icons a {
          margin-right: 1rem;
        }
        @media (min-width: 675px) {
          footer {
            width: 50%;
            margin-left: 50%;
          }
          .follow-text {
            width: 30%;
          }
          .icons {
            width: 50%;
            justify-content: flex-end;
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer
