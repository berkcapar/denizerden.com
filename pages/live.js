import Footer from '../components/Footer'
import Layout from '../components/Layout'

const Live = () => {
  return (
    <div>
      <Layout />
      <h2>NO CONCERTS AT THE MOMENT </h2>
      <div className="footer">
        <Footer />
      </div>
      <style jsx>{`
        h2 {
          text-align: center;
          margin-bottom: 23rem;
        }
        .footer {
        }
        @media (min-width: 675px) {
          h2 {
            margin-bottom: 30rem;
          }
        }
      `}</style>
    </div>
  )
}

export default Live
