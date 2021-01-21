import { PianoCard } from './WorkCard'

const PianoWorks = ({ pianocontents }) => {
  return (
    <div className="container">
      <h2 id="pianopieces" className="solo-title">
        Piano Compositions
      </h2>
      <div className="pianocontentcards">
        {pianocontents.map((pianocontent) => (
          <PianoCard key={pianocontent.id} pianocontent={pianocontent} />
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
            .pianocontentcards {
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

export default PianoWorks
