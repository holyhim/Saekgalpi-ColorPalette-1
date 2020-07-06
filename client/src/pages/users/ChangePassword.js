import React from 'react';
import './ChangePassword.scss';
import { Input, Space, Button } from 'antd';
import styd from 'styled-components';

const FormInput = styd(Input.Password)`
margin-bottom: 20px;
&:hover{
    border: 1px solid #a7a7a7;
}
&:focus {
    border: 1px solid #a7a7a7;
    box-shadow: 0 0 0 2px #e1e1e1;
}
`;

const SubHeaderButton = styd(Button)`
color: #a6a6a6;
background-color: #e7e7e7;
border: 1px solid #e7e7e7;
margin-top: 30px;

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

const ChangePassword = () => {
    // TODO: 이 페이지 들어올 때 해당 유저 GET 요청

    const onClickSaveButton = () => {
        // TODO: 서버로 비밀번호 수정 POST 요청 (axios 사용)
    };

    const handleInputValue = (e) => {
        // TODO: Input 값 value로 받아 state 설정
        // e.target.value
    };

    return (
        <main>
            <div className='aa'>
                <span className='h1'> 비밀번호 변경 </span>
            </div>
            <div className='formWrap'>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                >
                    {/* // TODO: 시그니처 컬러 변경: 컬러피커 이용 */}

                    <Space direction='vertical'>
                        <FormInput
                            placeholder='현재 비밀번호'
                            onChange={handleInputValue}
                        />
                        <FormInput
                            placeholder='새로운 비밀번호'
                            onChange={handleInputValue}
                        />
                        <FormInput
                            placeholder='새로운 비밀번호 확인'
                            onChange={handleInputValue}
                        />
                    </Space>
                    <div className='buttonWrap'>
                        <SubHeaderButton onClick={onClickSaveButton}>
                            저장
                        </SubHeaderButton>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default ChangePassword;
