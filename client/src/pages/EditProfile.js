import React from 'react';

const EditProfile = () => {
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
            <h1> 회원정보수정 </h1>
            <div>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                >
                    <div>
                        <span>닉네임</span>
                        <span>이메일</span>
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
                        <button onClick={onClickSaveButton}>저장</button>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default EditProfile;
