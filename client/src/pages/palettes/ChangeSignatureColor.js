import React, { useState } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { ColorPicker, SignatureColor, WaveButton } from '../Pages_styd';
import { SignatureColorPostAPI } from '../../api/UserAPI';

const ChangeSignatureColor = ({ userInfo, setUserInfo, history, match }) => {
    const { id } = match.params;

    if (userInfo && id !== String(userInfo.id)) {
        history.push('/');
    }

    const [isOpen, setIsOpen] = useState(false);
    const [userColor, setUserColor] = useState(userInfo.signatureColor);

    const togglePicker = () => {
        setIsOpen((prevState) => !prevState);
    };

    const onChangeComplete = (color) => {
        setUserColor(color.hex);
    };

    const onClickSaveButton = async () => {
        try {
            await SignatureColorPostAPI(userInfo.id, userColor);
            setUserInfo({ ...userInfo, signatureColor: userColor });
            localStorage.setItem(
                'user',
                JSON.stringify({
                    ...userInfo,
                    signatureColor: userColor,
                })
            );
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
                            color={userColor}
                        />
                        <ColorPicker
                            className='change-signature-color__st'
                            color={userColor}
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
