import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Form } from 'antd';
import { SignInPostAPI } from '../../UserAPI';

import {
    WaveButton,
    EmailInput,
    SignInForm,
    SignInPWInput,
} from '../Pages_styd';
//성공하면 isLogin을 true로 만들어 주고 세션 적용해야 하며 유저 인포가 필요함

const SignIn = ({ history, setUserInfo, userInfo, isLoginHandler }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onClickSignInButton = () => {
        SignInPostAPI({ email: email, password: password }).then((res) => {
            if (res.status === 200) {
                alert('로그인이 되었습니다');
                setUserInfo(res.data);
                isLoginHandler();
                history.push('/');
            }
        });
    };

    const onClickSignUpButton = (e) => {
        e.preventDefault();
        history.push('/signUp');
    };
    const handleInputEMAILValue = (e) => {
        // TODO: Input 값 value로 받아 state 설정
        setEmail(e.target.value);
    };
    const handleInputPWValue = (e) => {
        // TODO: Input 값 value로 받아 state 설정
        setPassword(e.target.value);
    };

    return (
        <main>
            <div>
                <span className='h1'> 로그인</span>
            </div>
            <div className='userPageWrapper SignInWrapper'>
                <Form
                    name='basic'
                    initialValues={{ remember: true }}
                    //이거..뭔지모르겠는데일단킵
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                >
                    <SignInForm
                        name='email'
                        rules={[
                            {
                                required: true,
                                message: '이메일을 입력해 주세요',
                            },
                        ]}
                        onChange={handleInputEMAILValue}
                        value={email}
                    >
                        <EmailInput placeholder='이메일' />
                    </SignInForm>

                    <SignInForm
                        name='password'
                        placeholer='이메일'
                        rules={[
                            {
                                required: true,
                                message: '비밀번호를 입력해 주세요',
                            },
                        ]}
                        onChange={handleInputPWValue}
                        value={password}
                    >
                        <SignInPWInput placeholder='비밀번호' />
                    </SignInForm>

                    <Form.Item>
                        <WaveButton
                            type='primary'
                            htmlType='submit'
                            onClick={onClickSignInButton}
                        >
                            로그인
                        </WaveButton>
                        <WaveButton
                            type='primary'
                            htmlType='submit'
                            onClick={onClickSignUpButton}
                        >
                            회원가입
                        </WaveButton>
                    </Form.Item>
                </Form>
            </div>
        </main>
    );
};

export default withRouter(SignIn);
