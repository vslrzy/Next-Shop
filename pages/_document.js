import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link rel="preconnect" href="<https://app.snipcart.com>" />
          <link rel="preconnect" href="<https://cdn.snipcart.com>" />
          <link
             rel="stylesheet"
             href="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.css"
          />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script async src="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.js"></script>
        <div hidden id="snipcart" data-config-modal-style="side" data-api-key="ODA1NmRmMWYtZTJjNS00MmRmLThlMTQtZWZhODczNDk5ZjI1NjM4MTY5NjY1ODc0MDQwMDIx"></div>
      </body>
    </Html>
  )
}
