import Navigation from '../components/Navigation'
import Head from 'next/head'
import { useState, useEffect } from 'react'

export default function About() {
  const [isNavVisible, setIsNavVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

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
        <title>About - Deniz Erden</title>
        <meta name="description" content="About Deniz Erden - Classical pianist, composer and sound artist" />
      </Head>

      <Navigation isVisible={isNavVisible} />

      <main className="about-content">
        <article>
          <h1>About</h1>
          
          <p className="intro">
            Deniz Erden, born in 1993 in Eskişehir, Turkey, is a classical pianist, composer and sound artist living in Berlin.
          </p>

          <div className="bio-sections">
            <section>
              <p>
                She began her piano studies in 2003 at Anadolu University State Conservatory on a part-time basis and continued full-time in 2004 in the class of Hungarian pianist Robert Farkas. In 2011 she pursued her undergraduate education at Mimar Sinan Fine Arts University State Conservatory under Professor Hülya Tarcan and completed her master's degree in 2017 at the same institution with research focused on twentieth century music.
              </p>
            </section>

            <section>
              <p>
                In 2025, Deniz will present a performance that blends works from her solo album "Anicca" with new compositions in development, enhanced by electronic soundscapes and manipulated field recordings. The concept behind "Anicca" is inspired by Buddhist philosophy and emphasizes that everything is in constant flux and that resisting change leads to suffering. Through this project, she aims to explore the delicate balance between resistance to change and acceptance.
              </p>
            </section>

            <section>
              <p>
                In November 2024, Deniz was invited for the third time to Japan as one of two pianists selected by the consulate to celebrate the 100th anniversary of Turkey Japan diplomatic friendship. Strengthening her ties with Japanese composers and artists on each visit, she conducted a masterclass and concert at Hiroshima Elisabeth University where she introduced Turkish contemporary music and presented selections of her work. On her first visit, she premiered "Ringlet," a piece dedicated to her by Haruyuki Suzuki, in Tokyo.
              </p>
            </section>

            <section>
              <p>
                Deniz's electro acoustic projects engage with contemporary socio political dynamics and address pressing issues of our time. Her work, developed from 2017 to 2023 and continuing to evolve, seamlessly blends field recordings with electronic soundscapes and manipulation techniques to explore themes such as women's rights, ecological challenges, urban transformation and language. Collaborative projects with various musicologists have been exhibited at renowned venues including the Pera Museum, CCA Berlin and the Orient Institute Istanbul.
              </p>
            </section>

            <section>
              <p>
                She has performed on international stages such as Tokyo Bunkyo Civic Hall, Nagoya Atsuta Theatre, Aichi University of the Arts, Okinawa Prefectural University of the Arts, Stuttgart Musikhochschule, ArtLiners Berlin and The Ballery as well as on renowned stages in Turkey.
              </p>
            </section>
          </div>
        </article>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          background: white;
        }

        .about-content {
          max-width: 800px;
          margin: 0 auto;
          padding: 120px 20px 60px;
        }

        h1 {
          font-size: 3rem;
          margin-bottom: 2rem;
          font-weight: 500;
          color: #000;
        }

        .intro {
          font-size: 1.4rem;
          line-height: 1.6;
          margin-bottom: 2rem;
          color: #333;
          font-weight: 500;
        }

        .bio-sections {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        section p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #444;
          margin: 0;
        }

        @media (max-width: 768px) {
          .about-content {
            padding: 160px 20px 40px;
            text-align: center;
          }

          h1 {
            font-size: 2.5rem;
            text-align: center;
            margin-bottom: 2.5rem;
          }

          .intro {
            font-size: 1.2rem;
            text-align: left;
          }

          section p {
            font-size: 1rem;
            line-height: 1.7;
            text-align: left;
          }

          .bio-sections {
            gap: 2rem;
          }
        }
      `}</style>
    </div>
  )
} 