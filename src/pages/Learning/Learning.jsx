import React, { useEffect, useMemo } from 'react';
import { Title } from '../../components/title/title';
import { Swiper, SwiperSlide } from 'swiper/react';
import bea from '../../assets/bea.png';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import ReactMarkdown from 'react-markdown';
import { Circle } from '../Introduction/Introduction';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

export const Learning = () => {
  const location = useLocation();
  const page = location.pathname.split('/').pop();
  const navigate = useNavigate();

  // Navigate to the current page route whenever the page changes

  const handleSetPage = (page) => {
    const url =
      page === 'introduction'
        ? 'introduction'
        : page === 'learningIntroduction'
        ? 'cards-introduction'
        : page === 'learningCards'
        ? 'cards'
        : page === 'bibliography'
        ? 'bibliography'
        : '';
    navigate(`/learning/${url}`);
  };

  const cards = useMemo(() => {
    return [
      {
        id: 1,
        question: 'A febre é considerada um sinal ou uma doença?',
        answer: `A febre é considerada um sinal e não uma doença. Surge como um mecanismo de defesa natural e adaptativo do organismo face a variados tipos de agressões, habitualmente agentes infecciosos.`,
      },
      {
        id: 2,
        question: 'Quando se considera que uma criança está com febre?',
        answer: `Considera-se que uma criança tem febre quando existe uma temperatura igual ou superior aos seguintes valores, de acordo com a via de avaliação:
  
  - **Axilar**: > 37,4°C
  - **Oral**: > 37,6°C
  - **Retal**: > 38,0°C
  - **Timpânica**: > 37,6°C
  
  Importa referir que, muitas vezes, estas avaliações apresentam falsos negativos e, ocasionalmente, falsos positivos.`,
      },
      {
        id: 3,
        question: 'Quais são os sinais de alarme, na criança com febre?',
        answer: `Os pais/cuidadores são os mais experientes em relação às suas crianças, pelo que a sua opinião deve ser sempre valorizada. No entanto, existem sinais de alarme que devem ser observados em crianças com febre, como:
  
  - Febre em lactentes com idade inferior a 3 meses;
  - Febre com mais de 3 a 4 dias de evolução, sem sinais de melhoria e que não cede a medicação;
  - Temperatura corporal superior a 40°C;
  - Presença de manchas no corpo, que não desaparecem quando pressionadas;
  - Criança pálida;
  - Presença de convulsões, dificuldade respiratória, vómitos persistentes ou desidratação;
  - Criança mais sonolenta, apática ou sem vontade de brincar;
  - Febre em criança com doença crónica.`,
      },
      {
        id: 4,
        question:
          'Qual é o local mais correto para a avaliação da temperatura corporal?',
        answer: `A avaliação da temperatura deve ser efetuada, preferencialmente, por via retal, pois fornece a temperatura mais semelhante à temperatura central do corpo.
  
  No entanto, as outras vias de avaliação da temperatura (axilar e timpânica) não estão incorretas, sendo a axilar a mais utilizada.
  
  De realçar que, durante a avaliação da temperatura, deve ser utilizado um equipamento apropriado que cumpra as indicações de utilização fornecidas pelos fabricantes.`,
      },
      {
        id: 5,
        question: 'Como é avaliada corretamente a temperatura axilar?',
        answer: `Para uma avaliação correta da temperatura axilar, siga os seguintes passos:
  
  1. Coloque o termómetro digital desligado na axila;
  2. Mantenha o braço firmemente encostado ao tronco durante cinco minutos;
  3. Após os cinco minutos, ligue o termómetro;
  4. Aguarde pelo apito antes de retirar o termómetro da axila e verifique o valor indicado.`,
      },
    ];
  }, []);

  return (
    <div>
      {page === 'introduction' && <IntroductionPage setPage={handleSetPage} />}
      {page === 'cards-introduction' && (
        <LearningIntroductionPage setPage={handleSetPage} />
      )}
      {page === 'cards' && (
        <LearningCardsPage cards={cards} setPage={handleSetPage} />
      )}
      {page === 'bibliography' && (
        <BibliographyPage cards={cards} setPage={handleSetPage} />
      )}
    </div>
  );
};

