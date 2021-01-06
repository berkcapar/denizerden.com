import React from 'react'
import ReactMarkdown from 'react-markdown'
import Layout from '../components/Layout'

export async function getStaticProps() {
  const siteData = await import(`../config.json`)
  const fs = require('fs')
  const matter = require('gray-matter')
  const markdownContent = fs.readFileSync(
    `${process.cwd()}/content/who.md`,
    'utf-8'
  )
  const { data, content } = matter(markdownContent)
  return {
    props: {
      data,
      content,
      title: siteData.default.title,
      description: siteData.default.description
    }
  }
}

const Who = ({ content, data }) => (
  <div>
    <Layout />
    <div className="who-content">
      <h2 className="deniz-erden">DENİZ ERDEN</h2>
      <ReactMarkdown children={content} />
    </div>
    <style jsx>
      {`
        .who-content {
          width: 70%;
          margin: 0 auto;
        }
        .deniz-erden {
          text-align: center;
          margin-bottom: 1.5rem;
        }
      `}
    </style>
  </div>
)

export default Who
