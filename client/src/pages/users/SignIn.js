import React from 'react';
import { withRouter } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import './SignIn.scss';
import styd from 'styled-components';

const FormAll = styd(Form.Item)`
width: 500px;
margin-bottom: 30px;
`;

const FormInput = styd(Input)`
height: 70px;
padding: 0 27px;
font-size: 1.5em;
&:hover{
    border: 1px solid #a7a7a7;
}
&:focus {
    border: 1px solid #a7a7a7;
    box-shadow: 0 0 0 2px #e1e1e1;
}

`;

const FormInputPW = styd(Input.Password)`
height: 70px;
padding: 0 27px;
&:hover{
    border: 1px solid #a7a7a7;
}
&:focus {
    border: 1px solid #a7a7a7;
    box-shadow: 0 0 0 2px #e1e1e1;
}
.ant-input{
    font-size: 1.5em;
}
`;

const SubHeaderButton = styd(Button)`
color: #a6a6a6;
background-color: #e7e7e7;
border: 1px solid #e7e7e7;
margin: 10px;

&:hover{
    background-color: #e7e7e7;
    border: 1px solid #e7e7e7;
    color: #5d5d5d;
}
&:focus {
    background-color: #e7e7e7;
    border: 1px solid #e7e7e7;
    color: #a6a6a6;
}
&:after {
    --antd-wave-shadow-color: #c7c7c7;
}
`;

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
            <div className='aa'>
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
                    <FormAll
                        name='email'
                        rules={[
                            {
                                required: true,
                                message: '이메일을 입력해 주세요',
                            },
                        ]}
                        onChange={handleInputValue}
                    >
                        <FormInput placeholder='이메일' />
                    </FormAll>

                    <FormAll
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
                        <FormInputPW placeholder='비밀번호' />
                    </FormAll>

                    <Form.Item>
                        <SubHeaderButton
                            type='primary'
                            htmlType='submit'
                            onClick={onClickSignInButton}
                        >
                            로그인
                        </SubHeaderButton>
                        <SubHeaderButton
                            type='primary'
                            htmlType='submit'
                            onClick={onClickSignUpButton}
                        >
                            회원가입
                        </SubHeaderButton>
                    </Form.Item>
                </Form>
            </div>
        </main>
    );
};

export default withRouter(SignIn);
