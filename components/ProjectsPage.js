import CollabWorks from './CollabWorks'
import ProjectsNav from './ProjectsNav'
import SoloWorks from './SoloWorks'


  const solocontents = [
  { id: 1, title: 'Quarantine Improvisations', year: '2020', coverimageUrl: "/soloproject1.jpg"},
  { id: 2, title: 'Lush Town People', year: '2020', coverimageUrl: "/soloproject1.jpg"},
  { id: 3, title: 'Body', year: '2020', coverimageUrl: "/soloproject1.jpg" },
  { id: 4, title: 'Awakening the Sleeping Tiger', year: '2020', coverimageUrl: "/soloproject1.jpg" },
  { id: 5, title: 'Gelmiş ve Geçmiştir', year: '2019', coverimageUrl: "/soloproject1.jpg" },
  { id: 6, title: 'A Song For a Snowflakes Dance', year: '2019', coverimageUrl: "/soloproject1.jpg" },
  { id: 7, title: 'Moon Around', year: '2019', coverimageUrl: "/soloproject1.jpg" },
  { id: 8, title: 'Water Forms', year: '2019', coverimageUrl: "/soloproject1.jpg" }
]
 const collabrationcontents = [
  { id: 1, title: 'Quarantine Improvisations', year: '2020', coverimageUrl: "/soloproject1.jpg" },
  { id: 2, title: 'Lush Town People', year: '2020', coverimageUrl: "/soloproject1.jpg" },
  { id: 3, title: 'Body', year: '2020', coverimageUrl: "/soloproject1.jpg" },
  { id: 4, title: 'Awakening the Sleeping Tiger', year: '2020', coverimageUrl: "/soloproject1.jpg" },
  { id: 5, title: 'Gelmiş ve Geçmiştir', year: '2019', coverimageUrl: "/soloproject1.jpg" },
  { id: 6, title: 'A Song For a Snowflakes Dance', year: '2019', coverimageUrl: "/soloproject1.jpg" },
]


const ProjectsPage = () => {
  return (
    <div>
      <ProjectsNav />
      <SoloWorks solocontents={solocontents} />
      <CollabWorks collabrationcontents={collabrationcontents}/>
    </div>
  )
}
export default ProjectsPage
