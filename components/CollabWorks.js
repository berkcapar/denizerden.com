import React from 'react'
import {CollabCard} from './WorkCard'

const CollabWorks = ({ collabrationcontents }) => {
  return (
    <div>
      <h1 id="collabrations" className="headtext">Collabrations</h1>
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
          .headtext {
            display: flex;
            justify-content: center;
            color: white;
          }
          .collabcontentcards {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
          }
          @media screen and (min-width: 40em) {
            .collabcontentcards {
              display: flex;
              flex-wrap: wrap;
              justify-content: space-around;
            }
          }
          @media screen and (min-width: 60em) {
            .collabcontentcards {
            }
          }
        `}
      </style>
    </div>
  )
}

export default CollabWorks
