import React from 'react';
import { withRouter } from 'react-router-dom';

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
            <h1> 로그인 </h1>
            <div>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                >
                    <div>
                        <input
                            type='text'
                            placeholder='이메일'
                            name='email'
                            onChange={handleInputValue}
                        />
                        <input
                            type='text'
                            placeholder='비밀번호'
                            name='password'
                            onChange={handleInputValue}
                        />
                    </div>
                    <div>
                        <button onClick={onClickSignUpButton}>회원가입</button>
                        <button onClick={onClickSignInButton}>로그인</button>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default withRouter(SignIn);
