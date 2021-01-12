import React from 'react';

import './Footer.scss';

// animeshon srl - sede legale: indirizzo - piva/cf - iscrizione camera di commercio
const Footer = () => {
    const date = new Date().getFullYear();

    return (
        <footer id="footer">
            <div className="pp-tc">
                <ul>
                    <li>
                        <a
                            rel="noopener noreferrer"
                            href="https://www.iubenda.com/privacy-policy/48776658"
                            target="_blank"
                        >
                            Privacy Policy
                        </a>
                    </li>
                    <li>|</li>
                    <li>
                        <a
                            rel="noopener noreferrer"
                            href="https://www.iubenda.com/privacy-policy/48776658/cookie-policy"
                            target="_blank"
                        >
                            Cookie Policy
                        </a>
                    </li>
                    <li>|</li>
                    <li>
                        <a
                            rel="noopener noreferrer"
                            href="https://www.iubenda.com/terms-and-conditions/48776658"
                            target="_blank"
                        >
                            Terms and Conditions
                        </a>
                    </li>
                </ul>
            </div>
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
