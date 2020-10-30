import React from 'react'

const Header = () => {
  return (
    <div className="headertext">
      <h1>DENİZ ERDEN</h1>
      <style jsx>
        {`
          .headertext {
            letter-spacing: 0.2em;
            font-weight: 500px;
            font-size: 30px;
            display: flex;
            justify-content: center;
            color: #e1bfd1;
          }
        `}
      </style>
    </div>
  )
}

export default Header
