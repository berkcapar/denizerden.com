import React from 'react'
import { PastShowCard } from './WorkCard'

const PastShowWorks = ({ pastshowscontents }) => {
  return (
    <div>
      <h1 id="pastshows" className="headtext">
        Past Shows
      </h1>
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
          .headtext {
            display: flex;
            justify-content: center;
            color: white;
          }
          .pastshowcards {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
          }
          @media screen and (min-width: 40em) {
            .pastshowcards {
              display: flex;
              flex-wrap: wrap;
              justify-content: space-between;
            }
          }
          @media screen and (min-width: 60em) {
            .pastshowcards {
            }
          }
        `}
      </style>
    </div>
  )
}

export default PastShowWorks
