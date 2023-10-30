import * as React from 'react';
import {useState} from 'react';
import { SvgIcon, IconButton} from '@mui/material';
import { ReactComponent as like}  from '../../../../images/Like.svg';
import { ReactComponent as likeBlue}  from '../../../../images/Like_filled.svg';

export default function LikeButton() {
  const [isLiked, setIsLiked] = useState(false);
  function handleLikeClick(e: any){
    e.stopPropagation();
    setIsLiked(!isLiked);
  }

  return (
    <IconButton sx={{width: '42px', height: '40px', border: '1px solid #1D6BF3', borderRadius: '6px', padding: '10px'}} onClick={handleLikeClick} disableRipple type='button'>
      {isLiked? <SvgIcon sx={{width: '20px', height: '20px'}} component ={likeBlue}></SvgIcon> : <SvgIcon sx={{width: '20px', height: '20px'}}  component ={like}></SvgIcon>}
    </IconButton>
  );
}
