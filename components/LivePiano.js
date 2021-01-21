import { LivePianoCard } from '../components/WorkCard'
import Link from 'next/link'

const LivePiano = ({ livepiano }) => {
  return (
    <div>
      <h2 className="title">Piano Only Compositions</h2>
      <div className="livepiano-cards">
        {livepiano.map((livepianocontent) => (
          <LivePianoCard
            key={livepianocontent.id}
            livepianocontent={livepianocontent}
          />
        ))}
      </div>
      <Link href="/projects">
        <a>
          <div className="all-button">
            <p>Check em all!</p>
          </div>
        </a>
      </Link>
      <style jsx>
        {`
          .title {
            text-align: center;
          }
          .livepiano-cards {
            margin-top: 2rem;
          }
          .all-button {
            border: 1px solid white;
            border-radius: 0.8rem;
            width: 15%;
            margin: 3rem auto;
            text-align: center;
          }
          @media (min-width: 675px) {
            .livepiano-cards {
              display: flex;
              justify-content: center;
            }
          }
        `}
      </style>
    </div>
  )
}

export default LivePiano
