import Link from 'next/link'

export const SoloCard = ({ solocontent }) => {
  return (
    <div className="solocard">
      <div>
        <Link href="/projects/[title]" as={`/projects/${solocontent.title}`}>
          <a>
            <img className="cardimage" src={solocontent.coverimageUrl} />
            <h2 className="title">{solocontent.title}</h2>
            <p className="year"> {solocontent.year}</p>
          </a>
        </Link>
      </div>
      <style jsx>
        {`
          .solocard {
            display: flex;
            color: white;
            flex: 0 1 24%;
          }
          .solocard a {
            text-decoration: none;
            color: white;
          }
          .cardimage {
            width: 100%;
            height: auto;
          }
          @media screen and (min-width: 40em) {
            .solocard {
              flex: 0 1 calc(50% - 1em);
            }
          }
          @media screen and (min-width: 60em) {
            .solocard {
              flex: 0 1 calc(25% - 1em);
            }
          }
        `}
      </style>
    </div>
  )
}

export const CollabCard = ({ collabrationcontent }) => {
  return (
    <div className="collabcard">
      <div>
        <Link
          href="/projects/[title]"
          as={`/projects/${collabrationcontent.title}`}
        >
          <a>
            <img src={collabrationcontent.coverimageUrl} />
            <h2>{collabrationcontent.title}</h2>
            <p> {collabrationcontent.year}</p>
          </a>
        </Link>
      </div>
      <style jsx>
        {`
          .collabcard {
            display: flex;
            color: white;
            flex: 0 1 24%;
          }
          .collabcard a {
            text-decoration: none;
            color: white;
          }
          @media screen and (min-width: 40em) {
            .collabcard {
              flex: 0 1 calc(25% - 1em);
            }
          }
          @media screen and (min-width: 60em) {
            .collabcard {
            }
          }
        `}
      </style>
    </div>
  )
}

export const PastShowCard = ({ pastshowscontent }) => {
  return (
    <div className="pastshowcard">
      <div>
        <Link
          href="/projects/[title]"
          as={`/projects/${pastshowscontent.title}`}
        >
          <a>
            <img src={pastshowscontent.coverimageUrl} />
            <h2>{pastshowscontent.title}</h2>
            <p> {pastshowscontent.year}</p>
          </a>
        </Link>
      </div>
      <style jsx>
        {`
          .pastshowcard {
            display: flex;
            color: white;
            flex: 0 1 24%;
          }
          .pastshowcard a {
            text-decoration: none;
            color: white;
          }
          @media screen and (min-width: 40em) {
            .pastshowcard {
              flex: 0 1 calc(25% - 1em);
            }
          }
          @media screen and (min-width: 60em) {
            .pastshowcard {
            }
          }
        `}
      </style>
    </div>
  )
}

export const MovieArtSetCard = ({ movieartsetcontent }) => {
  return (
    <div className="movieartsetcard">
      <div>
        <Link
          href="/projects/[title]"
          as={`/projects/${movieartsetcontent.title}`}
        >
          <a>
            <img src={movieartsetcontent.coverimageUrl} />
            <h2>{movieartsetcontent.title}</h2>
            <p> {movieartsetcontent.year}</p>
          </a>
        </Link>
      </div>
      <style jsx>
        {`
          .movieartsetcardcard {
            display: flex;
            color: white;
            flex: 0 1 calc(25% - 1em);
          }
          .movieartsetcard a {
            text-decoration: none;
            color: white;
          }
          @media screen and (min-width: 40em) {
            .movieartsetcard {
              flex: 0 1 calc(25% - 1em);
            }
          }
          @media screen and (min-width: 60em) {
            .movieartsetcard {
            }
          }
          @media screen and (min-width: 52em) {
            .movieartsetcard {
            }
          }
        `}
      </style>
    </div>
  )
}
