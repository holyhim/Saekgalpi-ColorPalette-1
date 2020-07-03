import React from 'react';
import { withRouter } from 'react-router-dom';

const SignUp = ({ history }) => {
    const onClickSignUpButton = (e) => {
        e.preventDefault();
        // TODO: 서버로 회원가입 POST 요청 (axios 사용)

        history.push('/');
    };

    const handleInputValue = (e) => {
        // TODO: Input 값 value로 받아 state 설정
        // e.target.value
    };

    return (
        <main>
            <h1> 회원가입 </h1>
            <div>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                >
                    <div>
                        <input
                            type='text'
                            placeholder='닉네임'
                            name='username'
                            onChange={handleInputValue}
                        />
                        {/* // TODO : 프로필 -> 컬러피커 패키지: 피커 모양은 간단한걸로 */}
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
                        <input
                            type='text'
                            placeholder='비밀번호를 다시 한 번 입력하세요'
                            name='passwordCheck'
                            onChange={handleInputValue}
                        />
                    </div>
                    <div>
                        <button onClick={onClickSignUpButton}>회원가입</button>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default withRouter(SignUp);
