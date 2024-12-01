import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Title } from '../../../../components/title/title';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

export const LearningCardsPage = ({ cards, setPage }) => {
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
                        display: 'block',
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
                    className="smallest-text"
                    style={{
                      fontSize:
                        card.id === 1
                          ? '1rem'
                          : card.id === 2
                          ? '0.9rem'
                          : card.id === 3
                          ? '0.6rem'
                          : card.id === 4
                          ? '0.8rem'
                          : card.id === 5
                          ? '0.9rem'
                          : '1rem',
                    }}
                  >
                    <ReactMarkdown>{card.answer}</ReactMarkdown>
                    <span className="reference-numbers">{card.references}</span>
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
