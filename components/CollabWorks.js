import React from 'react'
import {CollabCard} from './WorkCard'

const CollabWorks = ({ collabrationcontents }) => {
  return (
    <div className="container">
      <h2 id="collabrations" className="solo-title">Collabrations</h2>
      <div className="collabcontentcards">
        {collabrationcontents.map((collabrationcontent) => (
          <CollabCard
            key={collabrationcontent.id}
            collabrationcontent={collabrationcontent}
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

export default CollabWorks
