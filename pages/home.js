import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Jumbotron, Container } from 'reactstrap';

import Menu from '../componete/Menu.js';
import RodaPe from '../componete/RodaPe.js';


function Home({ data }) {

    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        // Verifica o tamanho da tela apenas no cliente
        const checkScreenSize = () => {
            setIsSmallScreen(window.innerWidth < 576);
        };

        checkScreenSize(); // Chama a função ao carregar o componente
        window.addEventListener("resize", checkScreenSize);

        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);


    return (
        <div>
            <Head>
                <title>Sibre</title>
                <meta name="robots" content="index, follow" />
                <meta name="description" content="Site da Segunda Igreja Batista no Recanto das Emas-DF" />
                <meta name="author" content="Ernilson Daniel Lima de Souza" />
            </Head>
            <Menu />
            <Jumbotron fluid className="descr-top">
                <style>{`
          .descr-top {
            background-image: url(${isSmallScreen ? '/header3.png' : '/header4.png'});
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            width: 100%;
            min-height: 200px;
            max-height: 225px;
            max-width: 1300px;
            color: #FFF;
            text-align: center;
            margin: 0 auto;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
        `}</style>

                <Container>
                    {!isSmallScreen && (
                        <h2
                            className="display-5"
                            style={{
                                marginTop: "200px",
                                color: "#17A2B8",
                                fontWeight: "bold",
                                fontSize: "1.5rem",
                            }}
                        >
                            Um lugar de comunhão, louvor e adoração a Deus
                        </h2>
                    )}
                </Container>
            </Jumbotron>

            <Jumbotron fluid className="servicos">
                <style>{`.servicos {
                    padding-top: 20px;
                    padding-bottom: 0px;
                    background: #FFF;
                    margin-bottom: 0rem !important;
                }

                .circulo {
                    width: 200px;
                    height: 200px;
                    background-size: cover;
                    background-position: center;
                    border-radius: 50%;
                    margin: 0 auto;
                }

                /* Media query para telas pequenas (ex: abaixo de 400px de largura) */
                @media (max-width: 399px) {
                .col-lg-4 {
                    margin-bottom: 2rem;                     
                }
                `}</style>
                <Container className="text-center">
                    <h3 className="mt-4 mb-4" style={{ color: '#102658', fontWeight: 'bold' }}>
                        Nossas Atividades
                    </h3>
                    <div className="row">
                        <div className="col-lg-4">
                            <Link href="/comunhao#domingo-do-senhor">
                                <div>
                                    <div className="circulo" style={{ backgroundImage: 'url(/bibliaEcruz.jpg)' }} />
                                    <h3 className="mt-4 mb-4" style={{ color: '#102658', fontWeight: 'bold', fontSize: '1.6rem' }}>
                                        Domingo do Senhor
                                    </h3>
                                    <div className="btn btn-light">
                                        <p>Viver em comunhão é uma marca da nossa comunidade. Venha ser igreja com a gente!</p>
                                        <ul style={{ textAlign: 'center', listStyleType: 'none', padding: 0 }}>
                                            <li>Escola Bíblica Dominical (EBD) às 17h.</li>
                                            <li>Culto noturno domingo às 19h.</li>
                                        </ul>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-lg-4">
                            <Link href="/comunhao#acao-social">
                                <div>
                                    <div className="circulo" style={{ backgroundImage: 'url(/cesta.png)' }} />
                                    <h3 className="mt-4 mb-4" style={{ color: '#102658', fontWeight: 'bold', fontSize: '1.6rem' }}>
                                        Ação Social
                                    </h3>
                                    <div className="btn btn-light">
                                        <p>Ajudar como Cristo ajudaria e amar como Ele nos ama é a missão do ministério de Ação Social. Seja servindo com doação de alimentos ou roupas, trabalhamos para socorrer ao próximo em sua necessidade.</p>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-lg-4">
                            <Link href="/comunhao#projeto-jiu-jitsu">
                                <div>
                                    <div className="circulo" style={{ backgroundImage: 'url(/jiu-jitsu.jpg)' }} />
                                    <h3 className="mt-4 mb-4" style={{ color: '#102658', fontWeight: 'bold', fontSize: '1.6rem' }}>
                                        Projeto Jiu-Jitsu
                                    </h3>
                                    <div className="btn btn-light">
                                        <p>Nossa igreja oferece aulas gratuitas de jiu-jítsu para a comunidade, promovendo saúde, disciplina e inclusão. Durante as aulas, os alunos também têm a oportunidade de ouvir a Palavra de Deus, fortalecendo a fé e valores como respeito e trabalho em equipe. Participe!</p>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div style={{ textAlign: 'center', marginTop: '20px' }}>
                            Venha conhecer mais sobre nossas atividades!
                            <Link href="/comunhao">
                                <a style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}> Clique aqui</a>
                            </Link>
                        </div>

                    </div>
                </Container>
            </Jumbotron>

            <Jumbotron fluid className="agenda">
                 <style>{`
                    .agenda {
                    position: relative;
                    margin-top: 10px;
                    padding-top: 20px;
                    padding-bottom: 0px;
                    background-size: cover;
                    margin-bottom: 0rem !important;
                    background-color: transparent !important; /* Remove qualquer fundo */
                    }

                    .agenda h2 {
                    position: relative;
                    z-index: 2;
                    background: white; /* Branco puro sem transparência */
                    display: inline-block;
                    padding: 10px 20px;
                    border-radius: 8px;
                    }

                    .agenda-container {
                    position: relative;
                    z-index: 1;
                    background-color: transparent !important; /* Remove fundo indesejado */
                    }
                `}</style>

                <Container className="text-center">
                    <h2 className="mt-4 mb-4" style={{ color: '#102658', fontWeight: 'bold' }}>
                        Agenda Semanal
                    </h2>
                </Container>

                <Container className="text-center agenda-container">
                    <img
                        src={isSmallScreen ? "/agenda-semanal.jpg" : "/agenda-semanal3.jpg"}
                        alt="Agenda Semanal"
                        style={{ maxWidth: "100%", height: "auto", marginTop: "10px", background: "transparent" }}
                    />
                </Container>
            </Jumbotron>

            <RodaPe />
        </div>
    );
}

export default Home;