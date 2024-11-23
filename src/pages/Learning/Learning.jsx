import React from 'react';
import { Title } from '../../components/title/title';

export const Learning = () => {
  const [page, setPage] = React.useState('introduction');
  return (
    <div>
      <div
        style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
        }}
      >
        <Title fontSize="calc(2rem + 1vw)" />
      </div>
      {page === 'introduction' && <IntroductionPage setPage={setPage} />}
      {page === 'learningIntroduction' && (
        <LearningIntroductionPage setPage={setPage} />
      )}
      {page === 'learningCards' && <LearningCardsPage />}
    </div>
  );
};

const LearningCardsPage = () => {
  return (
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
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '0.5rem',
        paddingLeft: '2rem',
      }}
    ></div>
  );
};

const LearningIntroductionPage = ({ setPage }) => {
  return (
    <>
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
        <span className="pulsing-text" onClick={() => setPage('learningCards')}>
          Clique para continuar
        </span>
      </div>
    </>
  );
};

const IntroductionPage = ({ setPage }) => {
  return (
    <>
      <div
        style={{
          position: 'absolute',
          right: '0',
          borderRadius: '100px 0 0 0',
          bottom: '0',
          transform: 'translate(0%, 50%)',
          width: 'calc(8rem + 8vw)',
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
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  fontSize: 'calc(0.6rem)',
                  fontFamily: 'DarumadropOne-Regular',
                }}
              >
                O conhecimento correto sobre a febre é a chave para um
                tratamento eficaz dentro e fora do hospital
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
        <span
          className="pulsing-text"
          onClick={() => setPage('learningIntroduction')}
        >
          Clique para continuar
        </span>
      </div>
    </>
  );
};
