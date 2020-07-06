import React from 'react';
import { Input, Space, Button } from 'antd';
import { FormInput2, SubHeaderButton } from '../Pages_styd';

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
                        <FormInput2
                            placeholder='현재 비밀번호'
                            onChange={handleInputValue}
                        />
                        <FormInput2
                            placeholder='새로운 비밀번호'
                            onChange={handleInputValue}
                        />
                        <FormInput2
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
