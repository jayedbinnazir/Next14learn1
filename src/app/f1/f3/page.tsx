import Link from 'next/link'
import React from 'react'

const F3page = () => {
  return (
    <div>
        <h2>F3 page</h2>
        <Link href={'/f1/f2'} >f2</Link>
    </div>
  )
}

export default F3page