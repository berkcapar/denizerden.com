import React from 'react'
import {CollabCard} from './WorkCard'

const CollabWorks = ({ collabrationcontents }) => {
  return (
    <div>
      <h1 className="headtext">Collabrations</h1>
      <div className="solocontentcards">
        {collabrationcontents.map((collabrationcontent) => (
          <CollabCard
            key={collabrationcontent.id}
            collabrationcontent={collabrationcontent}
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

export default CollabWorks
