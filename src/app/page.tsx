import Link from 'next/link'
import React from 'react'

const HomePage = () => {
  return (
    <main style={{ backgroundColor:'Highlight' }} >
        <h1>Welcome Home</h1>
        <Link href={'/blog'} >Blog</Link>
        <Link href={'/products'} >Product</Link>
    </main>
  )
}

export default HomePage