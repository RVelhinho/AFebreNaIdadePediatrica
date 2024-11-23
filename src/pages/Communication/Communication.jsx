import { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import welcome from '../../assets/welcome.mp4';
import comoTeSentes from '../../assets/comoTeSentes.mp4';
import onde from '../../assets/onde.mp4';
import videoPoster from '../../assets/videoPoster.png';
import icoArrowRight from '../../assets/icoArrowRight.svg';
import tensDores from '../../assets/tensDores.mp4';
import oQueGostasDeFazer from '../../assets/oQueGostasDeFazer.mp4';
import optionOuvir from '../../assets/imgOuvir.png';
import optionDesenhar from '../../assets/imgDesenhar.png';
import optionSentir from '../../assets/imgSentir.png';
import optionCantar from '../../assets/imgCantar.png';
import optionBrincar from '../../assets/imgBrincar.png';
import optionFalar from '../../assets/imgFalar.png';
import optionBeber from '../../assets/imgBeber.png';
import optionAndar from '../../assets/imgAndar.png';
import optionSaltar from '../../assets/imgSaltar.png';
import optionCorrer from '../../assets/imgCorrer.png';
import optionCheirar from '../../assets/imgCheirar.png';
import optionLer from '../../assets/imgLer.png';
import optionComer from '../../assets/imgComer.png';
import optionBraco from '../../assets/imgBraco.png';
import optionDentes from '../../assets/imgDentes.png';
import optionBoca from '../../assets/imgBoca.png';
import optionBarriga from '../../assets/imgBarriga.png';
import optionNariz from '../../assets/imgNariz.png';
import optionOlho from '../../assets/imgOlho.png';
import optionMao from '../../assets/imgMao.png';
import optionOrelha from '../../assets/imgOrelha.png';
import optionPe from '../../assets/imgPe.png';
import optionPescoco from '../../assets/imgPescoco.png';
import optionPerna from '../../assets/imgPerna.png';
import optionSurpreendido from '../../assets/imgSurpreendido.png';
import optionTriste from '../../assets/imgTriste.png';
import optionFeliz from '../../assets/imgFeliz.png';
import optionAssustado from '../../assets/imgAssustado.png';
import optionApaixonada from '../../assets/imgApaixonada.png';
import optionPreocupada from '../../assets/imgPreocupada.png';
import optionAborrecido from '../../assets/imgAborrecido.png';
import optionEnojada from '../../assets/imgEnojada.png';
import optionTranquila from '../../assets/imgTranquila.png';
import optionZangado from '../../assets/imgZangado.png';
import icoGoBack from '../../assets/goBack.svg';
import _ from 'lodash';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

export const Communication = () => {
    const { name, age } = useLocation().state;
    const [isWelcome, setIsWelcome] = useState(true);
    const [selectedVideo, setSelectedVideo] = useState(1);
    const [optionSelected, setOptionSelected] = useState(undefined);
    const [showVideo, setShowVideo] = useState(false);
    const [doresBool, setDoresBool] = useState(false);

    // start page at the top with zoom reset
    useEffect(() => {
        document.body.style.zoom = '100%';
    }, []);

    const videoMeta = useMemo(() => {
        return {
            1: {
                video: comoTeSentes,
                label: 'Como te sentes?',
                options: [
                    {
                        id: 1,
                        image: optionSurpreendido,
                        text: 'Surpreendido'
                    },
                    {
                        id: 2,
                        image: optionTriste,
                        text: 'Triste'
                    },
                    {
                        id: 3,
                        image: optionFeliz,
                        text: 'Feliz'
                    },
                    {
                        id: 4,
                        image: optionAssustado,
                        text: 'Assustado'
                    },
                    {
                        id: 5,
                        image: optionApaixonada,
                        text: 'Apaixonada'
                    },
                    {
                        id: 6,
                        image: optionPreocupada,
                        text: 'Preocupada'
                    },
                    {
                        id: 7,
                        image: optionAborrecido,
                        text: 'Aborrecido'
                    },
                    {
                        id: 8,
                        image: optionEnojada,
                        text: 'Enojada'
                    },
                    {
                        id: 9,
                        image: optionTranquila,
                        text: 'Tranquila'
                    },
                    {
                        id: 10,
                        image: optionZangado,
                        text: 'Zangado'
                    }
                ]
            },
            2: {
                video: tensDores,
                label: 'Tens dores?',
                options: [
                    {
                        id: 1,
                        image: optionBraco,
                        text: 'Braço'
                    },
                    {
                        id: 2,
                        image: optionDentes,
                        text: 'Dentes'
                    },
                    {
                        id: 3,
                        image: optionBoca,
                        text: 'Boca'
                    },
                    {
                        id: 4,
                        image: optionBarriga,
                        text: 'Barriga'
                    },
                    {
                        id: 5,
                        image: optionNariz,
                        text: 'Nariz'
                    },
                    {
                        id: 6,
                        image: optionOlho,
                        text: 'Olho'
                    },
                    {
                        id: 7,
                        image: optionMao,
                        text: 'Mão'
                    },
                    {
                        id: 8,
                        image: optionOrelha,
                        text: 'Orelha'
                    },
                    {
                        id: 9,
                        image: optionPe,
                        text: 'Pé'
                    },
                    {
                        id: 10,
                        image: optionPescoco,
                        text: 'Pescoço'
                    },
                    {
                        id: 11,
                        image: optionPerna,
                        text: 'Perna'
                    }
                ]
            },
            3: {
                video: oQueGostasDeFazer,
                label: 'O que gostas de fazer?',
                options: [
                    {
                        id: 1,
                        image: optionOuvir,
                        text: 'Ouvir'
                    },
                    {
                        id: 2,
                        image: optionDesenhar,
                        text: 'Desenhar'
                    },
                    {
                        id: 3,
                        image: optionSentir,
                        text: 'Sentir'
                    },
                    {
                        id: 4,
                        image: optionCantar,
                        text: 'Cantar'
                    },
                    {
                        id: 5,
                        image: optionBrincar,
                        text: 'Brincar'
                    },
                    {
                        id: 6,
                        image: optionFalar,
                        text: 'Falar'
                    },
                    {
                        id: 7,
                        image: optionBeber,
                        text: 'Beber'
                    },
                    {
                        id: 8,
                        image: optionAndar,
                        text: 'Andar'
                    },
                    {
                        id: 9,
                        image: optionSaltar,
                        text: 'Saltar'
                    },
                    {
                        id: 10,
                        image: optionCorrer,
                        text: 'Correr'
                    },
                    {
                        id: 11,
                        image: optionCheirar,
                        text: 'Cheirar'
                    },
                    {
                        id: 12,
                        image: optionLer,
                        text: 'Ler'
                    },
                    {
                        id: 13,
                        image: optionComer,
                        text: 'Comer'
                    }
                ]
            }
        };
    }, []);
    const handleChangeVideo = (video) => {
        setOptionSelected(undefined);
        setSelectedVideo(video);
    };

    return (
        <div className="w-100 h-100 position-relative d-flex flex-column justify-content-center align-items-center">
            {isWelcome && (
                <div
                    className="w-100 h-100 d-flex flex-column justify-content-center align-items-center"
                    style={{ maxHeight: '100vh' }}
                >
                    <div
                        className="row mx-0 w-100 d-flex justify-content-center"
                        style={{
                            marginBottom: '2rem'
                        }}
                    >
                        <div className="col-auto px-0 h-100">
                            <video
                                playsInline
                                style={{
                                    maxWidth: '100%',
                                    maxHeight: 'calc(100vh - 10rem)',
                                    borderRadius: '0.6rem'
                                }}
                                src={welcome}
                                autoPlay
                                muted
                                onEnded={() => setIsWelcome(false)}
                            />
                        </div>
                    </div>
                    <div
                        className="row mx-0 w-100 d-flex justify-content-center"
                        style={{ height: '10rem' }}
                    >
                        <div className="col-auto px-0">
                            <h1>Olá {name}, como estás?</h1>
                        </div>
                    </div>
                </div>
            )}
            {!isWelcome && (
                <div
                    className="row mx-0 w-100 d-flex justify-content-center"
                    style={{ marginBottom: '2rem' }}
                >
                    <div className="col-auto px-0" style={{ width: '20rem' }}>
                        <div
                            className="row mx-0 w-100"
                            style={{ marginBottom: '1rem' }}
                        >
                            <div className="col px-0">
                                <span
                                    style={{
                                        fontSize: '1rem',
                                        color: '#4c4c4c',
                                        fontWeight: '600'
                                    }}
                                >
                                    Nome: {name}
                                </span>
                            </div>
                        </div>
                        <div
                            className="row mx-0 w-100"
                            style={{ marginBottom: '1rem' }}
                        >
                            <div className="col px-0">
                                <span
                                    style={{
                                        fontSize: '1rem',
                                        color: '#4c4c4c',
                                        fontWeight: '600'
                                    }}
                                >
                                    Idade: {age}
                                </span>
                            </div>
                        </div>
                        {optionSelected && (
                            <div className="row mx-0 w-100">
                                <div className="col px-0">
                                    <div
                                        className="row mx-0 w-100"
                                        style={{ marginBottom: '1rem' }}
                                    >
                                        <div className="col px-0">
                                            <span
                                                style={{
                                                    fontSize: '1.5rem',
                                                    color: '#c03887',
                                                    fontWeight: '600'
                                                }}
                                            >
                                                {videoMeta[selectedVideo].label}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="row mx-0 w-100">
                                        <div className="col px-0">
                                            <div className="option-box">
                                                <div className="row mx-0 w-100 d-flex justify-content-start align-items-center">
                                                    <div
                                                        className="col-auto px-0 d-flex justify-content-start align-items-center"
                                                        style={{
                                                            cursor: 'pointer'
                                                        }}
                                                        onClick={() => {
                                                            setOptionSelected(
                                                                undefined
                                                            );
                                                            setDoresBool(false);
                                                            setSelectedVideo(1);
                                                        }}
                                                    >
                                                        <img
                                                            src={icoGoBack}
                                                            alt="Voltar"
                                                            style={{
                                                                width: '1.5rem',
                                                                marginRight:
                                                                    '0.5rem'
                                                            }}
                                                        />
                                                        <span
                                                            style={{
                                                                fontSize:
                                                                    '1.2rem',
                                                                color: '#c03887'
                                                            }}
                                                        >
                                                            Voltar
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="row mx-0 w-100">
                                                    <div className="col px-0">
                                                        <div className="option-box__option">
                                                            <img
                                                                src={
                                                                    optionSelected.image
                                                                }
                                                                alt="Ouvir"
                                                                style={{
                                                                    width: '100%'
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="row mx-0 w-100"
                                                    style={{
                                                        marginBottom: '2rem'
                                                    }}
                                                >
                                                    <div className="col px-0 d-flex justify-content-center align-items-center">
                                                        <span
                                                            style={{
                                                                fontSize:
                                                                    '1.6rem',
                                                                color: '#4c4c4c',
                                                                fontWeight:
                                                                    '600'
                                                            }}
                                                        >
                                                            {
                                                                optionSelected.text
                                                            }
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {!optionSelected && (
                            <>
                                <div
                                    className="row mx-0 w-100"
                                    style={{ marginBottom: '1rem' }}
                                >
                                    <div className="col px-0 position-relative d-flex justify-content-center align-items-center">
                                        {/* {selectedVideo !== 1 && (
                                            <img
                                                src={icoArrowRight}
                                                alt="Próximo"
                                                style={{
                                                    width: '2rem',
                                                    position: 'absolute',
                                                    left: '1rem',
                                                    top: '50%',
                                                    transform:
                                                        'translateY(-50%) rotate(180deg)',
                                                    cursor: 'pointer',
                                                    zIndex: 100
                                                }}
                                                onClick={() => {
                                                    if (selectedVideo === 3) {
                                                        setSelectedVideo(2);
                                                    } else if (
                                                        selectedVideo === 2
                                                    ) {
                                                        setSelectedVideo(1);
                                                    }
                                                }}
                                            />
                                        )} */}
                                        <div
                                            style={{
                                                height: '20rem',
                                                width: '100%',
                                                borderRadius: '0.6rem',
                                                overflow: 'hidden',
                                                position: 'relative'
                                            }}
                                        >
                                            <Swiper
                                                pagination={true}
                                                modules={[Pagination]}
                                                className="mySwiper"
                                                onSlideChange={(swiper) => {
                                                    setSelectedVideo(
                                                        swiper.activeIndex + 1
                                                    );
                                                }}
                                            >
                                                <SwiperSlide>
                                                    <video
                                                        playsInline
                                                        preload="none"
                                                        className="fg-video"
                                                        style={{
                                                            height: '20rem',
                                                            pointerEvents:
                                                                'none'
                                                        }}
                                                        src={videoMeta[1].video}
                                                        autoPlay
                                                        muted
                                                        loop
                                                    ></video>
                                                    <video
                                                        playsInline
                                                        preload="none"
                                                        className="bg-video"
                                                        style={{
                                                            height: '20rem',
                                                            pointerEvents:
                                                                'none'
                                                        }}
                                                        src={videoMeta[1].video}
                                                        autoPlay
                                                        muted
                                                        loop
                                                    ></video>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <video
                                                        playsInline
                                                        preload="none"
                                                        className="fg-video"
                                                        style={{
                                                            height: '20rem',
                                                            pointerEvents:
                                                                'none'
                                                        }}
                                                        src={videoMeta[2].video}
                                                        autoPlay
                                                        muted
                                                        loop
                                                    ></video>
                                                    <video
                                                        playsInline
                                                        preload="none"
                                                        className="bg-video"
                                                        style={{
                                                            height: '20rem',
                                                            pointerEvents:
                                                                'none'
                                                        }}
                                                        src={videoMeta[2].video}
                                                        autoPlay
                                                        muted
                                                        loop
                                                    ></video>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <video
                                                        playsInline
                                                        preload="none"
                                                        className="fg-video"
                                                        style={{
                                                            height: '20rem',
                                                            pointerEvents:
                                                                'none'
                                                        }}
                                                        src={videoMeta[3].video}
                                                        autoPlay
                                                        muted
                                                        loop
                                                    ></video>
                                                    <video
                                                        playsInline
                                                        preload="none"
                                                        className="bg-video"
                                                        style={{
                                                            height: '20rem',
                                                            pointerEvents:
                                                                'none'
                                                        }}
                                                        src={videoMeta[3].video}
                                                        autoPlay
                                                        muted
                                                        loop
                                                    ></video>
                                                </SwiperSlide>
                                            </Swiper>
                                        </div>
                                        {/* {selectedVideo !== 3 && (
                                            <img
                                                src={icoArrowRight}
                                                alt="Próximo"
                                                style={{
                                                    width: '2rem',
                                                    position: 'absolute',
                                                    right: '1rem',
                                                    top: '50%',
                                                    transform:
                                                        'translateY(-50%)',
                                                    cursor: 'pointer',
                                                    zIndex: 100
                                                }}
                                                onClick={() => {
                                                    if (selectedVideo === 1) {
                                                        setSelectedVideo(2);
                                                    } else if (
                                                        selectedVideo === 2
                                                    ) {
                                                        setSelectedVideo(3);
                                                    }
                                                }}
                                            />
                                        )} */}
                                    </div>
                                </div>

                                <div
                                    className="row mx-0 w-100"
                                    style={{ marginBottom: '0rem' }}
                                >
                                    <div className="col px-0">
                                        <span
                                            style={{
                                                fontSize: '1.5rem',
                                                color: '#c03887',
                                                fontWeight: '600'
                                            }}
                                        >
                                            {videoMeta[selectedVideo].label}
                                        </span>
                                    </div>
                                </div>
                                <div
                                    className="row mx-0 w-100"
                                    style={{ marginBottom: '2rem' }}
                                >
                                    <div className="col px-0">
                                        <span
                                            style={{
                                                fontSize: '1rem',
                                                color: '#4c4c4c',
                                                fontWeight: '400'
                                            }}
                                        >
                                            Escolhe uma das opções abaixo:
                                        </span>
                                    </div>
                                </div>

                                <div className="row mx-0 w-100">
                                    <div className="col px-0">
                                        {selectedVideo === 2 && (
                                            <>
                                                <div className="row mx-0 w-100">
                                                    <div className="col-auto px-0">
                                                        <button
                                                            style={{
                                                                padding:
                                                                    '0.5rem 2rem',
                                                                background:
                                                                    doresBool
                                                                        ? '#c03887'
                                                                        : '#fff',
                                                                color: doresBool
                                                                    ? '#fff'
                                                                    : '#c03887'
                                                            }}
                                                            onClick={() => {
                                                                setDoresBool(
                                                                    true
                                                                );
                                                            }}
                                                        >
                                                            Sim
                                                        </button>
                                                    </div>
                                                    <div
                                                        className="col-auto px-0"
                                                        style={{
                                                            width: '2rem'
                                                        }}
                                                    ></div>
                                                    <div className="col-auto px-0">
                                                        <button
                                                            style={{
                                                                padding:
                                                                    '0.5rem 2rem',
                                                                background:
                                                                    doresBool ===
                                                                    false
                                                                        ? '#c03887'
                                                                        : '#fff',
                                                                color:
                                                                    doresBool ===
                                                                    false
                                                                        ? '#fff'
                                                                        : '#c03887'
                                                            }}
                                                            onClick={() => {
                                                                setDoresBool(
                                                                    false
                                                                );
                                                            }}
                                                        >
                                                            Não
                                                        </button>
                                                    </div>
                                                    {doresBool && (
                                                        <>
                                                            <div
                                                                style={{
                                                                    height: '20rem',
                                                                    width: '100%',
                                                                    borderRadius:
                                                                        '0.6rem',
                                                                    overflow:
                                                                        'hidden',
                                                                    position:
                                                                        'relative',
                                                                    marginTop:
                                                                        '2rem'
                                                                }}
                                                            >
                                                                <video
                                                                    playsInline
                                                                    preload="none"
                                                                    className="fg-video"
                                                                    style={{
                                                                        height: '20rem',
                                                                        pointerEvents:
                                                                            'none'
                                                                    }}
                                                                    src={onde}
                                                                    autoPlay
                                                                    muted
                                                                    loop
                                                                ></video>
                                                                <video
                                                                    playsInline
                                                                    preload="none"
                                                                    className="bg-video"
                                                                    style={{
                                                                        height: '20rem',
                                                                        pointerEvents:
                                                                            'none'
                                                                    }}
                                                                    src={onde}
                                                                    autoPlay
                                                                    muted
                                                                    loop
                                                                ></video>
                                                            </div>
                                                            <div
                                                                className="row mx-0 w-100 px-0"
                                                                style={{
                                                                    marginTop:
                                                                        '2rem'
                                                                }}
                                                            >
                                                                <div className="col px-0">
                                                                    <div
                                                                        className="row mx-0 w-100"
                                                                        style={{
                                                                            marginBottom:
                                                                                '0rem'
                                                                        }}
                                                                    >
                                                                        <div className="col px-0">
                                                                            <span
                                                                                style={{
                                                                                    fontSize:
                                                                                        '1.5rem',
                                                                                    color: '#c03887',
                                                                                    fontWeight:
                                                                                        '600'
                                                                                }}
                                                                            >
                                                                                Onde?
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="row mx-0 w-100"
                                                                        style={{
                                                                            marginBottom:
                                                                                '2rem'
                                                                        }}
                                                                    >
                                                                        <div className="col px-0">
                                                                            <span
                                                                                style={{
                                                                                    fontSize:
                                                                                        '1rem',
                                                                                    color: '#4c4c4c',
                                                                                    fontWeight:
                                                                                        '400'
                                                                                }}
                                                                            >
                                                                                Escolhe
                                                                                uma
                                                                                das
                                                                                opções
                                                                                abaixo:
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="row mx-0 w-100">
                                                                        <div className="col px-0">
                                                                            <div className="option-box">
                                                                                {_.chunk(
                                                                                    videoMeta[
                                                                                        selectedVideo
                                                                                    ]
                                                                                        .options,
                                                                                    2
                                                                                ).map(
                                                                                    (
                                                                                        row,
                                                                                        index
                                                                                    ) => (
                                                                                        <div
                                                                                            key={
                                                                                                index
                                                                                            }
                                                                                            className="row mx-0 w-100"
                                                                                        >
                                                                                            {row.map(
                                                                                                (
                                                                                                    option
                                                                                                ) => (
                                                                                                    <div
                                                                                                        key={
                                                                                                            option.id
                                                                                                        }
                                                                                                        className={
                                                                                                            row.length ===
                                                                                                            1
                                                                                                                ? 'col-6 px-0'
                                                                                                                : 'col px-0'
                                                                                                        }
                                                                                                        onClick={() => {
                                                                                                            setOptionSelected(
                                                                                                                option
                                                                                                            );
                                                                                                        }}
                                                                                                    >
                                                                                                        <div
                                                                                                            className={
                                                                                                                optionSelected ===
                                                                                                                option.id
                                                                                                                    ? 'option-box__option active'
                                                                                                                    : 'option-box__option'
                                                                                                            }
                                                                                                        >
                                                                                                            <img
                                                                                                                src={
                                                                                                                    option.image
                                                                                                                }
                                                                                                                alt={
                                                                                                                    option.text
                                                                                                                }
                                                                                                                style={{
                                                                                                                    width: '100%'
                                                                                                                }}
                                                                                                            />
                                                                                                        </div>
                                                                                                    </div>
                                                                                                )
                                                                                            )}
                                                                                        </div>
                                                                                    )
                                                                                )}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </>
                                                    )}
                                                </div>
                                            </>
                                        )}
                                        {selectedVideo !== 2 && (
                                            <div className="option-box">
                                                {_.chunk(
                                                    videoMeta[selectedVideo]
                                                        .options,
                                                    2
                                                ).map((row, index) => (
                                                    <div
                                                        key={index}
                                                        className="row mx-0 w-100"
                                                    >
                                                        {row.map((option) => (
                                                            <div
                                                                key={option.id}
                                                                className={
                                                                    row.length ===
                                                                    1
                                                                        ? 'col-6 px-0'
                                                                        : 'col px-0'
                                                                }
                                                                onClick={() => {
                                                                    setOptionSelected(
                                                                        option
                                                                    );
                                                                }}
                                                            >
                                                                <div
                                                                    className={
                                                                        optionSelected ===
                                                                        option.id
                                                                            ? 'option-box__option active'
                                                                            : 'option-box__option'
                                                                    }
                                                                >
                                                                    <img
                                                                        src={
                                                                            option.image
                                                                        }
                                                                        alt={
                                                                            option.text
                                                                        }
                                                                        style={{
                                                                            width: '100%'
                                                                        }}
                                                                    />
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};
