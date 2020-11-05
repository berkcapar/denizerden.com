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
          width: 90%;
          margin: 0 auto;
        }
        .solo-title{
          margin: 2rem auto;
        }
        @media(min-width:675px){
          .pastshowcards{
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

export default PastShowWorks
