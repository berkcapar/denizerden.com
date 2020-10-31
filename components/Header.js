import React from 'react'

const Header = () => {
  return (
   <div>
      <h1 className="headertext">DENİZ ERDEN</h1>
      <style jsx>
        {`
          .headertext {
            letter-spacing: 0.2em;
            font-weight: 500px;
            font-size: 60px;
            color: #e1bfd1;
          }
        `}
      </style>
      </div>
  )
}

export default Header
