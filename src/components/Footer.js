import React from 'react';

import './Footer.scss';

// animeshon srl - sede legale: indirizzo - piva/cf - iscrizione camera di commercio
const Footer = () => {
    const date = new Date().getFullYear();

    return (
        <footer id="footer">
            <div>
                <p>
                    Copyright &copy; {date} Animeshon S.r.l. All Rights
                    Reserved.
                </p>
                <hr />
                <small>
                    VAT: IT03072020211 &bull; REA Number: BZ230175 &bull;
                    Chamber of Commerce of Bolzano &bull; Share Capital: 9000€
                </small>
            </div>
        </footer>
    );
};

export default Footer;
