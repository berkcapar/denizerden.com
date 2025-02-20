import WelcomeCard from '../components/WelcomeCard'
import ReactMarkdown from 'react-markdown'
import Footer from '../components/Footer'
import FeaturedWorks from '../components/FeaturedWorks'
import FeaturedSs from '../components/FeaturedWorks'
import Link from 'next/link'
import LivePiano from '../components/LivePiano'
import Layout from '../components/Layout'
import FeaturedSsWorks from '../components/FeaturedSs'
import { useState, useEffect } from 'react'
import Navigation from '../components/Navigation'
import Head from 'next/head'
import { FaSpotify, FaApple, FaBandcamp, FaAmazon, FaYoutube } from 'react-icons/fa'
import { SiTidal } from 'react-icons/si'

// export async function getStaticProps() {
//  const siteData = await import(`../config.json`)
// const fs = require('fs')
// const matter = require('gray-matter')
// const markdownContent = fs.readFileSync(
//    `${process.cwd()}/content/welcome.md`,
//    'utf-8'
//  )
//  const { data, content } = matter(markdownContent)
//  return {
//    props: {
//     data,
//     content,
//     title: siteData.default.title,
//     description: siteData.default.description
//   }
// }}

const featuredcontents = [
  {
    id: 1,
    title: 'IRIS',
    year: '2021',
    coverimageUrl: '/iris.jpg',
    alt: 'Iris'
  },
  {
    id: 2,
    title: 'Japan Tour',
    year: '2019',
    coverimageUrl: '/japan3.jpg',
    alt: 'Japonya'
  },
  {
    id: 3,
    title: 'Body',
    year: '2020',
    coverimageUrl: '/body.png',
    alt: 'Body'
  },
  {
    id: 4,
    title: 'Root Radio',
    year: 'Second tuesday of every month',
    coverimageUrl: '/root.png',
    alt: 'root radio'
  }
]

const featuredsscontents = [
  {
    id: 1,
    title: 'Your Planet Calling',
    year: '2019',
    coverimageUrl: '/IDA.jpg',
    alt: 'Your Planet Calling'
  },
  {
    id: 2,
    title: 'Electronic Crossovers',
    year: '2020',
    coverimageUrl: '/electronic-bridges.jpg',
    alt: 'Electronic Crossovers'
  }
]

const livepiano = [
  {
    id: 1,
    title: 'Gelmiş ve Geçmiştir',
    year: '2019',
    coverimageUrl: '/gelmis_ve_gecmistir.png',
    alt: 'Gelmiş ve Geçmiştir'
  },
  {
    id: 2,
    title: 'Parmak Uçları Suya Uzanan Bir Çizgide',
    year: '2019',
    coverimageUrl: '/parmak.png',
    alt: 'Parmak Uçları Suya Uzanan Bir Çizgide'
  },
  {
    id: 3,
    title: 'Moon Around',
    year: '2018',
    coverimageUrl: '/moonaround.jpg',
    alt: 'Moon Around'
  }
]

