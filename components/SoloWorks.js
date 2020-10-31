import React from 'react'
import {SoloCard} from './WorkCard'

const SoloWorks = ({ solocontents }) => {
  return (
    <div>
      <h1 className="headtext">Solo Works</h1>
      <div className="solocontentcards">
        {solocontents.map((solocontent) => (
          <SoloCard key={solocontent.id} solocontent={solocontent} />
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

export default SoloWorks
