import React from 'react';
import { withRouter } from 'react-router-dom';
import { Space, Card } from 'antd';
import styd from 'styled-components';

//앤트디와 스타일컴포 어떻게 하는지?에 대해 실험을 좀 해 보았습니다.
const CardWrap = styd(Card)`
border: 1px solid black;
`;

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
            <div className='aa'>
                <span className='h1'> 회원가입 </span>
            </div>
            <div className='userPageWrapper'>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                >
                    <div>
                        <Space direction='vertical'>
                            <CardWrap title='닉네임' style={{ width: 500 }}>
                                <input
                                    type='text'
                                    placeholder='닉네임'
                                    name='username'
                                    onChange={handleInputValue}
                                />
                            </CardWrap>
                            <Card title='이메일' style={{ width: 500 }}>
                                <input
                                    type='text'
                                    placeholder='이메일'
                                    name='email'
                                    onChange={handleInputValue}
                                />
                            </Card>
                            <Card title='비밀번호' style={{ width: 500 }}>
                                <input
                                    type='text'
                                    placeholder='비밀번호'
                                    name='password'
                                    onChange={handleInputValue}
                                />
                            </Card>
                            <Card title='비밀번호 확인' style={{ width: 500 }}>
                                <input
                                    type='text'
                                    placeholder='비밀번호를 다시 한 번 입력하세요'
                                    name='passwordCheck'
                                    onChange={handleInputValue}
                                />
                            </Card>
                        </Space>
                        {/* // TODO : 프로필 -> 컬러피커 패키지: 피커 모양은 간단한걸로 */}
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
