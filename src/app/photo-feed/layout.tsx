import { Typography } from '@mui/material'
import React from 'react'

const PhotoLayout = ({children , modal }:{children:React.ReactNode , modal:React.ReactNode}) => {
  return (
    <div>
        <header  ><Typography variant='h3' align='center' gutterBottom>Wonder of The World</Typography></header>
        {modal}
        {children}
    </div>
  )
}

export default PhotoLayout