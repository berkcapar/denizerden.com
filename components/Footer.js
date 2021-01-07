import React from 'react'

const Footer = () => {
  return (
    <footer>
      <h3 className="follow-text">Go Follow Me!</h3>
      <div className="icons">
        <a href="https://www.instagram.com/denizerden/">
          <i class="fab fa-instagram fa-2x"></i>
        </a>
        <a href="https://www.youtube.com/channel/UCaKjcv9ns0qRCicbkjmxIuA">
          <i class="fab fa-youtube fa-2x"></i>
        </a>
        <a href="https://open.spotify.com/artist/6ugwBDrWkTel2S01VrT72I?si=e1s2MoFnQg-wfXLlhBBG1w">
          <i class="fab fa-spotify fa-2x"></i>
        </a>
        <a href="https://soundcloud.com/denizerden">
          <i class="fab fa-soundcloud fa-2x"></i>
        </a>
        <a href="https://www.facebook.com/Deniz-Erden-2222409948040540">
          <i class="fab fa-facebook fa-2x"></i>
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
          width: 50%;
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
