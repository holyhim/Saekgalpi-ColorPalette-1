import React, { useReducer } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { Form } from 'antd';
import { SignForm, EmailInput, WaveButton, SignInPWInput } from '../Pages_styd';
import { SignUpPostAPI } from '../../UserAPI';

const initialState = {
    userName: '',
    email: '',
    password: '',
    checkPassword: '',
};

const reducer = (state, action) => {
    return {
        ...state,
        [action.type]: action.value,
    };
};

//사인 업
const SignUp = ({ isLogin, history }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { userName, email, password, checkPassword } = state;

    const onClickSignUpButton = (e) => {
        e.preventDefault();
        SignUpPostAPI(state).then((res) => {
            if (res.status === 200) {
                alert('회원 가입이 완료되었습니다. 로그인을 해 주세요.');
                history.push('/signIn');
            }
        });
    };

    const handleInputValue = (e) => {
        dispatch({ type: e.target.name, value: e.target.value });
        console.log(state);
    };

    return (
        <main>
            {isLogin ? <Redirect to='/' /> : ''}
            <div>
                <span className='h1'>회원가입</span>
            </div>
            <div className='userPageWrapper SignUpWrapper'>
                <Form
                    name='signUp'
                    initialValues={{ remember: true }}
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                >
                    <SignForm
                        name='userName'
                        rules={[
                            {
                                required: true,
                                message: '닉네임을 입력해 주세요.',
                            },
                        ]}
                        onChange={handleInputValue}
                    >
                        <EmailInput
                            placeholder='닉네임'
                            name='userName'
                            value={userName}
                        />
                    </SignForm>
                    <SignForm
                        name='email'
                        rules={[
                            {
                                type: 'email',
                                required: true,
                                message: '이메일을 입력해 주세요.',
                            },
                        ]}
                        onChange={handleInputValue}
                    >
                        <EmailInput
                            placeholder='이메일'
                            name='email'
                            value={email}
                        />
                    </SignForm>

                    <SignForm
                        name='password'
                        rules={[
                            {
                                required: true,
                                message: '비밀번호를 입력해 주세요.',
                            },
                        ]}
                        onChange={handleInputValue}
                        hasFeedback
                        dependencies={['password']}
                    >
                        <SignInPWInput
                            placeholder='비밀번호'
                            name='password'
                            value={password}
                        />
                    </SignForm>

                    <SignForm
                        name='checkPassword'
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: '비밀번호 확인을 입력해 주세요.',
                            },
                            ({ getFieldValue }) => ({
                                validator(rule, value) {
                                    if (
                                        !value ||
                                        getFieldValue('password') === value
                                    ) {
                                        return Promise.resolve();
                                    }

                                    return Promise.reject(
                                        '두 비밀번호가 맞지 않습니다.'
                                    );
                                },
                            }),
                        ]}
                        dependencies={['password']}
                        onChange={handleInputValue}
                    >
                        <SignInPWInput
                            placeholder='비밀번호 확인'
                            name='checkPassword'
                            value={checkPassword}
                        />
                    </SignForm>
                    <Form.Item>
                        <WaveButton onClick={onClickSignUpButton}>
                            회원가입
                        </WaveButton>
                    </Form.Item>
                </Form>
            </div>
        </main>
    );
};

export default withRouter(SignUp);
