import React from 'react';
import { Link } from 'react-router-dom';
import PaletteList from '../components/PaletteList';

const MyPage = () => {
    const isAdmin = true; // 추후 state로 변경 예정 / 임시 변수

    return (
        <main>
            <h1>마이페이지</h1>
            <section>
                <div>
                    <Link to='/changeSignatureColor/:id'>
                        시그니처 컬러 변경
                    </Link>
                    {/* 마이페이지의 내 시그니처 컬러를 누르면 이동 */}
                </div>
                <button>
                    <Link to='/changePassword/:id'>비밀번호 변경</Link>
                </button>
            </section>
            <section>
                <PaletteList />
                {/* //TODO: isAdmin을 하위 컴포넌트에 props로 넘겨주고, 하위 컴포넌트에서 팔레트 삭제 버튼을 추가 */}
            </section>
            {isAdmin ? (
                <section>
                    관리자가 들어왔을 때(isAdmin === true) 모든 유저 목록을
                    화면에 뿌려줄 예정입니다 & 삭제 버튼도 존재
                </section>
            ) : (
                <></>
            )}
        </main>
    );
};

export default MyPage;
