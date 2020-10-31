import Link from 'next/link'

const ProjectsNav = () => {
  return (
    <div>
      <nav className="link">
        <label>
          <Link href="/">
            <a>SOLO</a>
          </Link>
        </label>
        <label>
          <Link href="/">
            <a>COLLABRATIONS</a>
          </Link>
        </label>
        <label>
          <Link href="/">
            <a>PAST SHOWS</a>
          </Link>
        </label>
        <label>
          <Link href="/">
            <a>FILM/ART/SET</a>
          </Link>
        </label>
      </nav>

      <style jsx>
        {`
          .link {
            display: flex;
            justify-content: center;
          }
          .link label {
            padding: 60px;
            font-size: 20px;
          }
          a {
            color: #e1bfd1;
            text-decoration: none;
            font-weight: 500px;
          }
          a:hover {
            color: white;
          }
        `}
      </style>
    </div>
  )
}
export default ProjectsNav