const BibliographyPage = ({ setPage }) => {
  const references = useMemo(() => {
    return `
- Direção-Geral da Saúde. (2018). *Orientação 004/2018: Febre na Criança e no Adolescente – Definição, Medição e Ensino aos Familiares/Cuidadores*. [Link](https://www.dgs.pt/directrizes-da-dgs/orientacoes-e-circulares-informativas/orientacao-n-0042018-de-030820181.aspx)

- Direção-Geral da Saúde [DGS]. (2018). *Norma 014/2018: Processo Assistencial Integrado da Febre de Curta Duração em Idade Pediátrica*. [Link](https://www.sip-spp.pt/media/zbcpste3/febre-curta-durac-a-o-processo-assistencial-integrado-2018-dgs.pdf)

- Dullius, W., & Longaray Fernandes, G. (2024). *Non-pharmacological nursing management of pediatric patients with fever and hyperthermia: a systematic review / Manejo não farmacológico da enfermagem em pacientes pediátricos com febre e hipertermia: uma revisão sistemática*. *Revista de Pesquisa Cuidado é Fundamental Online*, 16, 1–11. [Link](https://doi.org/10.9789/2175-5361.rpcfo.v16.13015)

- Ferreira, C. A. G., Pereira, C. de O., Santos, D. H. S., Borges, J. D. C., & Batalha, L. M. C. (2022). *Medição da temperatura corporal em crianças: Estudo comparativo entre o método de medição axilar e timpânico*. *Revista de Enfermagem Referencia*, VI(1). [Link](https://doi.org/10.12707/RV21008)

- Instituto Nacional de Emergência Médica [INEM], Departamento de Formação em Emergência Médica [DFEM], Departamento de Emergência Médica [DEM], Martins, C., Gala, C., Abecasis, F., Campos, G., Feu, J., Póvoa, J., Neto, P., Fonseca, P., & Soares, P. (2024). *Febre*. *TAS - Emergências Pediátricas*, 40–42. [Link](https://www.prociv.azores.gov.pt/fotos/documentos/1716974304.pdf)

- National Institute for Health and Care Excellence. (2021). *NICE Gideline no 143: Fever in under 5s: assessment and initial management NICE guideline*. [Link](https://www.ncbi.nlm.nih.gov/books/NBK552086/)

- Pitoli, P. J., Duarte, B. K., Fragoso, A. A., Damaceno, D. G., & Marin, M. J. S. (2021). *Febre em crianças: procura de pais por serviços médicos de emergência*. *Ciência & Saúde Coletiva*, 26(2), 445–454. [Link](https://doi.org/10.1590/1413-81232021262.40782020)

- Salgado, M. (2014). *A definição de febre deve basear-se no conhecimento e não na tradição*. *Saúde Infantil*, 36(2), 55–57. [Link](https://doi.org/10.1016/j.nmd.2013.12.009)

- Silva, C., Bica, I., Duarte, J., & Dias, M. (2020). *Parents/Caregivers of children with fever – attitudes in emergency context*. *Millenium: Journal of Education, Technologies, and Health*, 2(Especial 7), 17–25. [Link](https://doi.org/10.29352/mill0207e.02.00388)

- Vaz, F., & Trigo, R. (2020). *A Criança e o Jovem em Contexto de Urgência*. In A. L. Ramos & M. do C. Barbieri-Figueiredo (Eds.), *Enfermagem em Saúde da Criança e do Jovem* (pp. 293–309). Lidel.
`;
  });
  return (
    <>
      <Circle
        color="#c9e6e2"
        top="0rem"
        right="40%"
        size="calc(7.5rem + 7.5vw)"
        transform="translate(0%, -50%)"
      />
      <Circle
        color="#fcb39a"
        top="2rem"
        right="0%"
        size="calc(7.5rem + 7.5vw)"
        transform="translate(50%, 0%)"
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
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '0.5rem',
          paddingLeft: '2rem',
        }}
      ></div>
      <div
        style={{
          position: 'fixed',
          bottom: '2rem',
          left: '2rem',
        }}
      >
        <Title fontSize="calc(1.5rem + 0.75vw)" />
      </div>
      <img
        src={bea}
        alt="Bea"
        style={{
          width: 'calc(5rem + 10vw)',
          height: 'auto',
          position: 'fixed',
          bottom: '3rem',
          right: '1rem',
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: '100%',
          top: '15rem',
          height: 'calc(100% - 25rem)',
          left: '50%',
          transform: 'translate(-50%, 0)',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <span
          className="link bold"
          onClick={() => setPage('learningCards')}
          style={{
            marginLeft: '2rem',
          }}
        >
          Voltar
        </span>
        <span
          className="sub-title"
          style={{
            fontFamily: 'DarumadropOne-Regular',
            marginLeft: '2rem',
            color: '#4c4c4c',
          }}
        >
          REFERÊNCIAS BIBLIOGRÁFICAS
        </span>
        <span
          className="small-text flex-grow-1 overflow-auto"
          style={{ minHeight: 0 }}
        >
          <ReactMarkdown>{references}</ReactMarkdown>
        </span>
      </div>
    </>
  );
};

