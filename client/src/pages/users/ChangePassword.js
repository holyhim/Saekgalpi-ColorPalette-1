import React, { useReducer } from 'react';
import { withRouter } from 'react-router-dom';
import { Space } from 'antd';
import { PWInput, WaveButton } from '../Pages_styd';
import { ChangePasswordPostAPI } from '../../UserAPI';

const reducer = (state, action) => {
    return {
        ...state,
        [action.name]: action.value,
    };
};

//패스워드 바꾸기
const ChangePassword = ({ history, match, userInfo }) => {
    if (id !== String(userInfo.id)) {
        history.push('/');
    }

    const { id } = match.params;
    const [state, dispatch] = useReducer(reducer, {
        currentPassword: '',
        changePassword: '',
        checkChangePassword: '',
    });
    const { currentPassword, changePassword, checkChangePassword } = state;

    const onClickSaveButton = (e) => {
        e.preventDefault();
        const userID = userInfo.id;
        ChangePasswordPostAPI(state, userID).then((res) => {
            if (res.status === 200) {
                alert('비밀번호가 변경되었습니다.');
                history.push('/');
            }
        });
    };

    const handleInputValue = (e) => {
        dispatch(e.target);
    };
    return (
        <main>
            <div>
                <span className='h1'> 비밀번호 변경 </span>
            </div>
            <div className='formWrap'>
                {/* // TODO: 시그니처 컬러 변경: 컬러피커 이용 */}
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                >
                    <Space direction='vertical'>
                        <PWInput
                            placeholder='현재 비밀번호'
                            name='currentPassword'
                            onChange={handleInputValue}
                            value={currentPassword}
                        />
                        <PWInput
                            placeholder='새로운 비밀번호'
                            name='changePassword'
                            onChange={handleInputValue}
                            value={changePassword}
                        />
                        <PWInput
                            placeholder='새로운 비밀번호 확인'
                            name='checkChangePassword'
                            onChange={handleInputValue}
                            value={checkChangePassword}
                        />
                    </Space>
                    <div className='buttonWrap'>
                        <WaveButton onClick={onClickSaveButton}>
                            저장
                        </WaveButton>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default withRouter(ChangePassword);
