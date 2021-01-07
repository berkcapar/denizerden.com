import Footer from '../components/Footer'
import Layout from '../components/Layout'

const Live = () => {
  return (
    <div>
      <Layout />
      <h2>NO CONCERTS AT THE MOMENT </h2>
      <Footer />
      <style jsx>{`
        h2 {
          text-align: center;
          margin-bottom: 3rem;
        }
      `}</style>
    </div>
  )
}

export default Live
