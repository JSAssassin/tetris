import React from 'react';
import {StyledCell} from './styles/StyledCell';
import { TETROMINOS } from '../tertominos';

const Cell = ({ type }) => {
  return <StyledCell type={type} color={TETROMINOS[type].color} />
};

export default Cell;
