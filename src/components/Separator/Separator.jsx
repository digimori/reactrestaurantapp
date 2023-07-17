import React from 'react';
import { GiOldKing } from 'react-icons/gi';

const Separator = ({color}) => {
  return (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 2,
            borderColor: 'gold',
        }}
    />
  )
}

export default Separator