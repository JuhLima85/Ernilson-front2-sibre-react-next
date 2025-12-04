import React from 'react';
import Head from 'next/head';
import Menu from '../componete/Menu.js';
import RodaPe from '../componete/RodaPe';
import { Jumbotron, Container } from 'reactstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import lideres1 from '../public/jaime.jpg';
import lideres2 from '../public/congre.jpg';
import lideres3 from '../public/congre2.jpg';
import lideres4 from '../public/congre3.jpg';
import lideres5 from '../public/congre4.jpg';
import lideres6 from '../public/alex.jpg';

function sobre() {
    return (
        <div>
            <Head>
                <title>Sobre - SIBRE</title>
                <meta name='robots' content='index, follow' />
                <meta name="description" content="Conheça a história e missão da Segunda Igreja Batista no Recanto das Emas-DF"></meta>
                <meta name="author" content="Ernilson Daniel Lima de Souza" />
            </Head>
            <Menu />
            
            <Jumbotron fluid className="head-sobre">
                <style>{`.head-sobre {
                    padding-top: 60px;
                    padding-bottom: 40px;
                    background-color: #fff;
                    margin-bottom: 0 !important;
                }`}</style>
                <Container>
                    <h1 className="display-4 text-center" style={{ color: '#102658', fontWeight: 'bold', fontSize: '2.5rem' }}>Sobre Nós</h1>
                    <p className="lead text-center" style={{ color: '#666', marginTop: '15px' }}>Conheça a história e a missão da SIBRE</p>
                </Container>
            </Jumbotron>

            <Jumbotron fluid className="sobre-content">
                <style>{`.sobre-content {
                    padding-top: 60px;
                    padding-bottom: 60px;
                    background-color: #f8f9fa;
                    margin-bottom: 0 !important;
                }
                
                .historia-section {
                    background: white;
                    border-radius: 15px;
                    padding: 40px;
                    margin-bottom: 50px;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.08);
                }
                
                .historia-section h2 {
                    color: #102658;
                    font-weight: bold;
                    margin-bottom: 20px;
                    font-size: 2rem;
                    border-left: 5px solid #17A2B8;
                    padding-left: 20px;
                }
                
                .historia-section p {
                    color: #555;
                    line-height: 1.8;
                    font-size: 1.05rem;
                    margin-bottom: 15px;
                }
                
                .historia-img {
                    width: 100%;
                    height: auto;
                    border-radius: 10px;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.15);
                    object-fit: cover;
                }
                
                .missao-box {
                    background: linear-gradient(135deg, #17A2B8 0%, #138496 100%);
                    color: white;
                    border-radius: 15px;
                    padding: 30px;
                    margin-bottom: 50px;
                    box-shadow: 0 4px 15px rgba(23, 162, 184, 0.3);
                }
                
                .missao-box h2 {
                    color: white;
                    font-weight: bold;
                    margin-bottom: 15px;
                    font-size: 1.8rem;
                    border-left: 5px solid white;
                    padding-left: 20px;
                }
                
                .missao-box p {
                    color: white;
                    line-height: 1.6;
                    font-size: 0.95rem;
                    margin-bottom: 12px;
                }
                
                .missao-box .quote {
                    font-style: italic;
                    font-size: 0.95rem;
                    margin-top: 15px;
                    padding-top: 15px;
                    border-top: 2px solid rgba(255,255,255,0.3);
                }
                
                .timeline {
                    position: relative;
                    padding: 10px 0;
                }
                
                .timeline-item {
                    background: white;
                    border-left: 4px solid #17A2B8;
                    padding: 12px 15px;
                    margin-bottom: 12px;
                    border-radius: 5px;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.06);
                }
                
                .timeline-item strong {
                    color: #102658;
                    display: block;
                    margin-bottom: 4px;
                    font-size: 0.95rem;
                }
                
                .timeline-item p {
                    color: #666;
                    margin: 0;
                    font-size: 0.9rem;
                }
                
                .image-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 20px;
                    margin-top: 30px;
                }
                
                .image-grid img {
                    width: 100%;
                    height: 250px;
                    object-fit: cover;
                    border-radius: 10px;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.12);
                    transition: transform 0.3s ease;
                }
                
                .image-grid img:hover {
                    transform: scale(1.05);
                }
                
                @media (max-width: 768px) {
                    .historia-section {
                        padding: 25px;
                    }
                    
                    .historia-section h2 {
                        font-size: 1.5rem;
                    }
                    
                    .missao-box {
                        padding: 25px;
                    }
                    
                    .image-grid {
                        grid-template-columns: 1fr;
                    }
                }
                `}</style>
                <Container>
                    {/* Seção História */}
                    <div className="historia-section">
                        <div className="row align-items-center">
                            <div className="col-lg-6 mb-4 mb-lg-0">
                                <h2>Nossa História</h2>
                                <p>
                                    A Segunda Igreja Batista foi organizada como igreja no dia <strong>31 de maio de 2003</strong>, 
                                    anteriormente sendo uma congregação da Segunda Igreja Batista do Plano Piloto.
                                </p>
                                <p>
                                    Inicialmente, ficava localizada na quadra 103 do Recanto das Emas. Naquela época, a SIBPP adquiriu um lote 
                                    para a construção de um local próprio e definitivo para a congregação.
                                </p>
                                <p>
                                    A construção do templo foi realizada pela Segunda Igreja Batista do Plano Piloto, contando com a ajuda 
                                    de um grupo de irmãos norte-americanos que vieram ao Brasil com essa finalidade.
                                </p>
                                <p>
                                    <strong>Atualmente</strong>, a SIBRE está localizada na <strong>quadra 105, área especial 01 - Avenida Vargem da Benção</strong>.
                                </p>
                            </div>
                            <div className="col-lg-6">
                                <img src="/sibre.jpg" alt="Igreja SIBRE" className="historia-img" />
                            </div>
                        </div>
                    </div>

                    {/* ===== OPÇÃO 1: Carrossel em full-width acima, timeline abaixo ===== */}
                    <div className="historia-section"style={{ display: 'none' }} >
                        <h2 style={{ borderLeftColor: '#17A2B8' }}>Líderes que Marcaram Nossa História</h2>
                        <p style={{ marginBottom: '40px' }}>
                            Ao relembrarmos nossa história, algumas pessoas foram determinantes para o estabelecimento e crescimento de nossa igreja:
                        </p>
                        
                        {/* Carrossel em destaque - full width */}
                        <div style={{ marginBottom: '40px', maxWidth: '700px', margin: '0 auto 40px auto' }}>
                            <Slider
                                dots={true}
                                infinite={true}
                                speed={500}
                                slidesToShow={1}
                                slidesToScroll={1}
                                autoplay={true}
                                autoplaySpeed={3000}
                                pauseOnHover={true}
                            >
                                <div key={1} style={{ display: 'flex', justifyContent: 'center' }}>
                                    <Image src={lideres1} alt="Líderes" layout="responsive" width={500} height={400} style={{ borderRadius: 10 }} />
                                </div>
                                <div key={2} style={{ display: 'flex', justifyContent: 'center' }}>
                                    <Image src={lideres2} alt="Líderes" layout="responsive" width={500} height={400} style={{ borderRadius: 10 }} />
                                </div>
                            </Slider>
                        </div>

                        {/* Timeline abaixo */}
                        <div className="timeline">
                            <div className="timeline-item">
                                <strong>Pr. Gustavo Leonan</strong>
                                <p>Desde 2025 (Atual Pastor)</p>
                            </div>
                            <div className="timeline-item">
                                <strong>Pr. Lacir</strong>
                                <p>2022–2025</p>
                            </div>
                            <div className="timeline-item">
                                <strong>Pr. Josias Alves da Costa</strong>
                                <p>2014–2022</p>
                            </div>
                            <div className="timeline-item">
                                <strong>Pr. Regivaldo Dantas</strong>
                                <p>2006–2014</p>
                            </div>                                    
                            <div className="timeline-item">
                                <strong>Pr. Daniel Ventura</strong>
                                <p>2003–2005</p>
                            </div>
                            <div className="timeline-item">
                                <strong>Pr. Alexandre</strong>
                                <p>1999–2003</p>
                                <p style={{ fontSize: '13px' }}> Liderou a transição da congregação para a organização como igreja </p>
                            </div>
                            <div className="timeline-item">
                                <strong>Pr. Jaime França</strong>
                                <p>1995–1999</p>
                                <p style={{ fontSize: '13px' }}> Atuou na obra quando ainda funcionávamos como congregação</p>
                            </div>
                        </div>
                    </div>

                    {/* ===== OPÇÃO 2: Carrossel à direita com altura controlada (lado a lado) ===== */}
                    <div className="historia-section" >
                        <h2 style={{ borderLeftColor: '#17A2B8' }}>Líderes que Marcaram Nossa História</h2>
                        <p style={{ marginBottom: '30px' }}>
                            Ao relembrarmos nossa história, algumas pessoas foram determinantes para o estabelecimento e crescimento de nossa igreja:
                        </p>
                        <div className="row align-items-stretch">
                            <div className="col-lg-6 mb-4 mb-lg-0">
                                <div className="timeline">
                                    <div className="timeline-item">
                                        <strong>Pr. Gustavo Leonan</strong>
                                        <p>Desde 2025 (Atual Pastor)</p>
                                    </div>
                                    <div className="timeline-item">
                                        <strong>Pr. Lacir</strong>
                                        <p>2022–2025</p>
                                    </div>
                                    <div className="timeline-item">
                                        <strong>Pr. Josias Alves da Costa</strong>
                                        <p>2014–2022</p>
                                    </div>
                                    <div className="timeline-item">
                                        <strong>Pr. Regivaldo Dantas</strong>
                                        <p>2006–2014</p>
                                    </div>                                    
                                    <div className="timeline-item">
                                        <strong>Pr. Daniel Ventura</strong>
                                        <p>2003–2005</p>
                                    </div>
                                    <div className="timeline-item">
                                        <strong>Pr. Alexandre</strong>
                                        <p>1999–2003</p>
                                        <p style={{ fontSize: '13px' }}> Liderou a transição da congregação para a organização como igreja </p>
                                    </div>
                                    <div className="timeline-item">
                                        <strong>Pr. Jaime França</strong>
                                        <p>1995–1999</p>
                                        <p style={{ fontSize: '13px' }}> Atuou na obra quando ainda funcionávamos como congregação</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div style={{ height: '100%', display: 'flex', alignItems: 'center', minHeight: '400px' }}>
                                    <Slider
                                        dots={true}
                                        infinite={true}
                                        speed={500}
                                        slidesToShow={1}
                                        slidesToScroll={1}
                                        autoplay={true}
                                        autoplaySpeed={3000}
                                        pauseOnHover={true}
                                        style={{ width: '100%' }}
                                    >
                                        <div key={1} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <Image src={lideres1} alt="Líderes" layout="responsive" width={350} height={400} style={{ borderRadius: 10 }} />
                                        </div>
                                        <div key={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <Image src={lideres2} alt="Líderes" layout="responsive" width={350} height={400} style={{ borderRadius: 10 }} />
                                        </div>
                                        <div key={3} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <Image src={lideres3} alt="Líderes" layout="responsive" width={350} height={400} style={{ borderRadius: 10 }} />
                                        </div>
                                        <div key={4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <Image src={lideres4} alt="Líderes" layout="responsive" width={350} height={400} style={{ borderRadius: 10 }} />
                                        </div>
                                        <div key={5} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <Image src={lideres5} alt="Líderes" layout="responsive" width={350} height={400} style={{ borderRadius: 10 }} />
                                        </div>
                                        <div key={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <Image src={lideres6} alt="Líderes" layout="responsive" width={350} height={400} style={{ borderRadius: 10 }} />
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ===== OPÇÃO 3: Alternado por pastor (narrativo, alternando imagem e texto) ===== */}
                    <div className="historia-section" style={{ display: 'none' }}>
                        <h2 style={{ borderLeftColor: '#17A2B8' }}>Líderes que Marcaram Nossa História</h2>
                        <p style={{ marginBottom: '40px' }}>
                            Ao relembrarmos nossa história, algumas pessoas foram determinantes para o estabelecimento e crescimento de nossa igreja:
                        </p>

                        {/* Carrossel principal - destaque */}
                        <div style={{ marginBottom: '50px', maxWidth: '600px', margin: '0 auto 50px auto' }}>
                            <Slider
                                dots={true}
                                infinite={true}
                                speed={500}
                                slidesToShow={1}
                                slidesToScroll={1}
                                autoplay={true}
                                autoplaySpeed={3000}
                                pauseOnHover={true}
                            >
                                <div key={1} style={{ display: 'flex', justifyContent: 'center' }}>
                                    <Image src={lideres1} alt="Líderes" layout="responsive" width={450} height={380} style={{ borderRadius: 10 }} />
                                </div>
                                <div key={2} style={{ display: 'flex', justifyContent: 'center' }}>
                                    <Image src={lideres2} alt="Líderes" layout="responsive" width={450} height={380} style={{ borderRadius: 10 }} />
                                </div>
                            </Slider>
                        </div>

                        {/* Timeline com styling narrativo */}
                        <div className="timeline" style={{ borderLeft: 'none' }}>
                            <div className="timeline-item">
                                <strong>Pr. Gustavo Leonan 🙏</strong>
                                <p><strong>Desde 2025</strong> (Atual Pastor)</p>
                                <p style={{ fontSize: '13px', color: '#17A2B8' }}>Lidera a SIBRE atualmente com dedicação ao discipulado e cuidado pastoral</p>
                            </div>
                            <div className="timeline-item">
                                <strong>Pr. Lacir</strong>
                                <p><strong>2022–2025</strong></p>
                                <p style={{ fontSize: '13px', color: '#17A2B8' }}>Conduziu o ministério com ênfase comunitária</p>
                            </div>
                            <div className="timeline-item">
                                <strong>Pr. Josias Alves da Costa</strong>
                                <p><strong>2014–2022</strong></p>
                                <p style={{ fontSize: '13px', color: '#17A2B8' }}>Período de expansão e iniciativas missionárias</p>
                            </div>
                            <div className="timeline-item">
                                <strong>Pr. Regivaldo Dantas</strong>
                                <p><strong>2006–2014</strong></p>
                                <p style={{ fontSize: '13px', color: '#17A2B8' }}>Fortaleceu a comunidade através de programas de formação</p>
                            </div>                                    
                            <div className="timeline-item">
                                <strong>Pr. Daniel Ventura</strong>
                                <p><strong>2003–2005</strong></p>
                                <p style={{ fontSize: '13px', color: '#17A2B8' }}>Consolidação estrutural da obra após organização</p>
                            </div>
                            <div className="timeline-item">
                                <strong>Pr. Alexandre</strong>
                                <p><strong>1999–2003</strong></p>
                                <p style={{ fontSize: '13px', color: '#17A2B8' }}>Liderou a transição histórica da congregação para igreja organizada em <strong>31/05/2003</strong></p>
                            </div>
                            <div className="timeline-item">
                                <strong>Pr. Jaime França e sua família</strong>
                                <p><strong>1995–1999</strong></p>
                                <p style={{ fontSize: '13px', color: '#17A2B8' }}>Iniciaram e sustentaram a obra como congregação — alicerces da comunidade</p>
                            </div>
                        </div>
                    </div>

                    {/* Seção Missão */}
                    <div className="missao-box">
                        <div className="row align-items-center">
                            <div className="col-lg-7 mb-4 mb-lg-0">
                                <h2>Nossa Missão</h2>
                                <p>
                                    <strong>Amar a Deus</strong> com todo nosso coração e <strong>servir ao próximo </strong> 
                                    com amor e dedicação.
                                </p>
                                <p>
                                    Nosso propósito é fazer o maior número possível de discípulos de Jesus Cristo 
                                    até a volta do Senhor.
                                </p>
                                <div className="quote">
                                    "E disse-lhes: Ide por todo o mundo, e pregai o evangelho a toda criatura"
                                    <br />
                                    <strong>Marcos 16:15</strong>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <img src="/sibre8.png" alt="Culto SIBRE" className="historia-img" style={{ filter: 'brightness(0.9)', maxHeight: '280px', objectFit: 'cover' }} />
                            </div>
                        </div>
                    </div>                    
                </Container>
            </Jumbotron>

            <RodaPe />
        </div>
    );
}

export default sobre;