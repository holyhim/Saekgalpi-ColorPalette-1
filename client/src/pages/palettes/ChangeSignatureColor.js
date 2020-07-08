import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { ColorPicker, SignatureColor, WaveButton } from '../Pages_styd';
import axios from 'axios';

const ChangeSignatureColor = ({ userInfo, history, match }) => {
    const { id } = match.params;
    const [isOpen, setIsOpen] = useState(false);
    const [color, setColor] = useState(userInfo.signatureColor);

    const togglePicker = () => {
        setIsOpen((prevState) => !prevState);
    };

    const onChangeComplete = (color, e) => {
        setColor(color.hex);
    };

    const onClickSaveButton = async () => {
        await axios.post(`http://localhost:5000/changeSignatureColor/${id}`, {
            signatureColor: userInfo.signatureColor,
        });
    };
    if (id !== String(userInfo.id)) {
        history.push('/');
    }
    return (
        <main className='change-signature-color__main'>
            <span className='h1'>시그니처 컬러 변경</span>
            <div className='CGPalWarpper'>
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

export default withRouter(ChangeSignatureColor);
