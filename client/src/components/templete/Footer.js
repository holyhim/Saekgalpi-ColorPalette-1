import React from 'react';

const Footer = () => {
    //주석 나중에 제거하거나 다듬을 것
    return (
        <footer>
            <a>
                {/* 로고 넣어 주세요 / 카피라이트의 한글화 */}
                <img />
                Logo
            </a>
            <div>© 색갈피 by 화백. From a creative to all the others.</div>
            <nav>
                {/* 링크 + svg icon 넣어 주세요 / 나중에 글씨는 전부 삭제합니다 */}
                <ul>
                    <li>
                        <a>개발자 페이지</a>
                    </li>
                    <li>
                        <a>색갈피 깃헙</a>
                    </li>
                    <li>
                        <a>후원(cup of coffee)</a>
                    </li>
                </ul>
            </nav>
        </footer>
    );
};

export default Footer;
