import React, { FC, useState } from 'react';
import { Button } from '@mui/material';

interface CommonButtonProps {
  children: React.ReactNode;
}

const CommonButton: FC<CommonButtonProps> = ({ children }) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const buttonStyle: React.CSSProperties = {
    color: isClicked ? 'pink' : 'white',
    borderColor: isClicked ? 'pink' : 'transparent',
    marginBottom: '5px',
  };

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <Button variant="outlined" style={buttonStyle} onClick={handleClick}>
      {children}
    </Button>
  );
};

export default CommonButton;