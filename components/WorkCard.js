import Link from 'next/link'
import slug from 'slug'

export const SoloCard = ({ solocontent }) => {
  return (
    <div className="solocard-container">
      <div className="solocard">
        <Link
          href="/projects/[title]"
          as={`/projects/${slug(solocontent.title)}`}
        >
          <a>
            <div className="cardinfo">
              <img className="cardimage" src={solocontent.coverimageUrl} />
              <h3 className="title">{solocontent.title}</h3>
              <p className="year"> {solocontent.year}</p>
            </div>
          </a>
        </Link>
      </div>

      <style jsx>
        {`
          .solocard {
            width: 90%;
            margin: 0 auto;
          }
          .solocard a {
            text-decoration: none;
            color: white;
          }
          .cardinfo {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .year {
            margin-top: 0;
          }
        `}
      </style>
    </div>
  )
}

export const SoundscapeCard = ({ soundscapecontent }) => {
  return (
    <div className="collabcard-container">
      <div className="collabcard">
        <Link
          href="/projects/[title]"
          as={`/projects/${slug(soundscapecontent.title)}`}
        >
          <a>
            <div className="cardinfo">
              <img
                className="cardimage"
                src={soundscapecontent.coverimageUrl}
              />
              <h3 className="title">{soundscapecontent.title}</h3>
              <p className="year"> {soundscapecontent.year}</p>
            </div>
          </a>
        </Link>
      </div>
      <style jsx>
        {`
          .collabcard {
            width: 90%;
            margin: 0 auto;
          }
          .cardinfo {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .year {
            margin-top: 0;
          }
        `}
      </style>
    </div>
  )
}

export const PastShowCard = ({ pastshowscontent }) => {
  return (
    <div className="pastshowcard-container">
      <div className="pastshowcard">
        <Link
          href="/projects/[title]"
          as={`/projects/${slug(pastshowscontent.title)}`}
        >
          <a>
            <div className="cardinfo">
              <img className="cardimage" src={pastshowscontent.coverimageUrl} />
              <h3>{pastshowscontent.title}</h3>
              <p className="year"> {pastshowscontent.year}</p>
            </div>
          </a>
        </Link>
      </div>
      <style jsx>
        {`
          .pastshowcard {
            width: 90%;
            margin: 0 auto;
          }
          .cardinfo {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .year {
            margin-top: 0;
          }
        `}
      </style>
    </div>
  )
}

export const MovieArtSetCard = ({ movieartsetcontent }) => {
  return (
    <div className="movieartsetcard-container">
      <div className="movieartsetcard">
        <Link
          href="/projects/[title]"
          as={`/projects/${slug(movieartsetcontent.title)}`}
        >
          <a>
            <div className="cardinfo">
              <img
                className="cardimage"
                src={movieartsetcontent.coverimageUrl}
              />
              <h3>{movieartsetcontent.title}</h3>
              <p className="year"> {movieartsetcontent.year}</p>
            </div>
          </a>
        </Link>
      </div>
      <style jsx>
        {`
          .movieartsetcard {
            width: 90%;
            margin: 0 auto;
          }
          .cardinfo {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .year {
            margin-top: 0;
          }
        `}
      </style>
    </div>
  )
}
export const FeaturedCard = ({ featuredcontent }) => {
  return (
    <div className="movieartsetcard-container">
      <div className="movieartsetcard">
        <Link
          href="/projects/[title]"
          as={`/projects/${slug(featuredcontent.title)}`}
        >
          <a>
            <div className="cardinfo">
              <img className="cardimage" src={featuredcontent.coverimageUrl} />
              <h3>{featuredcontent.title}</h3>
              <p className="year"> {featuredcontent.year}</p>
            </div>
          </a>
        </Link>
      </div>
      <style jsx>
        {`
          .movieartsetcard {
            width: 90%;
            margin: 0 auto;
          }
          .cardinfo {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .year {
            margin-top: 0;
          }
        `}
      </style>
    </div>
  )
}
