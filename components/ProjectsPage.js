import MovieArtSetWorks from './MovieArtSetWorks'
import PastShowWorks from './PastShowWorks'
import ProjectsNav from './ProjectsNav'
import SoloWorks from './SoloWorks'
import SoundscapeWorks from './SoundscapeWorks'

const solocontents = [
  {
    id: 1,
    title: 'Awakening the Sleeping Tiger',
    year: '2020',
    coverimageUrl: '/awakening.png'
  },
  {
    id: 2,
    title: 'Body',
    year: '2020',
    coverimageUrl: '/body.png'
  },
  {
    id: 3,
    title: 'Lush Town People',
    year: '2020',
    coverimageUrl: '/lush.png'
  },
  {
    id: 4,
    title: 'Quarantine Improvisation Two',
    year: '2020',
    coverimageUrl: '/quarentine.png'
  },
  {
    id: 5,
    title: 'Quarantine Improvisation One',
    year: '2020',
    coverimageUrl: '/quarentine.png'
  },
  {
    id: 6,
    title: 'A Song For a Snowflakes Dance',
    year: '2019',
    coverimageUrl: '/snowflake.png'
  },
  {
    id: 7,
    title: 'A Poem for a Silent Leak',
    year: '2019',
    coverimageUrl: '/apoem.png'
  },
  {
    id: 8,
    title: 'Gelmiş ve Geçmiştir',
    year: '2019',
    coverimageUrl: '/gelmis_ve_gecmistir.png'
  },
  {
    id: 9,
    title: 'Parmak Uçları Suya Uzanan Bir Çizgide',
    year: '2019',
    coverimageUrl: '/parmak.png'
  },
  {
    id: 10,
    title: 'Berceuse',
    year: '2018',
    coverimageUrl: '/berceuse.png'
  },

  {
    id: 11,
    title: 'Water Forms',
    year: '2018',
    coverimageUrl: '/waterforms.png'
  },
  {
    id: 12,
    title: 'Moon Around',
    year: '2018',
    coverimageUrl: '/moonaround.jpg'
  }
]
const pastshowscontents = [
  {
    id: 1,
    title: 'Electronic Crossovers',
    year: '2020',
    coverimageUrl: '/electronic-bridges.jpg'
  },

  {
    id: 2,
    title: 'Super Science - Eser Gündüz',
    year: '2020',
    coverimageUrl: '/superscience.jpg'
  },
  {
    id: 3,
    title: 'Japan Tour',
    year: '2019',
    coverimageUrl: '/japan3.jpg'
  }
]
const soundscapecontents = [
  {
    id: 1,
    title: 'Your Planet Calling: IDA',
    year: '2019',
    coverimageUrl: '/IDA.jpg'
  },

  {
    id: 2,
    title: 'Your Planet Calling: SALDA',
    year: '2019',
    coverimageUrl: '/superscience.jpg'
  }
]

const movieartsetcontents = [
  {
    id: 1,
    title: 'Root Radio',
    year: '2020 - 2021',
    coverimageUrl: '/root.png'
  },

  {
    id: 2,
    title: 'Riders w/MEY',
    year: '2020',
    coverimageUrl: '/riders.jpg'
  },
  {
    id: 3,
    title: 'Shadows',
    year: '2020',
    coverimageUrl: '/shadows.png'
  }
]

const ProjectsPage = () => {
  return (
    <div>
      <ProjectsNav />
      <SoloWorks solocontents={solocontents} />
      <div className="pastshows-container">
        <PastShowWorks pastshowscontents={pastshowscontents} />
      </div>
      <div className="video-mixtape-container">
        <MovieArtSetWorks movieartsetcontents={movieartsetcontents} />
      </div>
      <div className="soundscape-container">
        <SoundscapeWorks soundscapecontents={soundscapecontents} />
      </div>
      <style jsx>
        {`
          .pastshows-container,
          .video-mixtape-container,
          .soundscape-container {
            margin-top: 4rem;
          }
        `}
      </style>
    </div>
  )
}
export default ProjectsPage
