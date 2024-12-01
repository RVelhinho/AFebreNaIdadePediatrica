import React from 'react';
import { Title } from '../../../../components/title/title';

export const IntroductionPage = ({ setPage }) => {
  return (
    <div onClick={() => setPage('learningIntroduction')}>
      <div
        style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
        }}
      >
        <Title fontSize="calc(2rem + 1vw)" />
      </div>
      <div
        style={{
          position: 'fixed',
          zIndex: '1',
          right: '0',
          borderRadius: '100px 0 0 0',
          bottom: '0',
          transform: 'translate(0%, 50%)',
          width: 'calc(10rem + 8vw)',
          height: '4rem',
          backgroundColor: '#f9e29e',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '0.5rem',
          paddingLeft: '2rem',
        }}
      >
        <span
          className="small-text"
          style={{ fontWeight: 'bold', fontStyle: 'italic' }}
        >
          Nota Introdutória
        </span>
      </div>

      <div
        style={{
          position: 'absolute',
          top: '13.5rem',
          left: '2rem',
          maxWidth: 'calc(100% - 4rem)',
        }}
      >
        <span className="sub-title">SABIA QUE,</span>
        <span className="small-text">
          Em idade pediátrica, a febre, sem qualquer outra sintomalogia
          associada, é a razão mais frequente para a procura por cuidados de
          saúde, correspondendo a cerca de 50% das admissões dos serviços de
          urgência pediátrica.
          <span style={{ marginTop: '0.5rem', display: 'block' }}>
            A febre acarreta uma conotação negativa, sendo interpretada, por
            quem cuida de crianças, como um sinal de risco e gravidade da
            doença.
            <span className="reference-numbers"> 1, 2, 3, 4</span>
          </span>
        </span>
        <div style={{ height: '1rem' }}></div>
        <div style={{ maxWidth: '100%' }}>
          <div className="row mx-0 w-100">
            <div className="col-6 px-0">
              <span className="sub-title">ISTO RESULTA,</span>
              <span className="small-text">
                Em sentimentos de preocupação, medo, ansiedade e stress, assim
                como um aumento pela procura por assistência em saúde, muitas
                vezes, desnecessáriamente.
                <span className="reference-numbers"> 1, 2, 3, 5, 6</span>
              </span>
            </div>
            <div className="col px-0"></div>
            <div className="col-auto px-0 d-flex align-items-center">
              <div
                style={{
                  width: '8rem',
                  height: '8rem',
                  borderRadius: '50%',
                  backgroundColor: '#c9e6e2',
                  padding: '1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  fontSize: 'calc(0.6rem)',
                  fontFamily: 'DarumadropOne-Regular',
                }}
              >
                <span>
                  O conhecimento correto sobre a febre é a chave para um
                  tratamento eficaz dentro e fora do hospital
                  <span className="reference-numbers"> 3, 5</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div style={{ height: '1rem' }}></div>
        <div style={{ maxWidth: '50%' }}>
          <span className="sub-title">DESTA FORMA,</span>
          <span className="small-text">
            Esta ferramenta tem como principal objetivo ajudá-lo a compreender a
            febre na idade pediátrica de forma descomplicada!
          </span>
        </div>
        <div style={{ height: '3rem' }}></div>
        <span className="pulsing-text">Clique para continuar</span>
        <div style={{ height: '3rem' }}></div>
      </div>
    </div>
  );
};
