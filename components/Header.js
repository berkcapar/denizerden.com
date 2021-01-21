import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div className="sitetitle">
      <Link href="/">
        <a>
          <h1>DENİZ ERDEN</h1>
          <h3>Pianist - Sound Artist</h3>
        </a>
      </Link>
      <style jsx>
        {`
          .sitetitle {
            display: flex;
            justify-content: center;
          }
          .sitetitle a {
            text-decoration: none;
          }
        `}
      </style>
    </div>
  )
}

export default Header
