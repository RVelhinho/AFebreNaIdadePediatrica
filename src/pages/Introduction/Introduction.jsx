import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoVideo from '../../assets/logo.mp4';

export const Introduction = () => {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(false);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    return (
        <div
            style={{
                height: '100%',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
            }}
        >
            <div className="row mx-0 w-100" style={{ marginBottom: '2rem' }}>
                <div className="col px-0 h-100 d-flex justify-content-center align-items-center">
                    <video
                        autoPlay
                        playsInline
                        muted
                        src={logoVideo}
                        loop
                        alt="logo"
                        style={{
                            maxWidth: '100%',
                            maxHeight: '20rem',
                            borderRadius: '0.6rem'
                        }}
                    />
                </div>
            </div>
            {!isLogin && (
                <>
                    <div
                        className="row mx-0 w-100"
                        style={{ marginBottom: '1rem' }}
                    >
                        <div className="col px-0 d-flex justify-content-center align-items-center">
                            <h1>Vamos comunicar?</h1>
                        </div>
                    </div>
                    <div className="row mx-0 w-100">
                        <div className="col px-0 d-flex justify-content-center align-items-center">
                            <button
                                style={{
                                    padding: '0.5rem 2rem'
                                }}
                                onClick={() => setIsLogin(true)}
                            >
                                <span
                                    style={{
                                        fontSize: '1.5rem',
                                        color: '#c03887'
                                    }}
                                >
                                    Sim
                                </span>
                            </button>
                        </div>
                    </div>
                </>
            )}
            {isLogin && (
                <>
                    <div
                        className="row mx-0 w-100 d-flex justify-content-center align-items-center"
                        style={{ marginBottom: '2rem' }}
                    >
                        <div className="col-auto px-0">
                            <div className="row mx-0 w-100">
                                <div className="col px-0">
                                    <span className="input-label">Nome</span>
                                </div>
                            </div>
                            <div className="row mx-0 w-100">
                                <div className="col px-0">
                                    <input
                                        className="input-box"
                                        type="text"
                                        value={name}
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="row mx-0 w-100 d-flex justify-content-center align-items-center"
                        style={{ marginBottom: '2rem' }}
                    >
                        <div className="col-auto px-0">
                            <div className="row mx-0 w-100">
                                <div className="col px-0">
                                    <span className="input-label">Idade</span>
                                </div>
                            </div>
                            <div className="row mx-0 w-100">
                                <div className="col px-0">
                                    <input
                                        className="input-box"
                                        type="number"
                                        value={age}
                                        onChange={(e) => setAge(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mx-0 w-100 d-flex justify-content-center align-items-center">
                        <div className="col-auto px-0">
                            <button
                                style={{
                                    padding: '0.5rem 2rem',
                                    background:
                                        name && age
                                            ? '#c03887'
                                            : 'rgba(192, 56, 135, 0.5)',
                                    cursor:
                                        name && age ? 'pointer' : 'not-allowed'
                                }}
                                disabled={!name || !age}
                                onClick={() =>
                                    navigate(`/communication`, {
                                        state: { name, age }
                                    })
                                }
                            >
                                <span
                                    style={{
                                        fontSize: '1.5rem',
                                        color: '#fff'
                                    }}
                                >
                                    Confirmar
                                </span>
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};
