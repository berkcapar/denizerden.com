import Link from 'next/link'

const Navigation = () => {
  return (
    <nav className="link">
      <label>
        {' '}
        <Link href="/who">
          <a>BIO</a>
        </Link>
      </label>
      <label>
        <Link href="/">
          <a>PROJECTS</a>
        </Link>
      </label>
      <label>
        <Link href="/live">
          <a>LIVE</a>
        </Link>
      </label>
      <style jsx>{`
        .link {
          display: flex;
          justify-content: center;
        }
        .link label {
          padding: 20px;
          font-size: 25px;
        }
        a {
          color: #e1bfd1;
          font-weight: 500px;
          text-decoration: none;
        }
        a:hover {
          color: white;
        }
      `}</style>
    </nav>
  )
}

export default Navigation
