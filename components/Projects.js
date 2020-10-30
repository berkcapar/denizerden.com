import React from 'react'

const Projects = () => {
  return (
    <div className="projects">
      <div className="latestnewhead">
        <h2>Listen Awakening the Sleeping Tiger!</h2>
      </div>
      <div className="latestvideo">
        <iframe
          title="awekeningtiger"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/s7n3F9bNFKg"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <style jsx>{`
        .projects {
          height: 800px;
          width: auto;
        }
        .latestnewhead {
          display: flex;
          justify-content: center;
          margin-top: 20px;
          color: #e1bfd1;
          font-weight: normal;
        }
        .latestvideo {
          display: flex;
          justify-content: center;
        }
      `}</style>
    </div>
  )
}

export default Projects
