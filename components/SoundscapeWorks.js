import React from 'react'
import { SoundscapeCard } from './WorkCard'

const SoundscapeWorks = ({ soundscapecontents }) => {
  return (
    <div className="container">
      <h2 id="soundscape" className="solo-title">
        Soundscapes
      </h2>
      <div className="collabcontentcards">
        {soundscapecontents.map((soundscapecontent) => (
          <SoundscapeCard
            key={soundscapecontent.id}
            soundscapecontent={soundscapecontent}
          />
        ))}
      </div>
      <style jsx>
        {`
          .container {
            display: flex;
            flex-direction: column;
            width: 90%;
            margin: 0 auto;
          }

          @media (min-width: 675px) {
            .collabcontentcards {
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

export default SoundscapeWorks
