import Link from 'next/link'
import { FaInstagram, FaFacebookF, FaSpotify, FaYoutube, FaBandcamp, FaApple, FaBars, FaTimes } from 'react-icons/fa'
import { useState } from 'react'

export default function Navigation({ isVisible }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className={`navigation ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="desktop-nav">
        <div className="nav-left">
          <Link href="/works">Works</Link>
          <Link href="/concerts">Concerts</Link>
          <Link href="/about">About</Link>
          <a href="https://denizerden.bandcamp.com/music" target="_blank" rel="noopener noreferrer">Store</a>
        </div>
        
        <div className="nav-center">
          <Link href="/">
            <h1>Deniz Erden</h1>
          </Link>
        </div>
        
        <div className="nav-right">
          <a href="https://www.instagram.com/denizerden" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100027271793726" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://open.spotify.com/artist/6ugwBDrWkTel2S01VrT72I" target="_blank" rel="noopener noreferrer">
            <FaSpotify />
          </a>
          <a href="https://www.youtube.com/@denizerdenmusic" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
          <a href="https://denizerden.bandcamp.com/album/anicca" target="_blank" rel="noopener noreferrer">
            <FaBandcamp />
          </a>
          <a href="https://music.apple.com/us/artist/deniz-erden/1724148531" target="_blank" rel="noopener noreferrer">
            <FaApple />
          </a>
        </div>
      </div>

      <div className="mobile-nav">
        <Link href="/">
          <h1>Deniz Erden</h1>
        </Link>
        <button className="menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-links">
            <Link href="/works" onClick={() => setIsMenuOpen(false)}>Works</Link>
            <Link href="/concerts" onClick={() => setIsMenuOpen(false)}>Concerts</Link>
            <Link href="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
            <a href="https://denizerden.bandcamp.com/music" 
               target="_blank" 
               rel="noopener noreferrer"
               onClick={() => setIsMenuOpen(false)}>
              Store
            </a>
          </div>
          <div className="mobile-social">
            <a href="https://www.instagram.com/denizerden" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100027271793726" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://open.spotify.com/artist/6ugwBDrWkTel2S01VrT72I" target="_blank" rel="noopener noreferrer">
              <FaSpotify />
            </a>
            <a href="https://www.youtube.com/@denizerdenmusic" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
            <a href="https://denizerden.bandcamp.com/album/anicca" target="_blank" rel="noopener noreferrer">
              <FaBandcamp />
            </a>
            <a href="https://music.apple.com/us/artist/deniz-erden/1724148531" target="_blank" rel="noopener noreferrer">
              <FaApple />
            </a>
          </div>
        </div>
      )}

      <style jsx>{`
        .navigation {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          transition: transform 0.3s ease, opacity 0.3s ease;
          background: transparent;
        }

        .navigation.visible {
          transform: translateY(0);
          opacity: 1;
        }

        .navigation.hidden {
          transform: translateY(-100%);
          opacity: 0;
        }

        .desktop-nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 2rem 3rem;
        }

        .mobile-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          display: none;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem 2rem;
          z-index: 1000;
        }

        .nav-left {
          display: flex;
          gap: 2.5rem;
          align-items: center;
        }

        .nav-left :global(a), 
        .nav-left a {
          color: black !important;
          text-decoration: none;
          font-size: 1.8rem;
          font-weight: 500;
          transition: opacity 0.2s ease;
        }

        .nav-left a:hover {
          opacity: 0.8;
        }

        .nav-right {
          display: flex;
          gap: 2.5rem;
          align-items: center;
        }

        .nav-center h1 {
          font-size: 3rem;
          margin: 0;
          color: #000;
          font-weight: 500;
        }

        .nav-right a {
          color: #000;
          text-decoration: none;
          font-size: 1.4rem;
        }

        .mobile-menu {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100vw;
          height: 100vh;
          background: black;
          z-index: 999;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .mobile-links {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 3rem;
          margin-bottom: 4rem;
          margin-top: 3rem;
        }

        .mobile-links :global(a),
        .mobile-links a {
          color: white !important;
          font-size: 2.8rem;
          text-decoration: none;
          font-weight: 500;
          text-align: center;
        }

        .mobile-social {
          display: flex;
          gap: 2rem;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 90%;
          margin: 0 auto;
        }

        .mobile-social a {
          color: white !important;
          font-size: 1.6rem;
          margin-bottom: 1rem;
        }

        .menu-button {
          background: none;
          border: none;
          font-size: 2rem;
          cursor: pointer;
          color: ${isMenuOpen ? 'white' : 'black'};
          padding: 0.5rem;
          z-index: 1000;
        }

        .mobile-nav h1 {
          font-size: 2.2rem;
          font-weight: 500;
          color: ${isMenuOpen ? 'white' : 'black'} !important;
        }

        .mobile-nav :global(a) {
          text-decoration: none;
          color: ${isMenuOpen ? 'white' : 'black'} !important;
        }

        @media (max-width: 768px) {
          .desktop-nav {
            display: none;
          }

          .mobile-nav {
            display: flex;
          }

          .mobile-menu {
            display: flex;
          }
        }
      `}</style>
    </nav>
  )
}
