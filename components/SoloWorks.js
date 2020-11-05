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
          width: 90%;
          margin: 0 auto;
          
        }
        .solo-title{
          margin: 2rem auto;
        }
        @media(min-width:675px){
          .solocontentcards{
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

export default SoloWorks
