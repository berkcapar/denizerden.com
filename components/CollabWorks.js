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
          width: 90%;
          margin: 0 auto;
        }
        .solo-title{
          margin: 2rem auto;
        }
        @media(min-width:675px){
          .collabcontentcards{
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

export default CollabWorks
