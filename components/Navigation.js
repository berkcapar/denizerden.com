import Link from 'next/link'

const Navigation = () => {
  return (
    <nav>
      <Link href="/who" legacyBehavior>
        <a>BIO</a>
      </Link>
      <Link href="/projects" legacyBehavior>
        <a>PROJECTS</a>
      </Link>
      <Link href="/videos" legacyBehavior>
        <a>VIDEOS</a>
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
           
          }
          nav a {
            margin: 1em 0.5em;
          }
        }
      `}</style>
    </nav>
  );
}

export default Navigation
