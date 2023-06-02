import React from 'react';
import useCursorStyle from '../../../hooks/useCursorStyle';
import AnimateOnScreen from '../../AnimateOnScreen';
import SocialMedia from '../../SocialMedia';
import { ContactSection } from './styles';

const Contact = () => {
  const { addCursorBorder, removeCursorBorder } = useCursorStyle();

  return (
    <AnimateOnScreen>
      <ContactSection>
        <div className="column">
          <a
            className="contact-text"
            href="tel:+1.902.417.0634"
            onMouseEnter={addCursorBorder}
            onMouseLeave={removeCursorBorder}
          >
            +918423662950
          </a>
          <br />
          <a
            className="contact-text"
            href="mailto:nitishupkr@gmail.com"
            onMouseEnter={addCursorBorder}
            onMouseLeave={removeCursorBorder}
          >
            nitishupkr@gmail.com
          </a>
        </div>
        <address className="column contact-text">
          Sushant Aquapolish<br /> Crossing republik, Ghaziabad Uttar Pradesh
        </address>
        <SocialMedia className="column" />
      </ContactSection>
    </AnimateOnScreen>
  );
};

export default React.memo(Contact);
