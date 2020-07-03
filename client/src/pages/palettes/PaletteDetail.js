import React from 'react';
import { Link } from 'react-router-dom';

const PaletteDetail = () => {
    //TODO: 이 페이지 들어올 때 해당 팔레트 GET 요청
    //props를 사용하여 변경

    return (
        <main>
            <div>
                {/* className: wrapper */}
                <h1> 팔레트 디테일 </h1>
                <div>
                    {/* 내부 감싸기 위한 div */}
                    <div>
                        {/* left palette */}
                        <div>팔레트 props </div>
                        <Link to='/editPalette/:id'>색갈피 편집</Link>
                        <div>
                            {/* 팔레트 쉐어 */}
                            <ul>
                                <li>
                                    <button>공유</button>
                                </li>
                                <li>
                                    <button>다운로드</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        {/* right desc */}
                        <div>
                            <span>팔레트 제목</span>
                            <span>닉네임</span>
                        </div>
                        <article>hex</article>
                        <article>rgb</article>
                    </div>
                </div>
                <div> 설명 칸 </div>
            </div>
        </main>
    );
};

export default PaletteDetail;
