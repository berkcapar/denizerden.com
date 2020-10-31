import React from 'react'
import {MovieArtSetCard} from './WorkCard'

const MovieArtSetWorks = ({ movieartsetcontents }) => {
  return (
    <div>
      <h1 id="movieartset" className="headtext">Movie/Art/Mixtape</h1>
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
          .headtext {
            display: flex;
            justify-content: center;
            color: white;
          }
          .movieartsetcards {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
          }
        `}
      </style>
    </div>
  )
}

export default MovieArtSetWorks
