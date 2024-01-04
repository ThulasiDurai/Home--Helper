import { Typography } from '@mui/material'
import React from 'react'

const Title = ({ text, textAlign }) => {
  return (
    <Typography  
    variant='h4'
    component='h3'
    sx={{ 
      fontWeight: '700',
      textAlign: textAlign,
   }} 
    style={{width : '500px'}}>
      {text}
    </Typography>
  )
}

export default Title