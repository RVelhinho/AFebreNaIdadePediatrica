import React, { useMemo } from 'react';
import bea from '../../../../assets/bea.png';
import { Circle } from '../../../Introduction/Introduction';
import { Title } from '../../../../components/title/title';
import ReactMarkdown from 'react-markdown';

export const BibliographyPage = ({ setPage }) => {
  const references = useMemo(() => {
    return `
  1. Direção-Geral da Saúde. (2018). *Orientação 004/2018: Febre na Criança e no Adolescente – Definição, Medição e Ensino aos Familiares/Cuidadores*. [Link](https://www.dgs.pt/directrizes-da-dgs/orientacoes-e-circulares-informativas/orientacao-n-0042018-de-030820181.aspx)
  
  2. Direção-Geral da Saúde [DGS]. (2018). *Norma 014/2018: Processo Assistencial Integrado da Febre de Curta Duração em Idade Pediátrica*. [Link](https://www.sip-spp.pt/media/zbcpste3/febre-curta-durac-a-o-processo-assistencial-integrado-2018-dgs.pdf)
  
  3. Silva, C., Bica, I., Duarte, J., & Dias, M. (2020). *Parents/Caregivers of children with fever – attitudes in emergency context*. *Millenium: Journal of Education, Technologies, and Health*, 2(Especial 7), 17–25. [Link](https://doi.org/10.29352/mill0207e.02.00388)

  4. Ferreira, C. A. G., Pereira, C. de O., Santos, D. H. S., Borges, J. D. C., & Batalha, L. M. C. (2022). *Medição da temperatura corporal em crianças: Estudo comparativo entre o método de medição axilar e timpânico*. *Revista de Enfermagem Referencia*, VI(1). [Link](https://doi.org/10.12707/RV21008)
  
  5. Dullius, W., & Longaray Fernandes, G. (2024). *Non-pharmacological nursing management of pediatric patients with fever and hyperthermia: a systematic review / Manejo não farmacológico da enfermagem em pacientes pediátricos com febre e hipertermia: uma revisão sistemática*. *Revista de Pesquisa Cuidado é Fundamental Online*, 16, 1–11. [Link](https://doi.org/10.9789/2175-5361.rpcfo.v16.13015)
  
  6. Instituto Nacional de Emergência Médica [INEM], Departamento de Formação em Emergência Médica [DFEM], Departamento de Emergência Médica [DEM], Martins, C., Gala, C., Abecasis, F., Campos, G., Feu, J., Póvoa, J., Neto, P., Fonseca, P., & Soares, P. (2024). *Febre*. *TAS - Emergências Pediátricas*, 40–42. [Link](https://www.prociv.azores.gov.pt/fotos/documentos/1716974304.pdf)

  7. Salgado, M. (2014). *A definição de febre deve basear-se no conhecimento e não na tradição*. *Saúde Infantil*, 36(2), 55–57. [Link](https://doi.org/10.1016/j.nmd.2013.12.009)
  
  8. National Institute for Health and Care Excellence. (2021). *NICE Gideline no 143: Fever in under 5s: assessment and initial management NICE guideline*. [Link](https://www.ncbi.nlm.nih.gov/books/NBK552086/)
  
  9. Pitoli, P. J., Duarte, B. K., Fragoso, A. A., Damaceno, D. G., & Marin, M. J. S. (2021). *Febre em crianças: procura de pais por serviços médicos de emergência*. *Ciência & Saúde Coletiva*, 26(2), 445–454. [Link](https://doi.org/10.1590/1413-81232021262.40782020)
  
  10. Vaz, F., & Trigo, R. (2020). *A Criança e o Jovem em Contexto de Urgência*. In A. L. Ramos & M. do C. Barbieri-Figueiredo (Eds.), *Enfermagem em Saúde da Criança e do Jovem* (pp. 293–309). Lidel.
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
          userSelect: 'none',
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
