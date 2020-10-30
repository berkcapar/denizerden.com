import Link from 'next/link'

const Navigation = () => {
    return ( 
        <nav>
      <Link href = "/who"><a>BIO</a></Link>
      <Link href = "/"><a>PROJECTS</a></Link>
      <Link href = "/live"><a>LIVE</a></Link>
      </nav>
    )
}

export default Navigation