import React from 'react';
import { useEffect, useRef, forwardRef, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Menu from '../componete/Menu.js';
import RodaPe from '../componete/RodaPe';
import { Container } from 'reactstrap';
import Image from 'next/image';
import styles from '../styles/encontros.module.css';
import Domingo1 from '../public/Encontros1.jpg';
import Domingo3 from '../public/Encontros3.jpg';
import Domingo6 from '../public/Encontros6.jpg';
import Domingo8 from '../public/Encontros8.jpg';
import Domingo9 from '../public/Encontros9.png';
import Domingo10 from '../public/Encontros10.png';
import Domingo11 from '../public/Encontros11.png';
import Domingo12 from '../public/Encontros12.png';
import Domingo13 from '../public/Encontros13.png';
import JiuJitsu from '../public/jiu-jitsu.jpg';
import JiuJitsu2 from '../public/jiu-jitsu2.jpg';
import JiuJitsu5 from '../public/jiu-jitsu5.jpg';
import JiuJitsu6 from '../public/jiu-jitsu6.jpg';
import acao from '../public/acao.jpg';
import acao2 from '../public/acao2.png';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Encontros() {
    const router = useRouter();
    const domingoDoSenhorRef = useRef(null);
    const acaoSocialRef = useRef(null);
    const projetoJiuJitsuRef = useRef(null);

    // Estado para detectar tamanho da tela
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    // Efeito para atualizar `isSmallScreen` ao redimensionar a tela
    useEffect(() => {
        const checkScreenSize = () => {
            setIsSmallScreen(window.innerWidth < 576);
        };

        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);

        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    // Efeito para rolar até a seção correta ao mudar a URL
    useEffect(() => {
        const handleHash = () => {
            if (router.asPath.includes('#')) {
                const id = router.asPath.split('#')[1];
                let element = null;

                switch (id) {
                    case 'domingo-do-senhor':
                        element = domingoDoSenhorRef.current;
                        break;
                    case 'acao-social':
                        element = acaoSocialRef.current;
                        break;
                    case 'projeto-jiu-jitsu':
                        element = projetoJiuJitsuRef.current;
                        break;
                    default:
                        break;
                }

                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        };

        handleHash();
        router.events.on('routeChangeComplete', handleHash);

        return () => {
            router.events.off('routeChangeComplete', handleHash);
        };
    }, [router]);

    return (
        <div>
            <Head>
                <title>Comunhão</title>
                <meta name='robots' content='index, follow' />
                <meta name="description" content="História da Segunda Igreja Batista no Recanto das Emas-DF"></meta>
                <meta name="author" content="Juliana Lima de Souza" />
            </Head>
            <Menu />
            <div className={styles.mainContent}>
                <header className={styles.header}>
                    <div className={styles.headerOverlay}></div>
                    <div className={styles.headerContent}>
                        <Container>
                            <h1 className={styles.title}>Comunhão</h1>
                            <p className={styles.subtitle}>Junte-se a nós em nossos encontros</p>
                        </Container>
                    </div>
                </header>
                <main>
                    <Container>
                        <Section
                            id="domingo-do-senhor"
                            title="Domingo do Senhor"
                            text={
                                <>
                                    Aos domingos, nos reunimos para estudar a Palavra de Deus e cultuar ao Senhor em comunhão e adoração. Venha fazer parte desse momento conosco!
                                    <strong> Participe da Escola Bíblica Dominical (EBD) às 17h e do Culto Noturno às 19h. </strong>
                                    Sua presença é muito importante para nós!
                                </>
                            }
                            images={[Domingo6, Domingo8, Domingo1, Domingo3, Domingo9, Domingo10, Domingo11, Domingo12, Domingo13]}
                            ref={domingoDoSenhorRef}
                            isSmallScreen={isSmallScreen} 
                        />

                        <Section
                            id="acao-social"
                            title="Ação Social"
                            text="Ajudar como Cristo ajudaria e amar como Ele nos ama é a missão do ministério de Ação Social. Seja servindo com doação de alimentos ou roupas, trabalhamos para socorrer ao próximo em sua necessidade."
                            images={[acao, acao2]}
                            ref={acaoSocialRef}
                            isSmallScreen={isSmallScreen}
                        />
                        <Section
                            id="projeto-jiu-jitsu"
                            title="Projeto Jiu-Jitsu"
                            text={  
                                <>  
                                    Nossa igreja oferece aulas gratuitas de jiu-jítsu para a comunidade, promovendo saúde, disciplina e inclusão. Durante as aulas, os alunos também têm a oportunidade de ouvir a Palavra de Deus, fortalecendo a fé e valores como respeito e trabalho em equipe. Participe!<br />  
                                    <p style={{ fontWeight: 'bold' }}>As aulas acontecem às segundas e quintas-feiras: 19h para crianças e 20h para adultos, e aos sábados, às 10h.</p>  
                                </>  
                            }
                            images={[JiuJitsu, JiuJitsu2, JiuJitsu5, JiuJitsu6]}
                            ref={projetoJiuJitsuRef}
                            isSmallScreen={isSmallScreen}
                        />                      
                    </Container>
                </main>
            </div>
            <RodaPe />
        </div>
    );
}

const Section = forwardRef(({ title, text, images, isSmallScreen }, ref) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
    };

    return (
        <div className={styles.section} ref={ref}>
            <div className={styles.sectionText}>
                <h2
                    className={styles.sectionTitle}
                    style={{
                        fontSize: isSmallScreen ? "1.7rem" : "2rem",
                        textAlign: "center",
                        margin: isSmallScreen ? "10px 0" : "20px 0",
                    }}
                >
                    {title}
                </h2>
                <p className={styles.sectionLead}>{text}</p>
            </div>
            <div className={styles.sectionImages}>
                <Slider {...settings}>
                    {images.map((src, index) => (
                        <div key={index} className={styles.sectionImageWrapper}>
                            <Image src={src} className={styles.sectionImage} alt={title} layout="responsive" width={400} height={200} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
});

export default Encontros;