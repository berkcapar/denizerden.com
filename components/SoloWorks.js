import React from 'react'
import {SoloCard} from './WorkCard'

const SoloWorks = ({ solocontents }) => {
  return (
    <div className="container">
      <h2 className="solo-title">Solo Works</h2>
      <div className="solocontentcards">
        {solocontents.map((solocontent) => (
          <SoloCard key={solocontent.id} solocontent={solocontent} />
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

export default SoloWorks
