import React, { useState } from 'react';

import { ColorPicker, SignatureColor } from '../Pages_styd';

const ChangeSignatureColor = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [color, setColor] = useState('royalblue');

    const togglePicker = (e) => {
        setIsOpen((prevState) => !prevState);
    };

    const onChangeComplete = (color, e) => {
        // console.log(color); -> rgb, hex 다 가지고 있어요
        setColor(color.hex);
    };

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
                        <SignatureColor
                            className='change-signature-color__color'
                            onClick={togglePicker}
                            color={color}
                        >
                            color 정보 받아서 background로
                        </SignatureColor>
                        <ColorPicker
                            color={color}
                            isOpen={isOpen}
                            onChangeComplete={onChangeComplete}
                        />
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
