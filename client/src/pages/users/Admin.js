import React from 'react';

import PaletteList from '../../components/palette/PaletteList';

import logos from '../../images/2.png';
import { WaveButton } from '../Pages_styd';

import { fakeFavPalettes } from '../../fakeData';
import { fakeAllUsers } from '../../fakeData';

const MyPage = ({ dispatch }) => {
    const onClickUserDeleteButton = async () => {
        console.log('삭제');
    };

    return (
        <main>
            <span className='h1'>관리자 페이지</span>
            <div className='userPageWrapper'>
                <div className='MyPage__wrapper'>
                    <section className='MyPage__PalWrapper'>
                        <h3 className='MyPage__AdminTitle'>색갈피 관리</h3>
                        <PaletteList
                            palettes={fakeFavPalettes}
                            dispatch={dispatch}
                        />
                    </section>
                    <section className='MyPage__PalWrapper'>
                        <h3 className='MyPage__AdminTitle'>사용자 관리</h3>
                        <div className='MyPage__UserWrapper'>
                            {fakeAllUsers.map((user) => (
                                <div key={user.id} className='Mypage__User'>
                                    <span
                                        style={{ display: 'block' }}
                                        className='Mypage__Text'
                                    >
                                        {user.id}
                                    </span>
                                    <span
                                        style={{ display: 'block' }}
                                        className='Mypage__Text'
                                    >
                                        {user.username}
                                    </span>
                                    <span
                                        style={{ display: 'block' }}
                                        className='Mypage__Text'
                                    >
                                        {user.email}
                                    </span>
                                    <span
                                        style={{ display: 'block' }}
                                        className='Mypage__Text'
                                    >
                                        {user.signatureColor}
                                    </span>
                                    <WaveButton
                                        onClick={onClickUserDeleteButton}
                                    >
                                        사용자 삭제
                                    </WaveButton>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
};

export default MyPage;
