import React from 'react';

const ChangeSignatureColor = () => {
    // TODO: 이 페이지 들어올 때 해당 유저 GET 요청 (useEffect, axios)

    const onClickSaveButton = () => {
        // TODO: 서버로 시그니처 컬러 수정 POST 요청 (axios 사용)
    };

    return (
        <main>
            <h1> 시그니처 컬러 변경 </h1>
            <div>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                >
                    <div>
                        {/* // TODO: 시그니처 컬러 변경: 컬러피커 이용 */}
                    </div>
                    <div>
                        <button onClick={onClickSaveButton}>저장</button>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default ChangeSignatureColor;
