export const metadata = {
    title:'About'
}

import { Box, Paper } from '@mui/material';
import Typography from '@mui/material/Typography';


const About = () => {
  return (
   <Paper sx={{ padding:'1rem' , width:'50%' , mx:'auto' }} elevation={6} >
    <Typography variant='h1' align='center' overflow={'hidden'} >About Page</Typography>
    <Typography variant='h3' align='center' >Thanks To Material UI</Typography>
   </Paper>
  )
}

export default About