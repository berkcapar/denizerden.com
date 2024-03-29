import Link from 'next/link'
import slug from 'slug'

export const SoloCard = ({ solocontent }) => {
  return (
    <div className="solocard-container">
      <div className="solocard">
        <Link
          href="/projects/[title]"
          as={`/projects/${slug(solocontent.title)}`}
          legacyBehavior>
          <a>
            <div className="cardinfo">
              <img
                className="cardimage"
                alt={solocontent.alt}
                src={solocontent.coverimageUrl}
              />
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
          .solocard:hover {
            transition-duration: 0.5s;
            transform: scale(1.2);
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
  );
}

export const SoundscapeCard = ({ soundscapecontent }) => {
  return (
    <div className="collabcard-container">
      <div className="collabcard">
        <Link
          href="/projects/[title]"
          as={`/projects/${slug(soundscapecontent.title)}`}
          legacyBehavior>
          <a>
            <div className="cardinfo">
              <img
                className="cardimage"
                src={soundscapecontent.coverimageUrl}
                alt={soundscapecontent.alt}
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
          .collabcard:hover {
            transition-duration: 0.5s;
            transform: scale(1.2);
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
  );
}

export const PastShowCard = ({ pastshowscontent }) => {
  return (
    <div className="pastshowcard-container">
      <div className="pastshowcard">
        <Link
          href="/projects/[title]"
          as={`/projects/${slug(pastshowscontent.title)}`}
          legacyBehavior>
          <a>
            <div className="cardinfo">
              <img
                className="cardimage"
                alt={pastshowscontent.alt}
                src={pastshowscontent.coverimageUrl}
              />
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
          .pastshowcard:hover {
            transition-duration: 0.5s;
            transform: scale(1.2);
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
  );
}

export const MovieArtSetCard = ({ movieartsetcontent }) => {
  return (
    <div className="movieartsetcard-container">
      <div className="movieartsetcard">
        <Link
          href="/projects/[title]"
          as={`/projects/${slug(movieartsetcontent.title)}`}
          legacyBehavior>
          <a>
            <div className="cardinfo">
              <img
                className="cardimage"
                src={movieartsetcontent.coverimageUrl}
                alt={movieartsetcontent.alt}
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
          .movieartsetcard:hover {
            transition-duration: 0.5s;
            transform: scale(1.2);
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
  );
}
export const FeaturedCard = ({ featuredcontent }) => {
  return (
    <div className="movieartsetcard-container">
      <div className="movieartsetcard">
        <Link
          href="/projects/[title]"
          as={`/projects/${slug(featuredcontent.title)}`}
          legacyBehavior>
          <a>
            <div className="cardinfo">
              <img
                className="cardimage"
                alt={featuredcontent.alt}
                src={featuredcontent.coverimageUrl}
              />
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
          .movieartsetcard:hover {
            transition-duration: 0.5s;
            transform: scale(1.2);
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
  );
}

export const LivePianoCard = ({ livepianocontent }) => {
  return (
    <div className="livepianocard-container">
      <div className="livepianocard">
        <Link
          href="/projects/[title]"
          as={`/projects/${slug(livepianocontent.title)}`}
          legacyBehavior>
          <a>
            <div className="cardinfo">
              <img
                className="cardimage"
                alt={livepianocontent.alt}
                src={livepianocontent.coverimageUrl}
              />
              <h3>{livepianocontent.title}</h3>
              <p className="year"> {livepianocontent.year}</p>
            </div>
          </a>
        </Link>
      </div>
      <style jsx>
        {`
          .livepianocard {
            width: 80%;
            margin: 0 auto;
            text-align: center;
          }
          .livepianocard:hover {
            transition-duration: 0.5s;
            transform: scale(1.2);
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
  );
}

export const PianoCard = ({ pianocontent }) => {
  return (
    <div className="pianocard-container">
      <div className="pianocard">
        <Link
          href="/projects/[title]"
          as={`/projects/${slug(pianocontent.title)}`}
          legacyBehavior>
          <a>
            <div className="cardinfo">
              <img
                className="cardimage"
                alt={pianocontent.alt}
                src={pianocontent.coverimageUrl}
              />
              <h3>{pianocontent.title}</h3>
              <p className="year"> {pianocontent.year}</p>
            </div>
          </a>
        </Link>
      </div>
      <style jsx>
        {`
          .pianocard {
            width: 80%;
            margin: 0 auto;
            text-align: center;
          }
          .pianocard:hover {
            transition-duration: 0.5s;
            transform: scale(1.2);
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
  );
}

export const FeaturedSsCard = ({ featuredsscontent }) => {
  return (
    <div className="pianocard-container">
      <div className="pianocard">
        <Link
          href="/projects/[title]"
          as={`/projects/${slug(featuredsscontent.title)}`}
          legacyBehavior>
          <a>
            <div className="cardinfo">
              <img
                className="cardimage"
                alt={featuredsscontent.alt}
                src={featuredsscontent.coverimageUrl}
              />
              <h3>{featuredsscontent.title}</h3>
              <p className="year"> {featuredsscontent.year}</p>
            </div>
          </a>
        </Link>
      </div>
      <style jsx>
        {`
          .pianocard {
            width: 80%;
            margin: 0 auto;
            text-align: center;
          }
          .pianocard:hover {
            transition-duration: 0.5s;
            transform: scale(1.2);
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
  );
}
