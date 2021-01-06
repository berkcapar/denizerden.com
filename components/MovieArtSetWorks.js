import React from 'react'
import { MovieArtSetCard } from './WorkCard'

const MovieArtSetWorks = ({ movieartsetcontents }) => {
  return (
    <div className="container">
      <h2 id="movieartset" className="solo-title">
        Video - Mixtape
      </h2>
      <div className="movieartsetcards">
        {movieartsetcontents.map((movieartsetcontent) => (
          <MovieArtSetCard
            key={movieartsetcontent.id}
            movieartsetcontent={movieartsetcontent}
          />
        ))}
      </div>
      <style jsx>
        {`
          .container {
            display: flex;
            flex-direction: column;
            width: 90%;
            margin: 0 auto;
          }

          @media (min-width: 675px) {
            .movieartsetcards {
              display: flex;
              flex-wrap: wrap;
              justify-content: space-around;
            }
          }
        `}
      </style>
    </div>
  )
}

export default MovieArtSetWorks
