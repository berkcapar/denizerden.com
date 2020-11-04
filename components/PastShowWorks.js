import React from 'react'
import { PastShowCard } from './WorkCard'

const PastShowWorks = ({ pastshowscontents }) => {
  return (
    <div className="container">
      <h2 id="pastshows" className="solo-title">
        Past Shows
      </h2>
      <div className="pastshowcards">
        {pastshowscontents.map((pastshowscontent) => (
          <PastShowCard
            key={pastshowscontent.id}
            pastshowscontent={pastshowscontent}
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

export default PastShowWorks
