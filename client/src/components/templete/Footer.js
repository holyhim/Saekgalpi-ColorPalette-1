import React from 'react';
import styd from 'styled-components';

//푸터 같은 경우엔 한 페이지에서 다 작업을 하고 싶어서 styd를 사용했습니다.
const FooterTemp = styd.footer`
width: 100%;
height: 100px;
background-color: #aa0033;
position: absolute;
bottom: 0;
display: flex;
justify-content: space-between;
align-items: center;
color: white;
`;

const LogoLine = styd.div`
display: flex;
align-items: center;
img {
    width: 80px;
    margin: 0 30px;
}
`;

const FooterNavgation = styd.div`
padding-right: 100px;
li {
    display: inline-block;
    margin-left: 10px;
}
`;

const Footer = () => {
    return (
        <FooterTemp>
            <LogoLine>
                <a>
                    {/* 로고 넣어 주세요 / 카피라이트의 한글화 */}
                    <img src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FcnAIp5%2FbtqFnOrXu4B%2F2naGmXsdhF1fwvPgWy9ALK%2Fimg.png' />
                </a>
                <div>© 색갈피 by 화백. From a creative to all the others.</div>
            </LogoLine>
            <FooterNavgation>
                {/* 링크 + svg icon 넣어 주세요 / 나중에 글씨는 전부 삭제합니다 */}
                <ul>
                    <li>
                        <a>개발자 페이지</a>
                    </li>
                    <li>
                        <a>색갈피 깃헙</a>
                    </li>
                    <li>
                        <a>후원</a>
                    </li>
                </ul>
            </FooterNavgation>
        </FooterTemp>
    );
};

export default Footer;
