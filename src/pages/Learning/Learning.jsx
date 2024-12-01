import React, { useMemo } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { LearningIntroductionPage } from './sub-pages/LearningIntroductionPage/LearningIntroductionPage';
import { LearningCardsPage } from './sub-pages/LearningCardsPage/LearningCardsPage';
import { BibliographyPage } from './sub-pages/Bibliography/Bibliography';
import { IntroductionPage } from './sub-pages/IntroductionPage/IntroductionPage';

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
        references: '1, 2, 3, 5, 6',
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
        references: '1, 2, 6, 7, 8, 9',
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
        references: '1, 2, 6, 8, 10',
      },
      {
        id: 4,
        question:
          'Qual é o local mais correto para a avaliação da temperatura corporal?',
        answer: `A avaliação da temperatura deve ser efetuada, preferencialmente, por via retal, pois fornece a temperatura mais semelhante à temperatura central do corpo.
  
  No entanto, as outras vias de avaliação da temperatura (axilar e timpânica) não estão incorretas, sendo a axilar a mais utilizada.
  
  De realçar que, durante a avaliação da temperatura, deve ser utilizado um equipamento apropriado que cumpra as indicações de utilização fornecidas pelos fabricantes.`,
        references: '1, 2, 3, 4, 6',
      },
      {
        id: 5,
        question: 'Como é avaliada corretamente a temperatura axilar?',
        answer: `Para uma avaliação correta da temperatura axilar, siga os seguintes passos:
  
  1. Coloque o termómetro digital desligado na axila;
  2. Mantenha o braço firmemente encostado ao tronco durante cinco minutos;
  3. Após os cinco minutos, ligue o termómetro;
  4. Aguarde pelo apito antes de retirar o termómetro da axila e verifique o valor indicado.`,
        references: '1, 2, 3, 4, 6',
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
