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
        <script
          async
          defer
          data-domain="denizerden.com"
          src="https://plausible.io/js/plausible.js"
        ></script>
        <meta
          name="google-site-verification"
          content="I88ImTnEJlG0q0jtr99CvVaXWedMCrMmi3Theds5rqs"
        />

        <title>Deniz Erden - Pianist / Sound Artist</title>
        <meta name="description" content="Deniz Erden" />
      </Head>
      <div className="container">
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
            display: flex;
            justify-content: space-between;
          }
          @media (max-width: 675px) {
            .container {
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
