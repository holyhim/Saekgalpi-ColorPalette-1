import React, { useState } from 'react';
import { RootState } from '../../reducer';
import { connect } from 'react-redux';
import { setUserSuccess } from '../../actions/userAction';
import { signatureColorPostAPI } from '../../apis/paletteAPI';
import { BlockPicker } from 'react-color';
import styled from 'styled-components';
import { WaveButton } from '../Pages_styd';

type ChangeSignatureColorProps = {
  userInfo: object;
  token: any;
  isLoggingIn: boolean;
  setSignatureColor: (
    isLoggingIn: boolean,
    userInfo: object,
    token: any
  ) => void;
};

const ColorPicker = styled(BlockPicker)<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  left: 1rem;
  top: 10px;
`;

const SignatureColor = styled.div<{ color: string }>`
  width: 300px;
  height: 300px;
  cursor: pointer;
  background-color: ${(props) => props.color || 'royalblue'};
`;

// 타입 설정해주기
function ChangeSignatureColor({
  userInfo,
  token,
  isLoggingIn,
  setSignatureColor,
}: ChangeSignatureColorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [userColor, setUserColor] = useState(userInfo.signatureColor);

  const togglePicker = () => {
    setIsOpen((prevState) => !prevState);
  };

  const onChangeComplete = (color: any) => {
    setUserColor(color.hex);
  };

  const onClickSaveButton = async () => {
    try {
      await signatureColorPostAPI(userInfo.id, userColor);

      const newUserInfo = { ...userInfo, signatureColor: userColor };
      setSignatureColor(isLoggingIn, newUserInfo, token);
    } catch (error) {
      console.log(error);
    }
  };

  return (
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
}

// userInfo type 정해지면 수정하기
const mapDispatchToProps = (dispatch: any) => {
  return {
    setSignatureColor: (isLoggingIn: boolean, userInfo: object, token: any) =>
      dispatch(setUserSuccess(isLoggingIn, userInfo, token)),
  };
};

const mapStateToProps = (props: RootState) => {
  return {
    userInfo: props.userReducer.userInfo,
    isLoggingIn: props.userReducer.isLoggingIn,
    token: props.userReducer.token,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangeSignatureColor);
