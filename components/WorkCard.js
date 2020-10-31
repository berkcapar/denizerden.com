const WorkCard = ({ solocontent }) => {
  return (
    <div className="workcard">
      <img>{solocontent.coverimage}</img>
      <h2 className="title">{solocontent.title}</h2>
      <p className="year"> {solocontent.year}</p>
      <style jsx>
        {`
          .workcard {
            display: flex;
            color: white;
            flex: 0 1 33%;          
        }
        `}
      </style>
    </div>
  )
}

export default WorkCard
