import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Title } from '../../components/title/title';
import bea from '../../assets/bea.png';

export const Introduction = () => {
  const navigate = useNavigate();

  return (
    <div className="w-100 h-100 position-relative ">
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
          position: 'fixed',
          right: '0',
          borderRadius: '100px 0 0 0',
          bottom: '0',
          transform: 'translate(0%, 50%)',
          width: 'calc(8rem + 8vw)',
          height: '2rem',
          backgroundColor: '#c9e6e2',
        }}
      ></div>
      <img
        src={bea}
        alt="Bea"
        style={{
          width: 'calc(5rem + 10vw)',
          height: 'auto',
          position: 'absolute',
          bottom: '3rem',
          right: '1rem',
        }}
      />
      <div
        className="position-absolute"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        onClick={() => navigate('learning/introduction')}
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
          <span className="pulsing-text">Clique para começar</span>
        </div>
      </div>
    </div>
  );
};

export const Circle = ({
  color,
  top,
  left,
  right,
  bottom,
  size,
  transform,
}) => {
  return (
    <div
      style={{
        transform: transform || 'unset',
        transformOrigin: 'center',
        position: 'fixed',
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
