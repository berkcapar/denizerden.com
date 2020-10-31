import React from 'react'
import { PastShowCard } from './WorkCard'

const PastShowWorks = ({ pastshowscontents }) => {
  return (
    <div>
      <h1 className="headtext">Past Shows</h1>
      <div className="solocontentcards">
        {pastshowscontents.map((pastshowscontent) => (
          <PastShowCard key={pastshowscontent.id} pastshowscontent={pastshowscontent} />
        ))}
      </div>
      <style jsx>
        {`
          .headtext {
            display: flex;
            justify-content: center;
            color: white;
          }
          .solocontentcards {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
          }
        `}
      </style>
    </div>
  )
}

export default PastShowWorks
