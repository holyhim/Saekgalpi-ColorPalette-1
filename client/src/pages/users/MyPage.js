/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PaletteList from '../../components/palette/PaletteList';
import { UniquePaletteGetAPI } from '../../PaletteAPI';
import { WaveButton } from '../Pages_styd';

const MyPage = ({ userInfo, dispatch, history, match }) => {
    if (id !== String(userInfo.id)) {
        history.push('/');
    }

    const { id } = match.params;
    const isAdmin = false; // 추후 state로 변경 예정 / 임시 변수
    const [userPalleteData, setUserPalleteData] = useState([]);
    useEffect(() => {
        UniquePaletteGetAPI(userInfo.id).then((res) => {
            setUserPalleteData(res.data);
        });
    }, []);
    return (
        //그리고 내 컬러 팔레트만 어떻게 가지고 올 수 있게 하는지? 그것도 물어봐야 되고
        <main>
            <span className='h1'>마이페이지</span>
            <div className='userPageWrapper'>
                <div className='MyPage__wrapper'>
                    <section className='MyPage__Profile'>
                        <div>
                            <div>여기에 색상</div>시그니처 컬러
                            {userInfo.signatureColor}
                        </div>
                        <span>{userInfo.userName}</span>
                        <span>{userInfo.email}</span>
                    </section>
                    <section className='MyPage__BtnWrapper'>
                        <WaveButton>
                            <Link to={`/changeSignatureColor/${userInfo.id}`}>
                                시그니처 컬러 변경
                            </Link>
                        </WaveButton>
                        <WaveButton>
                            <Link to={`/changePassword/${userInfo.id}`}>
                                비밀번호 변경
                            </Link>
                        </WaveButton>
                    </section>
                    <section className='MyPage__PalWrapper'>
                        <h3 className='MyPage__AdminTitle'>내 색갈피 관리</h3>
                        <PaletteList
                            palettes={userPalleteData}
                            dispatch={dispatch}
                            userInfo={userInfo}
                        />
                        {/* //TODO: isAdmin을 하위 컴포넌트에 props로 넘겨주고, 하위 컴포넌트에서 팔레트 삭제 버튼을 추가 */}
                    </section>
                    {isAdmin ? (
                        <section>
                            관리자가 들어왔을 때(isAdmin === true) 모든 유저
                            목록을 화면에 뿌려줄 예정입니다 & 삭제 버튼도 존재
                        </section>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </main>
    );
};

export default withRouter(MyPage);
