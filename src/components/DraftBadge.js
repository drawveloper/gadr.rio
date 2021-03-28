import React from 'react';

function DraftBadge({ style = {} }) {
  return (
    <span
      style={{
        backgroundColor: '#444',
        color: 'white',
        marginLeft: '10px',
        borderRadius: '5px',
        padding: '2px 4px',
        ...style,
      }}
    >
      draft
    </span>
  );
}

export default DraftBadge;