export default function Home() {
  const [isNavVisible, setIsNavVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzkbdZdU-hg7tyKLOZF-ACp3wG9ahDKfi9n7HH6zIkTKPS2RUo6_robjqzhTkkgLSXd/exec?action=submit'
      
      console.log('Submitting to:', SCRIPT_URL)
      console.log('Payload:', { email })

      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: {
          'Content-Type': 'text/plain',
        },
      })

      console.log('Response status:', response.status)
      const data = await response.json()
      console.log('Response data:', data)
      
      if (data.status === 'success') {
        setStatus('success')
        setEmail('')
        alert('Thank you for subscribing!')
      } else {
        throw new Error(data.message || 'Submission failed')
      }
    } catch (error) {
      console.error('Detailed error:', error)
      setStatus('error')
      alert('Sorry, there was an error. Please try again.')
    } finally {
      setStatus('idle')
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY === 0) {
        // Only show navigation when at the very top
        setIsNavVisible(true)
      } else {
        // Hide navigation when scrolling down or up (unless at top)
        setIsNavVisible(false)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <div className="container">
      <Head>
        <title>Deniz Erden</title>
        <meta name="description" content="Deniz Erden - Official Website" />
      </Head>

      <Navigation isVisible={isNavVisible} />
      
      <main>
        <section className="hero-section"></section>
        
        <section className="album-section">
          <div className="album-content">
            <h2>Anicca</h2>
            
            <div className="album-cover">
              <img src="/anicca_cover.jpg" alt="Anicca Album Cover" />
            </div>

            <p className="album-description">
              A journey through being, impermanence, and the present moment, 
              through change, encounters, metaphors, and memories.
            </p>
            
            <div className="streaming-links">
              <a href="https://open.spotify.com/album/4U5S6FCySDStqGuBZ2cy1Z" 
                target="_blank" 
                rel="noopener noreferrer"
                className="platform-link">
                <FaSpotify /> Spotify
              </a>
              
              <a href="https://music.apple.com/us/album/anicca/1770317502" 
                target="_blank" 
                rel="noopener noreferrer"
                className="platform-link">
                <FaApple /> Apple Music
              </a>
              
              <a href="https://tidal.com/browse/album/388979018" 
                target="_blank" 
                rel="noopener noreferrer"
                className="platform-link">
                <SiTidal /> Tidal
              </a>
              
              <a href="https://music.youtube.com/playlist?list=OLAK5uy_m_0dV60uvo8HBverVuoTEl43l011tpFmw" 
                target="_blank" 
                rel="noopener noreferrer"
                className="platform-link">
                <FaYoutube /> YouTube Music
              </a>
              
              <a href="https://denizerden.bandcamp.com/album/anicca" 
                target="_blank" 
                rel="noopener noreferrer"
                className="platform-link">
                <FaBandcamp /> Bandcamp
              </a>
              
              <a href="https://www.amazon.de/music/player/albums/B0DHSPYRV6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="platform-link">
                <FaAmazon /> Amazon Music
              </a>
            </div>
          </div>
        </section>

        <section className="newsletter-section">
          <div className="newsletter-content">
            <h2>Subscribe</h2>
            <p>Join for new releases, upcoming performances, and artistic journey.</p>
            
            <form onSubmit={handleSubmit} className="newsletter-form">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                disabled={status === 'loading'}
              />
              <button 
                type="submit"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          </div>
        </section>
      </main>

      <style jsx global>{`
        html, body {
          margin: 0;
          padding: 0;
          background: white !important;
          min-height: 100vh;
          width: 100%;
        }

        * {
          box-sizing: border-box;
        }

        #__next {
          background: white;
        }
      `}</style>

      <style jsx>{`
        .container {
          width: 100%;
          background: white;
        }

        main {
          width: 100%;
          background: white;
        }

        .hero-section {
          height: 100vh;
          width: 100%;
          background-image: url('/website.jpg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          position: relative;
        }

        .album-section {
          min-height: 80vh;
          width: 100%;
          padding: 10px 20px 100px 20px;
          background: #f8f8f8;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          position: relative;
        }

        .album-content {
          max-width: 800px;
          margin: 0 auto;
        }

        h2 {
          font-size: 3.5rem;
          margin-bottom: 1rem;
          color: #000;
          font-weight: 500;
        }

        .album-cover {
          margin: 0 auto 2rem;
          max-width: 400px;
          width: 100%;
        }

        .album-cover img {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 4px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }

        .album-description {
          font-size: 1.2rem;
          line-height: 1.6;
          color: #333;
          margin-bottom: 3rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .streaming-links {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          max-width: 800px;
          margin: 0 auto;
        }

        .platform-link {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.8rem;
          padding: 1rem;
          border-radius: 8px;
          font-size: 1.1rem;
          font-weight: 500;
          transition: all 0.3s ease;
          text-decoration: none;
          background: #000;
          color: white;
          width: 100%;
        }

        .platform-link:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
          opacity: 0.9;
        }

        @media (max-width: 768px) {
          h2 {
            font-size: 2.5rem;
            margin-bottom: 0.8rem;
            font-color
          }

          .album-cover {
            max-width: 300px;
          }

          .streaming-links {
            grid-template-columns: 1fr;
          }

          .album-section {
            padding: 60px 20px;
          }
        }

        .newsletter-section {
          padding: 50px 20px;
          background: #000;
          color: white;
          text-align: center;
        }

        .newsletter-content {
          max-width: 600px;
          margin: 0 auto;
        }

        .newsletter-content h2 {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
          font-weight: 500;
          color: white;
        }

        p {
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 2rem;
          opacity: 0.9;
        }

        .newsletter-form {
          display: flex;
          gap: 1rem;
          max-width: 500px;
          margin: 0 auto;
        }

        input {
          flex: 1;
          padding: 1rem 1.5rem;
          border: none;
          border-radius: 4px;
          font-size: 1rem;
          background: white;
          color: #000;
        }

        button {
          padding: 1rem 2rem;
          border: none;
          border-radius: 4px;
          background: #333;
          color: white;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        button:hover {
          background: #444;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .newsletter-section {
            padding: 60px 20px;
          }

          h2 {
            font-size: 2rem;
          }

          .newsletter-form {
            flex-direction: column;
            gap: 1rem;
          }

          input, button {
            width: 100%;
          }
        }
      `}</style>
    </div>
  )
}
