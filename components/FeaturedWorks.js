import React from 'react'
import { FeaturedCard } from '../components/WorkCard'
import Link from 'next/link'

const FeaturedWorks = ({ featuredcontents }) => {
  return (
    <div>
      <h2 className="title">Check out my Featured Works</h2>
      <div className="featured-cards">
        {featuredcontents.map((featuredcontent) => (
          <FeaturedCard
            key={featuredcontent.id}
            featuredcontent={featuredcontent}
          />
        ))}
      </div>
      <Link href="/projects" legacyBehavior>
        <a>
          <div className="all-button">
            <p>See All My Work</p>
          </div>
        </a>
      </Link>
      <style jsx>
        {`
          .title {
            text-align: center;
          }
          .featured-cards {
            margin-top: 2rem;
          }
          .all-button {
            border: 1px solid white;
            border-radius: 0.8rem;
            width: 30%;
            margin: 3rem auto;
            text-align: center;
          }
          @media (min-width: 675px) {
            .featured-cards {
              display: flex;
              justify-content: center;
            }
            .all-button {
              width: 10%;
            }
          }
        `}
      </style>
    </div>
  );
}

export default FeaturedWorks
