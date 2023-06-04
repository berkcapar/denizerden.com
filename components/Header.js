import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div className="sitetitle">
      <Link href="/" legacyBehavior>
        <a>
          <h1>DENİZ ERDEN</h1>
          <h3>Pianist - Composer</h3>
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
          @media (max-width: 675px) {
            .sitetitle h3 {
              text-align: center;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Header
