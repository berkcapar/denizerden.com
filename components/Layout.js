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
      <div className="headcontainer"> 
      <div className="header"><Header/></div>
      <div className= "navigation"><Navigation/></div>
      </div>
      <main>{children}</main>
      <style jsx>{`
      .header{
        display:flex;
        justify-content: center;
        height: 60px;       
      }
      .navigation{
        display:flex;
        justify-content: flex-end;
      }`
}

      </style>
      
    </div>
  )
}
export default Layout
