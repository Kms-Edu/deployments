import Head from 'next/head'
import React from 'react'
export default ({ children, title, description }) => (
    <main>
      <Head>
        <title>{title}</title>
        <meta name="Description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Head>
      {children}
      <style jsx global>{`
        * {
          font-family: Menlo, Monaco, 'Lucida Console', 'Liberation Mono',
            'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Courier New',
            monospace, serif;
        }
        body {
          margin: 0;
          padding: 25px 50px;
        }
      `}</style>
    </main>
  )
  