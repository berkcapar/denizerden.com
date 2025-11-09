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
          Deniz Erden (b. 1993, Eskişehir, Turkey) is a classical pianist, composer and sound artist based in Berlin.
          </p>

          <div className="bio-sections">
            <section>
              <p>
              She began her piano studies at Anadolu University State Conservatory in 2003 and continued under the guidance of Hungarian pianist Robert Farkas. In 2011, she entered the State Conservatory of Mimar Sinan Fine Arts University, studying with Professor Hülya Tarcan and completed her master’s degree in 2017 with research focused on twentieth-century music. She has also worked privately with Elif Şahin (Stuttgart Musikhochschule), who has been an important influence in her musical development.              </p>
            </section>

            <section>
              <p>
              In 2025, Erden presents a performance intertwining pieces from her solo piano album Anicca with new compositions. Inspired by Buddhist philosophy, Anicca (2024) reflects on the notion that all things are in flux and that resistance to change leads to suffering. Through this idea, she explores these fragile moments between resistance and acceptance, shaping a minimal yet emotionally vivid sound world.
              </p>
            </section>

            <section>
              <p>
              In November 2024, she was invited to Japan for the third time as one of two pianists selected by the Consulate General to commemorate the 100th anniversary of diplomatic friendship between Turkey and Japan. During the visit, she gave a masterclass and a lecture concert at Hiroshima Elisabeth University, presenting contemporary Turkish repertoire alongside her own work. On her first visit in 2019, she premiered Ringlet, a piano work dedicated to her by Japanese composer Haruyuki Suzuki.
              </p>
            </section>

            <section>
              <p>
              Her electroacoustic work engages with contemporary social and political contexts. Developed between 2017 and 2023 and continuing to evolve, her projects combine field recordings, live processing and compositional design to explore themes such as women’s rights, ecological issues, and urban transformation. These works have been presented at the Pera Museum, CCA Berlin and the Orient Institut Istanbul.
              </p>
            </section>

            <section>
              <p>
              She has appeared on international stages including Tokyo Bunkyo Civic Hall, Nagoya Atsuta Playhouse, Aichi University of the Arts, Okinawa Prefectural University of the Arts, Hiroshima Elisabeth University of Music, Stuttgart Musikhochschule, Artliners Berlin and The Ballery, as well as major concert venues in Turkey. In 2025, she performed Grieg’s Piano Concerto with the Eskişehir Symphony Orchestra.              </p>
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