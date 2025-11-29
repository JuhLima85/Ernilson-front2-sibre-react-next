import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import WhatsAppIcon from '../public/WhatsApp_icone.png';
import Image from 'next/image';
import styles from '../styles/BotaoWhatsapp.module.css';

const BotaoWhatsapp = () => {
    const [showTooltip, setShowTooltip] = useState(false); 
    const springProps = useSpring({
        to: async (next, cancel) => {
            while (true) {
                await next({ transform: 'translate3d(0,0,0) scale(1)' });
                await next({ transform: 'translate3d(0,-10px,0) scale(1.1)' });
                await next({ transform: 'translate3d(0,0,0) scale(1)' });
                await next({ transform: 'translate3d(0,10px,0) scale(1.1)' });
            }
        },
        from: { transform: 'translate3d(0,0,0) scale(1)' },
        config: { tension: 200, friction: 10 },
        delay: 500,
    });

    return (
      <animated.div 
          style={{ ...springProps }} 
          className={styles['botao-whatsapp']}
          onMouseEnter={() => setShowTooltip(true)} 
          onMouseLeave={() => setShowTooltip(false)} 
      >
          <a
              href="https://wa.me/556199178363?text=Olá%20pastor%20Gustavo%2C%20fui%20redirecionado%20pelo%20site%20da%20igreja."
              target="_blank"
              rel="noopener noreferrer"
          >
              <Image
                  src={WhatsAppIcon}
                  alt="WhatsApp"
                  width={44}
                  height={44}
                  layout="fixed"
              />
          </a>
          {showTooltip && ( 
              <div className={styles['tooltip']}> 
                  Atendimento Pastoral
              </div>
          )}
      </animated.div>
  );
};

export default BotaoWhatsapp;