import ProjectsNav from './ProjectsNav'
import SoloWorks from './SoloWorks'


const solocontents = [
  { id: 1, title: 'Quarantine Improvisations', year: '2020', coverimage: <img src="/soloproject1.jpg" alt="quarentine" /> },
  { id: 2, title: 'Lush Town People', year: '2020', coverimage: <img src="/soloproject1.jpg" alt="quarentine" /> },
  { id: 3, title: 'Body', year: '2020', coverimage: <img src="/soloproject1.jpg" alt="quarentine" /> },
  { id: 4, title: 'Awakening the Sleeping Tiger', year: '2020', coverimage: <img src="/soloproject1.jpg" alt="quarentine" /> },
  { id: 5, title: 'Gelmiş ve Geçmiştir', year: '2019', coverimage: <img src="/soloproject1.jpg" alt="quarentine" /> },
  { id: 6, title: 'A Song For a Snowflakes Dance', year: '2019', coverimage: <img src="/soloproject1.jpg" alt="quarentine" /> },
  { id: 7, title: 'Moon Around', year: '2019', coverimage: <img src="/soloproject1.jpg" alt="quarentine" /> },
  { id: 8, title: 'Water Forms', year: '2019', coverimage: <img src="/soloproject1.jpg" alt="quarentine" /> }
]

const Projects = () => {
  return (
    <div>
      <ProjectsNav />
      <SoloWorks solocontents={solocontents} />
    </div>
  )
}
export default Projects
