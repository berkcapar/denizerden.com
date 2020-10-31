import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
   <div className="header">
     <Link href="/">
      <a><h1 className="headertext">DENİZ ERDEN</h1></a>
      </Link>
      <style jsx>
        {`
          .headertext {
            letter-spacing: 0.2em;
            font-weight: 500px;
            font-size: 60px;
            color: #e1bfd1;
          }
          .header a {
            text-decoration:none
          }
        `}
      </style>
      </div>
  )
}

export default Header
