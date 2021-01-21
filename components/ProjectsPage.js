import MovieArtSetWorks from './MovieArtSetWorks'
import PastShowWorks from './PastShowWorks'
import PianoWorks from './PianoWorks'
import ProjectsNav from './ProjectsNav'
import SoloWorks from './SoloWorks'
import SoundscapeWorks from './SoundscapeWorks'

const solocontents = [
  {
    id: 1,
    title: 'Awakening the Sleeping Tiger',
    year: '2020',
    coverimageUrl: '/awakening.png',
    alt: 'Awakening the Sleeping Tiger'
  },
  {
    id: 2,
    title: 'Body',
    year: '2020',
    coverimageUrl: '/body.png',
    alt: 'body'
  },
  {
    id: 3,
    title: 'Lush Town People',
    year: '2020',
    coverimageUrl: '/lush.png',
    alt: 'lush-town-people'
  },
  {
    id: 4,
    title: 'Stay Home',
    year: '2020',
    coverimageUrl: '/quarentine.png',
    alt: 'Stay Home'
  },

  {
    id: 5,
    title: 'Riders w/MEY',
    year: '2020',
    coverimageUrl: '/riders.jpg',
    alt: 'MEY'
  },
  {
    id: 6,
    title: 'Shadows',
    year: '2020',
    coverimageUrl: '/shadows.png',
    alt: 'shadows'
  },
  {
    id: 7,
    title: 'A Song For a Snowflakes Dance',
    year: '2019',
    coverimageUrl: '/snowflake.png',
    alt: 'A Song For a Snowflakes Dance'
  },
  {
    id: 8,
    title: 'A Poem for a Silent Leak',
    year: '2019',
    coverimageUrl: '/apoem.png',
    alt: 'A Poem for a Silent Leak'
  },
  {
    id: 9,
    title: 'Gelmiş ve Geçmiştir',
    year: '2019',
    coverimageUrl: '/gelmis_ve_gecmistir.png',
    alt: 'Gelmiş ve Geçmiştir'
  },
  {
    id: 10,
    title: 'Parmak Uçları Suya Uzanan Bir Çizgide',
    year: '2019',
    coverimageUrl: '/parmak.png',
    alt: 'Parmak Uçları Suya Uzanan Bir Çizgide'
  },
  {
    id: 11,
    title: 'Berceuse',
    year: '2018',
    coverimageUrl: '/berceuse.png',
    alt: 'Berceuse'
  },

  {
    id: 12,
    title: 'Moon Around',
    year: '2018',
    coverimageUrl: '/moonaround.jpg',
    alt: 'Moon Around'
  }
]
const pastshowscontents = [
  {
    id: 2,
    title: 'Super Science - Eser Gündüz',
    year: '2020',
    coverimageUrl: '/superscience.jpg',
    alt: 'Super Science - Eser Gündüz'
  },
  {
    id: 3,
    title: 'Japan Tour',
    year: '2019',
    coverimageUrl: '/japan3.jpg',
    alt: 'Japonya'
  }
]
const soundscapecontents = [
  {
    id: 1,
    title: 'Electronic Crossovers',
    year: '2020',
    coverimageUrl: '/electronic-bridges.jpg',
    alt: 'Electronic Crossovers'
  },
  {
    id: 2,
    title: 'Your Planet Calling',
    year: '2019',
    coverimageUrl: '/IDA.jpg',
    alt: 'Your Planet Calling'
  },

  {
    id: 3,
    title: 'départ: for Istanbul Soundscape Project',
    year: '2019',
    coverimageUrl: '/depart.jpg',
    alt: 'haydarpaşa'
  },
  {
    id: 4,
    title: 'Petrarca in borghese',
    year: '2019',
    coverimageUrl: '/borg.jpg',
    alt: 'Petrarca in borghese'
  }
]

const movieartsetcontents = [
  {
    id: 1,
    title: 'Root Radio',
    year: '2020 - 2021',
    coverimageUrl: '/root.png',
    alt: 'root radio'
  },

  {
    id: 2,
    title: 'Riders w/MEY',
    year: '2020',
    coverimageUrl: '/riders.jpg',
    alt: 'MEY'
  },
  {
    id: 3,
    title: 'Shadows',
    year: '2020',
    coverimageUrl: '/shadows.png',
    alt: 'shadows'
  }
]

const ProjectsPage = () => {
  return (
    <div>
      <ProjectsNav />
      <SoloWorks solocontents={solocontents} />
      <div className="soundscape-container">
        <SoundscapeWorks soundscapecontents={soundscapecontents} />
      </div>
      <style jsx>
        {`
          .pastshows-container,
          .video-mixtape-container,
          .soundscape-container {
            margin-top: 4rem;
            text-align: center;
          }
        `}
      </style>
    </div>
  )
}
export default ProjectsPage
