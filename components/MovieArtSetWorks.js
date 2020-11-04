import React from 'react'
import {MovieArtSetCard} from './WorkCard'

const MovieArtSetWorks = ({ movieartsetcontents }) => {
  return (
    <div className="container">
      <h2 id="movieartset" className="solo-title">Movie/Art/Mixtape</h2>
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
         .container{
          display:flex;
          flex-direction: column;
        }
        .solo-title{
          margin: 2rem auto;
        }
          
        `}
      </style>
    </div>
  )
}

export default MovieArtSetWorks
