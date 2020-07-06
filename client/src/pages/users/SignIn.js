import React from 'react';
import { withRouter } from 'react-router-dom';
import { Form } from 'antd';

import {
    WaveButton,
    EmailInput,
    SignInForm,
    SignInPWInput,
} from '../Pages_styd';

const SignIn = ({ history }) => {
    const onClickSignInButton = () => {
        // TODO: 서버로 로그인 POST 요청 (axios 사용)
    };

    const onClickSignUpButton = (e) => {
        e.preventDefault();
        history.push('/signUp');
    };

    const handleInputValue = (e) => {
        // TODO: Input 값 value로 받아 state 설정
        // e.target.value
    };

    return (
        <main>
            <div>
                <span className='h1'> 로그인 </span>
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
                        onChange={handleInputValue}
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
                        onChange={handleInputValue}
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
