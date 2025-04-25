import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Navigation from '../components/Navigation';

export async function getStaticProps() {
  // We could fetch this data from an API or CMS in the future
  const concerts = [
    {
      id: 1,
      date: '30 May 2025',
      name: 'Eskisehir Metropolitan Municipality Symphony Orchestra',
      title: 'Grieg Piano Concerto in A minor',
      conductor: 'Ender Sakpınar',
      venue: 'Atatürk Kültür Sanat ve Kongre Merkezi',
      location: 'Eskisehir / Turkey'
    },
    {
      id: 2,
      date: '22 Nov 2025',
      title: '',
      conductor: '',
      venue: 'Nagoya / Japan',
      location: 'Details soon'
    }
  ]

  return {
    props: {
      concerts
    }
  }
}

export default function Concerts({ concerts }) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="concerts-page">
      <Head>
        <title>Concerts | Deniz Erden</title>
        <meta name="description" content="Upcoming concerts and performances by Deniz Erden" />
      </Head>
      <Navigation isVisible={!isScrolled} />
      <div className="container">
        <div className="content">
          <div className="concerts-list">
            {concerts.map(concert => (
              <div key={concert.id} className="concert-item">
                <div className="concert-header">
                  <h2 className="concert-date">{concert.date}</h2>
                  
                  <div className="concert-location">
                    {concert.venue && concert.location ? (
                      <h3>{concert.venue.toUpperCase()}, {concert.location.toUpperCase()}</h3>
                    ) : (
                      <h3>{concert.venue || concert.location}</h3>
                    )}
                  </div>
                </div>
                
                <div className="concert-details">
                  <p className="concert-name">{concert.name}</p>
                  
                  {concert.conductor && (
                    <p className="concert-conductor">Conductor, {concert.conductor}</p>
                  )}
                  
                  {concert.title && (
                    <p className="concert-title">{concert.title}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .concerts-page {
          background-color: white;
          font-family: sans-serif;
        }
        
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 2rem;
          max-width: 1200px;
          margin: 12rem auto 4rem auto;
          min-height: calc(100vh - 12rem);
        }
        
        .content {
          width: 100%;
          max-width: 960px;
          text-align: center;
        }
        
        .concerts-list {
          display: flex;
          flex-direction: column;
          gap: 4rem;
          margin-top: 4rem;
        }
        
        .concert-item {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          padding-bottom: 3rem;
          position: relative;
          border-bottom: 1px solid #eaeaea;
          margin-bottom: 2rem;
          text-align: center;
        }
        
        .concert-item:last-child {
          border-bottom: none;
        }
        
        .concert-header {
          margin-bottom: 0.5rem;
          text-align: center;
        }
        
        .concert-date {
          font-size: 2.2rem;
          font-weight: 400;
          margin: 0;
          margin-bottom: 1.2rem;
          color: #000;
        }
        
        .concert-location h3 {
          font-size: 1.4rem;
          font-weight: 400;
          color: #000;
          margin: 0.3rem 0;
          letter-spacing: 0.05em;
        }
        
        .concert-details {
          margin-top: 0.3rem;
          line-height: 1.4;
          color: #000;
          text-align: center;
        }
        
        .concert-name {
          font-size: 1.3rem;
          margin: 0.3rem 0;
          color: #000;
          font-family: sans-serif;
          font-weight: 400;
        }
        
        .concert-conductor {
          font-size: 1.3rem;
          margin: 0.3rem 0;
          color: #000;
          font-family: sans-serif;
          font-weight: 400;
        }
        
        .concert-title {
          font-size: 1.3rem;
          margin: 0.3rem 0;
          color: #000;
          font-family: sans-serif;
          font-weight: 400;
        }
        
        :global(.nav-left a) {
          color: black !important;
        }
        
        :global(h1), :global(h2), :global(h3), :global(p), :global(a) {
          color: black !important;
        }
        
        @media (max-width: 768px) {
          .container {
            padding: 0 1.5rem;
            margin-top: 8rem;
          }
          
          .concerts-list {
            gap: 3rem;
            margin-top: 3rem;
          }
          
          .concert-date {
            font-size: 1.8rem;
            margin-bottom: 1rem;
          }
          
          .concert-location h3 {
            font-size: 1.2rem;
          }
          
          .concert-details {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </div>
  )
} 