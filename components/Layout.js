const { default: Navigation } = require('./Navigation')
import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <script
          src="https://kit.fontawesome.com/c0e82ecf0e.js"
          crossOrigin="anonymous"
        ></script>
        <title>Deniz Erden - Official Web Site</title>
        <meta name="description" content="Deniz Erden" />
      </Head>

      <div className="container container-nav">
        <div className="header">
          <Header />
        </div>
        <div className="nav">
          <Navigation />
        </div>
      </div>
      <main>{children}</main>

      <style jsx>
        {`
          .container {
            width: 90%;
            max-width: 1200px;
            margin: 0 auto;
          }
          .container-nav {
            display: flex;
            justify-content: space-between;
          }
          @media (max-width: 675px) {
            .container-nav {
              flex-direction: column;
            }
          }
          .header {
            display: flex;
            justify-content: center;
          }
        `}
      </style>
    </div>
  )
}
export default Layout
