import React from 'react'
import { Button } from '@mui/material'

export const ContainedButton = ({ text, onClick } : {text:any, onClick :any}) => {
  return (
    <div>
      <Button 
      variant='contained' 
      onClick={onClick}
      style={{maxWidth: '100px', maxHeight: '100px', minWidth: '150px', minHeight: '100px', marginBottom: '10px'}}
      sx={{whiteSpace: 'pre-line', boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)", backgroundColor: '#276a31'}}>
        {text}
      </Button>
    </div>
  )
}

export default ContainedButton
