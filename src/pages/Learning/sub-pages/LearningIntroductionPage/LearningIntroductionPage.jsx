import React from 'react';
import { Title } from '../../../../components/title/title';

export const LearningIntroductionPage = ({ setPage }) => {
  return (
    <div onClick={() => setPage('learningCards')}>
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
          position: 'absolute',
          right: '0',
          borderRadius: '100px 0 0 0',
          bottom: '0',
          transform: 'translate(0%, 50%)',
          width: 'calc(8rem + 8vw)',
          height: '2rem',
          backgroundColor: '#c9e6e2',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '0.5rem',
          paddingLeft: '2rem',
        }}
      ></div>
      <div
        style={{
          position: 'absolute',
          top: '13.5rem',
          left: '2rem',
          maxWidth: 'calc(100% - 4rem)',
        }}
        onClick={() => setPage('learningCards')}
      >
        <span
          className="title"
          style={{
            color: '#f9e29e',
          }}
        >
          Perguntas
        </span>
        <span
          className="title"
          style={{
            marginLeft: '1rem',
            color: '#c9e6e2',
          }}
        >
          <span style={{ color: '#fcb39a' }}>&</span> Respostas
        </span>
        <div style={{ height: '1rem' }}></div>
        <span className="small-text bold">
          De seguida irá encontrar algumas perguntas sobre a febre em idade
          pediátrica, assim como as respetivas respostas, de acordo com a
          evidência científica mais atual. Poderá ver e rever este pacote
          informativo as vezes que quiser! Se não compreender alguma da
          informação, presente neste pacote, não hesite em esclarecer com um
          profissional de saúde de referência!
        </span>
        <div
          className="w-100 d-flex justify-content-end"
          style={{ marginTop: '1rem', marginBottom: '6rem' }}
        >
          <span className="small-text">Atualizado em Novembro de 2024.</span>
        </div>
        <span className="pulsing-text" style={{ marginBottom: '2rem' }}>
          Clique para continuar
        </span>
      </div>
    </div>
  );
};
