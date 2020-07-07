import React, { useReducer } from 'react';
import { withRouter } from 'react-router-dom';
import { Space } from 'antd';
import { SignUpInput, SignUpForm, WaveButton } from '../Pages_styd';

const reducer = (state, action) => {
    return {
        ...state,
        [action.name]: action.value,
    };
};

//사인 업
const SignUp = ({ history }) => {
    const [state, dispatch] = useReducer(reducer, {
        username: '',
        email: '',
        password: '',
        passwordCheck: '',
    });

    const { username, email, password, passwordCheck } = state;
    const onClickSignUpButton = (e) => {
        e.preventDefault();
        // TODO: 서버로 회원가입 POST 요청 (axios 사용)
        history.push('/signIn');
        //data 보낼 때 state를 보내면 됩니다.
    };

    const handleInputValue = (e) => {
        dispatch(e.target);
    };

    //console.log(state); 스테이트가 잘 들어오는지 확인

    return (
        <main>
            <span className='h1'> 회원가입</span>
            <div className='userPageWrapper SignUpWrapper'>
                <form onSubmit={(e) => {}}>
                    <div>
                        <Space direction='vertical'>
                            <SignUpForm style={{ width: 500, height: 80 }}>
                                <SignUpInput
                                    type='text'
                                    placeholder='닉네임'
                                    name='username'
                                    value={username}
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
                                    name='passwordCheck'
                                    value={passwordCheck}
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
