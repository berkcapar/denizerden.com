
const ProjectsNav = () => {
  return (
    <div>
      <nav className="link">
        <label>
          <a href="#soloworks">SOLO</a>
        </label>
        <label>
          <a href="#collabrations">COLLABRATIONS</a>
        </label>
        <label>
          <a href="#pastshows">PAST SHOWS</a>
        </label>
        <label>
          <a href="#movieartset">MOVIE/ART/MIXTAPE</a>
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
          @media 
        `}
      </style>
    </div>
  )
}
export default ProjectsNav
