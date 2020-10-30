const { default: Navigation } = require('./Navigation')
import Head from 'next/head'
import Header from './Header'

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Deniz Erden</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width= device-width"
        />
      </Head>
      <Header/>
      <Navigation />
      <main>{children}</main>
    </div>
  )
}
export default Layout
