import React from 'react';
import './ChangePassword.scss';

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
            <h1> 비밀번호 수정 </h1>
            <div className='formWrap'>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                >
                    <div>
                        {/* // TODO: 시그니처 컬러 변경: 컬러피커 이용 */}
                        <input
                            type='text'
                            placeholder='현재 비밀번호를 입력해주세요.'
                            name='currentPassword'
                            onChange={handleInputValue}
                        />
                        <input
                            type='text'
                            placeholder='새 비밀번호를 입력해주세요.'
                            name='newPassword'
                            onChange={handleInputValue}
                        />
                        <input
                            type='text'
                            placeholder='비밀번호를 다시 한 번 입력하세요'
                            name='newPasswordCheck'
                            onChange={handleInputValue}
                        />
                    </div>
                    <div className='buttonWrap'>
                        <button onClick={onClickSaveButton}>저장</button>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default ChangePassword;
