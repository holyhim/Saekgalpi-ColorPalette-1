import React, { useState, useEffect } from 'react';
import PaletteList from '../../components/palette/PaletteList';

import { WaveButton } from '../Pages_styd';

import { AllPaletteGetAPI } from '../../PaletteAPI';
import { AdminGetAPI, AdminPostAPI } from '../../UserAPI';

const MyPage = ({ dispatch, isAdmin }) => {
    const [palleteData, setPalleteData] = useState([]);
    const [userData, setUserData] = useState([]);

    const onClickUserDeleteButton = (user) => {
        let id = user.id;
        AdminPostAPI(user, id).then((res) => {
            if (res.status === 200) {
                alert('유저가 삭제되었습니다.');
            }
        });
    };

    useEffect(() => {
        AdminGetAPI().then((res) => {
            setUserData(res.data);
        });
        AllPaletteGetAPI().then((res) => {
            setPalleteData(res.data);
        });
    }, []);

    return isAdmin ? (
        <main>
            <span className='h1'>관리자 페이지</span>
            <div className='userPageWrapper'>
                <div className='MyPage__wrapper'>
                    <section className='MyPage__PalWrapper'>
                        <h3 className='MyPage__AdminTitle'>색갈피 관리</h3>
                        <PaletteList
                            palettes={palleteData}
                            dispatch={dispatch}
                        />
                    </section>
                    <section className='MyPage__PalWrapper'>
                        <h3 className='MyPage__AdminTitle'>사용자 관리</h3>
                        <div className='MyPage__UserWrapper'>
                            {userData.map((user) => (
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
                                        {user.userName}
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
                                        onClick={() => {
                                            onClickUserDeleteButton(user);
                                        }}
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
    ) : (
        ''
    );
};

export default MyPage;
