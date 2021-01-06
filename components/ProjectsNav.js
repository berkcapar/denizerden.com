const ProjectsNav = () => {
  return (
    <div className="container">
      <nav>
        <label>
          <a href="#soloworks">SOLO</a>
        </label>
        <label>
          <a href="#pastshows">PAST SHOWS</a>
        </label>
        <label>
          <a href="#movieartset">VIDEO - MIXTAPE</a>
        </label>
        <label>
          <a href="#soundscape">SOUNDSCAPE</a>
        </label>
      </nav>

      <style jsx>
        {`
          nav {
            border: 1px solid magenta;
            padding: 1.5rem;
            display: flex;
            justify-content: center;
            margin: 0 auto;
            max-width: 1200px;
          }
          nav label {
            margin: 0 2em;
          }
          nav a {
            color: #e1bfd1;
            text-decoration: none;
            font-weight: 500px;
          }
          a:hover {
            color: white;
          }
          @media (max-width: 675px) {
            nav {
              flex-direction: column;
            }
            nav label {
              margin: 1em auto;
            }
          }
        `}
      </style>
    </div>
  )
}
export default ProjectsNav
