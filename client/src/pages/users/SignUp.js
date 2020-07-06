import React from 'react';
import { withRouter } from 'react-router-dom';
import { Space } from 'antd';
import { SignUpInput, CardWrap, SubHeaderButton } from '../Pages_styd';

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

    //div 클래스 네임 aa 바꾸세요...
    return (
        <main>
            <div className='aa'>
                <span className='h1'> 회원가입 </span>
            </div>
            <div className='userPageWrapper SignUpWrapper'>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                >
                    <div>
                        <Space direction='vertical'>
                            <CardWrap style={{ width: 500, height: 80 }}>
                                <SignUpInput
                                    type='text'
                                    placeholder='닉네임'
                                    name='username'
                                    onChange={handleInputValue}
                                />
                            </CardWrap>
                            <CardWrap style={{ width: 500, height: 80 }}>
                                <SignUpInput
                                    type='text'
                                    placeholder='이메일'
                                    name='email'
                                    onChange={handleInputValue}
                                />
                            </CardWrap>
                            <CardWrap style={{ width: 500, height: 80 }}>
                                <SignUpInput
                                    type='text'
                                    placeholder='비밀번호'
                                    name='password'
                                    onChange={handleInputValue}
                                />
                            </CardWrap>
                            <CardWrap style={{ width: 500, height: 80 }}>
                                <SignUpInput
                                    type='text'
                                    placeholder='비밀번호 재입력'
                                    name='passwordCheck'
                                    onChange={handleInputValue}
                                />
                            </CardWrap>
                        </Space>
                        {/* // TODO : 프로필 -> 컬러피커 패키지: 피커 모양은 간단한걸로 */}
                    </div>
                    <div>
                        <SubHeaderButton onClick={onClickSignUpButton}>
                            회원가입
                        </SubHeaderButton>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default withRouter(SignUp);
