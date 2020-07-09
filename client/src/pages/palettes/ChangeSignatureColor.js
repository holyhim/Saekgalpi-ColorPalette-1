import React, { useState } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { ColorPicker, SignatureColor, WaveButton } from '../Pages_styd';
import axios from 'axios';

const ChangeSignatureColor = ({ userInfo, setUserInfo, history, match }) => {
    const { id } = match.params;

    if (userInfo && id !== String(userInfo.id)) {
        history.push('/');
    }

    const [isOpen, setIsOpen] = useState(false);
    const [color, setColor] = useState(userInfo && userInfo.signatureColor);

    const togglePicker = () => {
        setIsOpen((prevState) => !prevState);
    };

    const onChangeComplete = (color) => {
        setColor(userInfo && color.hex);
    };

    const onClickSaveButton = async () => {
        try {
            await axios.post(
                `http://localhost:5000/changeSignatureColor/${userInfo.id}`,
                {
                    signatureColor: color,
                }
            );
            setUserInfo({ ...userInfo, signatureColor: color });
            history.push('/');
        } catch (error) {
            console.log(error);
        }
    };

    return !userInfo ? (
        <Redirect to={'/'} />
    ) : (
        <main className='change-signature-color__main'>
            <span className='h1'>나만의 색 변경</span>
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
                        <SignatureColor
                            className='change-signature-color__color'
                            onClick={togglePicker}
                            color={color}
                        />
                        <ColorPicker
                            className='change-signature-color__st'
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
