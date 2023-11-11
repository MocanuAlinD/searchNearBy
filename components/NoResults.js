import React from 'react'

const NoResults = ({judet, oras}) => {
  return (
    <div className=''>
      <h3 className='text-white fs-5'>Nu s-au gasit servicii in {`${judet}, ${oras}`}</h3>
    </div>
  )
}

export default NoResults
