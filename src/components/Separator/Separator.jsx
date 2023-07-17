import React from 'react';

const Separator = ({color}) => {
  return (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 1,
        }}
    />
  )
}

export default Separator