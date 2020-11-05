import React from 'react'

const LatestUpdate = () => {
  return (
    <div className="latestproject">
      <div className="title">
        <h2>Awakening the Sleeping Tiger!</h2>
      </div>
      <div className="latestvideo">
        <iframe
          className="responsive-iframe"
          title="awekeningtiger"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/s7n3F9bNFKg"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <style jsx>{`
        .latestproject {
          display: flex;
          flex-direction: column;
          width: 90%;
          margin: 0 auto;
        }
        .latestvideo{
          position: relative;
          overflow: hidden;
          width: 100%;
          padding-top: 56.25%;
        }
        .responsive-iframe {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          width: 100%;
          height: 100%;
        }
        .title{
          text-align: center;
        }
        
      
        
      `}</style>
    </div>
  )
}

export default LatestUpdate