const LearningCardsPage = ({ cards, setPage }) => {
  const [selectedCard, setSelectedCard] = React.useState(1);
  const [cardFlipped, setCardFlipped] = React.useState(false);
  return (
    <>
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
      </div>
      <div
        style={{
          position: 'absolute',
          width: '100%',
          top: '18rem',
          left: '50%',
          transform: 'translate(-50%, 0)',
        }}
      >
        <div
          className="w-100 d-flex justify-content-center"
          style={{ marginBottom: '2rem' }}
        >
          <span className="sub-title">
            {selectedCard}/{cards.length}
          </span>
        </div>
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          pagination={true}
          spaceBetween={0}
          modules={[EffectCoverflow]}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 8,
            slideShadows: false,
          }}
          onSlideChange={(swiper) => {
            setSelectedCard(swiper.activeIndex + 1);
            setCardFlipped(false);
          }}
        >
          {cards.map((card) => (
            <SwiperSlide key={card.id}>
              <div
                className={
                  cardFlipped && card.id === selectedCard
                    ? 'my-card flipped'
                    : 'my-card'
                }
                onClick={() => setCardFlipped(!cardFlipped)}
              >
                <div className="my-card__front">
                  <span className="title bold" style={{ textAlign: 'center' }}>
                    {card.question}
                    <span
                      className="small-text"
                      style={{
                        color: '#d6d6d6',
                        paddingTop: '4rem',
                      }}
                    >
                      Clique para descobrir a resposta
                    </span>
                  </span>
                </div>
                <div className="my-card__back d-flex justify-content-start align-items-start">
                  <span
                    className={
                      card.answer.length > 500
                        ? 'smallestest-text'
                        : card.answer.length > 300
                        ? 'smallest-text'
                        : 'normal-text'
                    }
                  >
                    <ReactMarkdown>{card.answer}</ReactMarkdown>
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          className="w-100 d-flex justify-content-start"
          style={{
            marginTop: '4rem',
            marginLeft: '2rem',
            marginBottom: '2rem',
          }}
        >
          <span
            className="text link bold"
            onClick={() => setPage('bibliography')}
          >
            Bibliografia
          </span>
        </div>
      </div>
    </>
  );
};

const LearningIntroductionPage = ({ setPage }) => {
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

const IntroductionPage = ({ setPage }) => {
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
        <span className="pulsing-text">Clique para continuar</span>
        <div style={{ height: '3rem' }}></div>
      </div>
    </div>
  );
};
