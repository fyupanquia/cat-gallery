import React from 'react'
import Layout from '../components/Layout'
import Link from 'next/link'

export default class Error extends React.Component {

  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode }
  }

  render() {
    let { statusCode } = this.props
    statusCode *=1

    return (
      <Layout title="Oh no :(">
        { statusCode === 404 ?

          <main role="main" className="inner cover">
            <div className="message">
              <h2>This page does not exists</h2>
              <img  src="/static/404.png"/>
              <small><Link href="/"><button type="button" className="btn btn-outline-success">Go home</button></Link></small>
            </div>
          </main>
          :
          <main role="main" className="inner cover">
            <div className="message">
              <h2>This page is not working correctly</h2>
              <img  src="/static/503.png"/>
              <small>Try again in a few seconds</small>
            </div>
          </main>
         }
         <style jsx>{`
          .message {
            padding: 100px 30px;
            text-align: center;
          }
         `}</style>
      </Layout>
    )
  }
}