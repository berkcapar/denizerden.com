const WelcomeCard = () => {
  return (
    <div className="w-img">
      <img className="image" src="/denizgiris.png" />
      <style jsx>
        {`
          .w-img {
            display: flex;
            justify-content: center;
          }
          .image {
            width: 100%;
          }
        `}
      </style>
    </div>
  )
}

export default WelcomeCard
