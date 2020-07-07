import React, { useState } from 'react';

import { ColorPicker, SignatureColor, WaveButton } from '../Pages_styd';

const ChangeSignatureColor = () => {
    // TODO: 상위 컴포넌트에서 시그니처 컬러 받기
    const [isOpen, setIsOpen] = useState(false);
    const [color, setColor] = useState('#0652DD');

    const togglePicker = () => {
        setIsOpen((prevState) => !prevState);
    };

    const onChangeComplete = (color, e) => {
        setColor(color.hex);
    };

    const onClickSaveButton = () => {
        // TODO: 서버로 시그니처 컬러 수정 POST 요청 (axios 사용)
    };

    return (
        <main className='change-signature-color__main'>
            <span className='h1'>시그니처 컬러 변경</span>
            <div class='CGPalWarpper'>
                <form
                    className='change-signature-color__form'
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                >
                    <WaveButton
                        className='change-signature-color__button'
                        onClick={onClickSaveButton}
                    >
                        저장
                    </WaveButton>
                    <div className='change-signature-color__picker'>
                        {/* // TODO: 시그니처 컬러 변경: 컬러피커 이용 */}
                        <SignatureColor
                            className='change-signature-color__color'
                            onClick={togglePicker}
                            color={color}
                        />
                        <ColorPicker
                            color={color}
                            isOpen={isOpen}
                            onChangeComplete={onChangeComplete}
                        />
                    </div>
                </form>
            </div>
        </main>
    );
};

export default ChangeSignatureColor;
