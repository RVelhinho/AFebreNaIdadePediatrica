import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Title } from '../../components/title/title';

export const Introduction = () => {
  const navigate = useNavigate();

  return (
    <div className="w-100 h-100 position-relative overflow-hidden">
      <Circle
        color="#c9e6e2"
        top="-4rem"
        right="60%"
        size="calc(10rem + 10vw)"
      />
      <Circle
        color="#fcb39a"
        top="5rem"
        right="-6rem"
        size="calc(7.5rem + 7.5vw)"
      />
      <Circle
        color="#f9e29e"
        top="calc(12.5rem + 7.5vw)"
        right="5%"
        size="calc(2.5rem + 12.5vw)"
      />
      <Circle
        color="#fcb39a"
        bottom="5rem"
        left="5rem"
        size="calc(7.5rem + 2.5vw)"
      />
      <Circle
        color="#f9e29e"
        bottom="0rem"
        left="0rem"
        size="calc(7.5rem + 7.5vw)"
        transform="translate(-50%, 50%)"
      />
      <div
        style={{
          position: 'absolute',
          right: '0',
          borderRadius: '100px 0 0 0',
          bottom: '0',
          transform: 'translate(0%, 50%)',
          width: 'calc(8rem + 8vw)',
          height: '4rem',
          backgroundColor: '#c9e6e2',
        }}
      ></div>
      <div
        className="position-absolute"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Title />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 'calc(1rem + 1vw)',
            fontFamily: 'DarumadropOne-Regular',
            fontWeight: 'semibold',
          }}
        >
          <span
            style={{
              color: '#4c4c4c',
              textAlign: 'center',
            }}
          >
            Pacote Informativo
          </span>
          <span className="pulsing-text" onClick={() => navigate('/learning')}>
            Clique para começar
          </span>
        </div>
      </div>
    </div>
  );
};

const Circle = ({ color, top, left, right, bottom, size, transform }) => {
  return (
    <div
      style={{
        transform: transform || 'unset',
        transformOrigin: 'center',
        position: 'absolute',
        top: top || 'unset',
        left: left || 'unset',
        right: right || 'unset',
        bottom: bottom || 'unset',
        width: size,
        height: size,
        opacity: '0.6',
        borderRadius: '50%',
        backgroundColor: color,
      }}
    ></div>
  );
};
