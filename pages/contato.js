import React from 'react';
import Head from 'next/head';
import Menu from '../componete/Menu.js';
import { Jumbotron, Container } from 'reactstrap';
import { FaWhatsapp, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';

const Contato = () => {
    return (
        <div>
            <Head>
                <title>Contato</title>
                <meta name='robots' content='index, follow' />
                <meta name="description" content="Entre em contato com a Segunda Igreja Batista no Recanto das Emas-DF" />
                <meta name="author" content="Ernilson Daniel Lima de Souza" />
            </Head>
            <Menu />
            <Jumbotron fluid className="head-contato">
                <style>{`.head-contato{
                    padding-top: 60px;
                    padding-bottom: 40px;
                    background-color: #fff;
                    margin-bottom: 0 !important;
                }`}</style>
                <Container>
                    <h1 className="display-4 text-center" style={{ color: '#102658', fontWeight: 'bold',  fontSize: '2.5rem' }}>Entre em Contato</h1>
                </Container>
            </Jumbotron>

            <Jumbotron fluid className="contato-content">
                <style>{`.contato-content {
                    padding-top: 60px;
                    padding-bottom: 60px;
                    background-color: #f8f9fa;
                    margin-bottom: 0 !important;
                }
                
                .contact-card {
                    background: white;
                    border-radius: 10px;
                    padding: 30px;
                    margin-bottom: 30px;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
                    text-align: center;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                
                .contact-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 4px 15px rgba(0,0,0,0.15);
                }
                
                .contact-card i {
                    font-size: 3rem;
                    margin-bottom: 20px;
                    color: #17A2B8;
                }
                
                .contact-card h3 {
                    color: #102658;
                    font-weight: bold;
                    margin-bottom: 15px;
                }
                
                .contact-card p {
                    color: #666;
                    margin-bottom: 15px;
                }
                
                .contact-link {
                    display: inline-block;
                    padding: 12px 24px;
                    background-color: #17A2B8;
                    color: white;
                    text-decoration: none;
                    border-radius: 5px;
                    font-weight: bold;
                    transition: background-color 0.3s ease;
                }
                
                .contact-link:hover {
                    background-color: #138496;
                    color: white;
                    text-decoration: none;
                }
                
                .info-section {
                    background: white;
                    border-radius: 10px;
                    padding: 30px;
                    margin-top: 30px;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
                }
                
                .info-section h3 {
                    color: #102658;
                    font-weight: bold;
                    margin-bottom: 20px;
                }
                
                .info-item {
                    margin-bottom: 15px;
                    padding-bottom: 15px;
                    border-bottom: 1px solid #eee;
                }
                
                .info-item:last-child {
                    border-bottom: none;
                    margin-bottom: 0;
                    padding-bottom: 0;
                }
                
                .info-item strong {
                    color: #102658;
                    display: block;
                    margin-bottom: 5px;
                }
                
                .info-item p {
                    color: #666;
                    margin: 0;
                }
                
                @media (max-width: 768px) {
                    .contact-card i {
                        font-size: 2.5rem;
                    }
                }
                `}</style>
                <Container>
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <div className="contact-card">
                                <FaWhatsapp />
                                <h3>WhatsApp</h3>
                                <p>Fale conosco diretamente pelo WhatsApp</p>
                                <a href="https://wa.me/556199178363?text=Olá%20pastor%20Gustavo%2C%20fui%20redirecionado%20pelo%20site%20da%20igreja." target="_blank" rel="noopener noreferrer" className="contact-link">
                                    <FaWhatsapp style={{ marginRight: '8px' }} />
                                    Enviar Mensagem
                                </a>
                            </div>
                        </div>

                        <div className="col-md-4 mb-4">
                            <div className="contact-card">
                                <FaInstagram />
                                <h3>Instagram</h3>
                                <p>Acompanhe nossas novidades e eventos</p>
                                <a href="https://www.instagram.com/sibre.oficial/" target="_blank" rel="noopener noreferrer" className="contact-link">
                                    <FaInstagram style={{ marginRight: '8px' }} />
                                    Seguir
                                </a>
                            </div>
                        </div>

                        <div className="col-md-4 mb-4">
                            <div className="contact-card">
                                <FaMapMarkerAlt />
                                <h3>Localização</h3>
                                <p>Veja como chegar em nossa igleja</p>
                                <a href="https://goo.gl/maps/nB3GEHK9yLHAeEYx8" target="_blank" rel="noopener noreferrer" className="contact-link">
                                    <FaMapMarkerAlt style={{ marginRight: '8px' }} />
                                    Como Chegar
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="info-section">
                        <h3>Informações Gerais</h3>
                        <div className="info-item">
                            <strong>Endereço</strong>
                            <p>Quadra 105 Area Especial 01<br />Av. Vargem das Benção<br />Recanto das Emas - DF<br />CEP: 72601120</p>
                        </div>
                        <div className="info-item">
                            <strong>Telefone</strong>
                            <p>(61) 9917-8363</p>
                        </div>
                        <div className="info-item">
                            <strong>Contribuição - Contribua com o Reino</strong>
                            <p><strong>PIX:</strong> sibre25@gmail.com<br /><strong>PIX CNPJ:</strong> 186855200001/40<br /><strong>Banco:</strong> 323 Mercado Pago - Agência: 0001 - Conta: 88333095615</p>
                        </div>
                    </div>
                </Container>
            </Jumbotron>            
        </div>
    );
};

export default Contato;
