import React, { useReducer } from 'react';
import { withRouter } from 'react-router-dom';
import { Space } from 'antd';
import { PWInput, WaveButton } from '../Pages_styd';

const reducer = (state, action) => {
    return {
        ...state,
        [action.name]: action.value,
    };
};

//패스워드 바꾸기
const ChangePassword = ({ history, match, userInfo }) => {
    // TODO: 이 페이지 들어올 때 해당 유저 GET 요청
    const { id } = match.params;
    const [state, dispatch] = useReducer(reducer, {
        oldPW: '',
        newPW: '',
        newPWcheck: '',
    });
    const { oldPW, newPW, newPWcheck } = state;

    const onClickSaveButton = (e) => {
        e.preventDefault();
        // TODO: 서버로 비밀번호 수정 POST 요청 (axios 사용)
        if (!oldPW) {
            //만약에 데이터와 현재 비밀번호가 맞지 않으면 새로운 얼럿
        } else if (newPW !== newPWcheck) {
            //새로운 비번이랑 비번 체크랑 맞지 않으면 않는다고
        }
        //전부 되면 비밀번호가 변경 되었습니다 얼럿 사용 후 리다이렉트
        history.push('/');
    };

    const handleInputValue = (e) => {
        dispatch(e.target);
    };

    if (id !== userInfo.id) {
        history.push('/');
    }
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
                            name='oldPW'
                            onChange={handleInputValue}
                            value={oldPW}
                        />
                        <PWInput
                            placeholder='새로운 비밀번호'
                            name='newPW'
                            onChange={handleInputValue}
                            value={newPW}
                        />
                        <PWInput
                            placeholder='새로운 비밀번호 확인'
                            name='newPWcheck'
                            onChange={handleInputValue}
                            value={newPWcheck}
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
