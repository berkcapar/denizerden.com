const WorkCard = ({ solocontent }) => {
  return (
    <div className="workcard">
    <div> 
      {solocontent.coverimage}
      <h2 className="title">{solocontent.title}</h2>
      <p className="year"> {solocontent.year}</p>
      </div>
      <style jsx>
        {`
          .workcard {
            display: flex;
            color: white;
            flex: 0 1 24%;             
        }
        `}
      </style>
    </div>
  )
}

export default WorkCard
