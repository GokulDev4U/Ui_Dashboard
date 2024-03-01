import { Button } from '@mui/material'
import React, { useState } from 'react'

const CommonButton = ({children}) => {
  // const pinkButtonStyle = {
  //   color: 'pink', 
  //   borderColor: 'pink', 
  //   marginBottom:  '5px',
  // };
  const [isClicked, setIsClicked] = useState(false);

  const buttonStyle = {
    color: isClicked ? 'pink' : 'white',
    borderColor: isClicked ? 'pink' : 'transparent',
    marginBottom: '5px',
  };

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <Button variant="outlined"  style={buttonStyle} onClick={handleClick}>{children}</Button>
  )
}

export default CommonButton