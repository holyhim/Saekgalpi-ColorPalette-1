/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PaletteList from '../../components/palette/PaletteList';
import { UniquePaletteGetAPI } from '../../PaletteAPI';
import { WaveButton } from '../Pages_styd';
import styd from 'styled-components';

const MypageSig = styd.div`
width: 120px;
height: 150px;
background-color: ${(props) => props.signatureColor};
margin-bottom: 10px;
border-radius: 5px;
box-shadow: 0 0 20px 3px #d7d7d7;
position: relative;
div {
width: 120px;
heigth: 10px;
border-radius: 0 0 5px 5px;
    background-color: white;
    position: absolute;
    bottom: 0;

}
`;

const MyPage = ({ userInfo, dispatch, history, match }) => {
    const { id } = match.params;
    if (id !== String(userInfo.id)) {
        history.push('/');
    }

    const [userPalleteData, setUserPalleteData] = useState([]);
    useEffect(() => {
        UniquePaletteGetAPI(userInfo.id).then((res) => {
            setUserPalleteData([...res.data]);
        });
    }, []);
    return (
        //그리고 내 컬러 팔레트만 어떻게 가지고 올 수 있게 하는지? 그것도 물어봐야 되고
        <main>
            <span className='h1'>내 색갈피</span>
            <div className='userPageWrapper'>
                <div className='MyPage__wrapper'>
                    <section className='MyPage__Profile'>
                        <div>
                            <MypageSig signatureColor={userInfo.signatureColor}>
                                <div>{userInfo.signatureColor}</div>
                            </MypageSig>
                        </div>
                        <span className='Mypage__username'>
                            {userInfo.userName}
                        </span>
                        <span className='Mypage__email'>{userInfo.email}</span>
                    </section>
                    <section className='MyPage__BtnWrapper'>
                        <WaveButton>
                            <Link to={`/changeSignatureColor/${userInfo.id}`}>
                                나만의 색 변경
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
                    </section>
                </div>
            </div>
        </main>
    );
};

export default withRouter(MyPage);
