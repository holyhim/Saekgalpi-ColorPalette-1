import React from 'react';
import styled from 'styled-components';
import './ChangeSignatureColor.scss';

const ChangeSignatureColor = () => {
    // TODO: 이 페이지 들어올 때 해당 유저 GET 요청 (useEffect, axios)

    const onClickSaveButton = () => {
        // TODO: 서버로 시그니처 컬러 수정 POST 요청 (axios 사용)
    };

    return (
        <main className='change-signature-color__main'>
            <h1 className='change-signature-color__title'>
                시그니처 컬러 변경
            </h1>
            <div>
                <form
                    className='change-signature-color__form'
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                >
                    <div className='change-signature-color__picker'>
                        {/* // TODO: 시그니처 컬러 변경: 컬러피커 이용 */}
                    </div>

                    <button
                        className='change-signature-color__button'
                        onClick={onClickSaveButton}
                    >
                        저장
                    </button>
                </form>
            </div>
        </main>
    );
};

export default ChangeSignatureColor;
