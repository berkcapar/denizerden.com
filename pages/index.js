import Layout from '../components/Layout'
import WelcomeCard from '../components/WelcomeCard'
import ReactMarkdown from 'react-markdown'
import Footer from '../components/Footer'
import FeaturedWorks from '../components/FeaturedWorks'
import Link from 'next/link'

export async function getStaticProps() {
  const siteData = await import(`../config.json`)
  const fs = require('fs')
  const matter = require('gray-matter')
  const markdownContent = fs.readFileSync(
    `${process.cwd()}/content/welcome.md`,
    'utf-8'
  )
  const { data, content } = matter(markdownContent)
  return {
    props: {
      data,
      content,
      title: siteData.default.title,
      description: siteData.default.description
    }
  }
}

const featuredcontents = [
  {
    id: 1,
    title: 'Japan Tour',
    year: '2019',
    coverimageUrl: '/japan3.jpg',
    alt: 'Japonya'
  },
  {
    id: 2,
    title: 'Body',
    year: '2020',
    coverimageUrl: '/body.png',
    alt: 'Body'
  },
  {
    id: 3,
    title: 'Root Radio',
    year: 'First tuesday of every month',
    coverimageUrl: '/root.png',
    alt: 'root radio'
  }
]

const Index = ({ content }) => {
  return (
    <div>
      <Layout />
      <div className="welcomearea">
        <div className="text">
          <WelcomeCard />
        </div>
        <div className="content">
          <ReactMarkdown children={content} />
        </div>

        <Link href="/bio">
          <a>
            <div className="bio-button">
              <p>Read Full Bio</p>
            </div>
          </a>
        </Link>
      </div>
      <FeaturedWorks featuredcontents={featuredcontents} />

      <div className="footer">
        <Footer />
      </div>
      <style jsx>
        {`
          .welcomearea {
            display: flex;
            flex-direction: column;
            margin: 2rem auto;
            width: 80%;
          }
          .content {
          }
          .text {
            text-align: center;
          }
          .bio-button {
            border: 1px solid white;
            border-radius: 0.8rem;
            width: 30%;
            margin: 1rem auto;
            text-align: center;
          }

          @media (min-width: 675px) {
            .welcomearea {
              width: 30%;
            }
          }
        `}
      </style>
    </div>
  )
}
export default Index
