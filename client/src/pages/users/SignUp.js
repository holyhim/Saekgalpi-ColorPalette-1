import React, { useReducer } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { Space } from 'antd';
import { SignUpInput, SignUpForm, WaveButton } from '../Pages_styd';
import { SignUpPostAPI } from '../../UserAPI';
const reducer = (state, action) => {
    return {
        ...state,
        [action.name]: action.value,
    };
};

//사인 업
const SignUp = ({ history }) => {
    const [state, dispatch] = useReducer(reducer, {
        userName: '',
        email: '',
        password: '',
        checkPassword: '',
    });

    const { userName, email, password, checkPassword, isLogin } = state;
    const onClickSignUpButton = (e) => {
        e.preventDefault();
        SignUpPostAPI(state).then((res) => {
            if (res.status === 200) {
                history.push('/signIn');
            }
        });
        //data 보낼 때 state를 보내면 됩니다.
    };

    const handleInputValue = (e) => {
        dispatch(e.target);
    };

    if (isLogin) {
        history.push('/');
    }

    return (
        <main>
            {isLogin ? <Redirect to='/' /> : ''}
            <span className='h1'> 회원가입</span>
            <div className='userPageWrapper SignUpWrapper'>
                <form onSubmit={(e) => {}}>
                    <div>
                        <Space direction='vertical'>
                            <SignUpForm style={{ width: 500, height: 80 }}>
                                <SignUpInput
                                    type='text'
                                    placeholder='닉네임'
                                    name='userName'
                                    value={userName}
                                    onChange={handleInputValue}
                                    required
                                />
                            </SignUpForm>
                            <SignUpForm style={{ width: 500, height: 80 }}>
                                <SignUpInput
                                    type='text'
                                    placeholder='이메일'
                                    name='email'
                                    value={email}
                                    onChange={handleInputValue}
                                />
                            </SignUpForm>
                            <SignUpForm style={{ width: 500, height: 80 }}>
                                <SignUpInput
                                    type='password'
                                    placeholder='비밀번호'
                                    name='password'
                                    value={password}
                                    onChange={handleInputValue}
                                />
                            </SignUpForm>
                            <SignUpForm style={{ width: 500, height: 80 }}>
                                <SignUpInput
                                    type='password'
                                    placeholder='비밀번호 재입력'
                                    name='checkPassword'
                                    value={checkPassword}
                                    onChange={handleInputValue}
                                />
                            </SignUpForm>
                        </Space>
                        {/* // TODO : 프로필 -> 컬러피커 패키지: 피커 모양은 간단한걸로 */}
                    </div>
                    <div>
                        <WaveButton onClick={onClickSignUpButton}>
                            회원가입
                        </WaveButton>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default withRouter(SignUp);
