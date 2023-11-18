import Head from 'next/head'
import React from 'react'

const PageTitle = ({text}) => {
  return (
    <Head>
      <title>{text}</title>
    </Head>
  )
}

export default PageTitle
