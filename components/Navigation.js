import Link from 'next/link'

const Navigation = () => {
  return (
    <nav>
      <Link href="/who">
        <a>BIO</a>
      </Link>
      <Link href="/projects">
        <a>PROJECTS</a>
      </Link>
      <Link href="/videos">
        <a>VIDEOS</a>
      </Link>

      <Link href="/live">
        <a>LIVE</a>
      </Link>

      <style jsx>{`
        nav {
          padding: 0;
          display: flex;
          justify-content: center;
        }
        nav a {
          margin: 2.5em 2em;
          color: #e1bfd1;
          text-decoration: none;
          font-size: 1rem;
          font-weight: 600;
          margin-top: 2rem;
        }
        @media (max-width: 675px) {
          nav {
            border: 1px solid red;
          }
          nav a {
            margin: 1em 0.5em;
          }
        }
      `}</style>
    </nav>
  )
}

export default Navigation
