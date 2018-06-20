// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file
import Document, { Head, Main, NextScript } from 'next/document'
import Manifest from 'next-manifest/manifest'

export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render () {
    return (
      <html amp=''>
        <Head>
          <title>next-pwa-template</title>
          <Manifest href='/static/manifest/manifest.json' themeColor='#FFF' initialScale='1' />

          <meta charSet='utf-8' />
          <link rel='canonical' href='/' />
          <meta name='viewport' content='width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no' />

          <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto' />
          <style amp-custom=''>{`
            html, body {
              width: 100vw;
              height: 100vh;
              overflow: hidden;
            }
          `}</style>
          <script async src='https://cdn.ampproject.org/v0.js' />
        </Head>
        <body className='custom_class'>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
