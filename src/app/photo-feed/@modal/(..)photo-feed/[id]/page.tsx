import { Box, Typography } from '@mui/material'
import React from 'react'

const ModalPage = () => {
  return (
    <Box sx={{ width:'100vw' , height:'100vh' , display:'flex' , justifyContent:'center', alignItems:'center' }} >
        <Typography variant='h1' align='center' >Modal Page Opened</Typography>
    </Box>
  )
}

export default ModalPage