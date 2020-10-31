export const SoloCard = ({ solocontent }) => {
  return (
    <div className="solocard">
      <div>
        <img src={solocontent.coverimageUrl} />
        <h2 className="title">{solocontent.title}</h2>
        <p className="year"> {solocontent.year}</p>
      </div>
      <style jsx>
        {`
          .solocard {
            display: flex;
            color: white;
            flex: 0 1 24%;
          }
        `}
      </style>
    </div>
  )
}

export const CollabCard = ({ collabrationcontent }) => {
  return (
    <div className="collabcard">
      <div>
      <img src={collabrationcontent.coverimageUrl} />
        <h2>{collabrationcontent.title}</h2>
        <p> {collabrationcontent.year}</p>
      </div>
      <style jsx>
        {`
          .collabcard {
            display: flex;
            color: white;
            flex: 0 1 24%;
          }
        `}
      </style>
    </div>
  )
}


