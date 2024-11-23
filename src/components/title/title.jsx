import React from 'react';

export const Title = ({ fontSize = 'calc(3rem + 2vw)' }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        justifyContent: 'center',
        fontSize: fontSize,
        fontWeight: 'bold',
        fontFamily: 'DarumadropOne-Regular',
        lineHeight: '1.2',
      }}
    >
      <span
        style={{
          color: '#fcb39a',
        }}
      >
        A FEBRE
      </span>
      <span
        style={{
          color: '#f9e29e',
        }}
      >
        NA IDADE
      </span>
      <span
        style={{
          color: '#c9e6e2',
        }}
      >
        PEDIÁTRICA
      </span>
    </div>
  );
};
