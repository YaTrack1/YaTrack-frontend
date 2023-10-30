import * as React from 'react';
import { FC } from 'react';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { IFiltredSubMenu } from './TypesFiltredSubMenu';

export const FiltredSubMenu: FC<IFiltredSubMenu> = ({
  handleFiltredSubBtnClick,
  buttonInfo,
  activeMenu,
}) => {
  const textForBtn = buttonInfo.submenu;
  const backGrColorBtn = buttonInfo.color;
  const [isActiveBtn, setIsActiveBtn] = useState(false);
  const handleClick = (textForBtn: string) => {
    handleFiltredSubBtnClick(textForBtn);
    setIsActiveBtn(!isActiveBtn);
  };
  useEffect(() => {
    setIsActiveBtn(false);
  }, [activeMenu]);
  const CssButton = styled(Button)({
    border: '0',
    color: 'black',
    borderRadius: '12px',
    textTransform: 'none',
    fontSize: 16,
    '&:hover': {
      backgroundColor: `${isActiveBtn ? `${backGrColorBtn}` : '#DDE0E4'}`,
    },
  });
  return (
    <CssButton
      onClick={() => handleClick(textForBtn)}
      sx={{
        backgroundColor: `${isActiveBtn ? `${backGrColorBtn}` : '#DDE0E4'}`,
      }}
      disableRipple
      disableElevation
    >
      {textForBtn}
    </CssButton>
  );
};
