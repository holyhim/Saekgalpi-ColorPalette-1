import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStickyNote, faMugHot } from '@fortawesome/free-solid-svg-icons';
//import { faSquare } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import styd from 'styled-components';
import { Layout } from 'antd';
let { Footer } = Layout;

Footer = styd(Footer)`
background-color: #f7f7f7;
height: 90px;
border-top: 1px solid #ececec;
display: flex;
justify-content: space-between;
color: #d7d7d7;
a{
    color: #a7a7a7;
}
a:hover {
    color: #5c5c5c;
}
`;

const FooterDiv = () => {
    return (
        <Footer>
            <div className='footer__LOGO'>
                <a href='/'>색갈피</a>
                <span>
                    © <span className='footer__LOGO--font'>색갈피</span>의 모든
                    권한은<span className='footer__LOGO--font'>화백</span>에게
                    있습니다.
                </span>
            </div>
            <nav className='footer__Nav'>
                <ul>
                    <li>
                        <a href='/'>
                            <FontAwesomeIcon icon={faStickyNote} size='2x' />
                        </a>
                    </li>
                    <li>
                        <a
                            target='_blank'
                            href='https://github.com/codestates/Saekgalpi-ColorPalette'
                        >
                            <FontAwesomeIcon icon={faGithub} size='2x' />
                        </a>
                    </li>
                    <li>
                        <a href='/'>
                            <FontAwesomeIcon icon={faMugHot} size='2x' />
                        </a>
                    </li>
                </ul>
            </nav>
        </Footer>
    );
};

export default FooterDiv;
