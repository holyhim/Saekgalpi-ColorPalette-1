import React from 'react';
import styled from 'styled-components';
import CopyToClipboard from 'react-copy-to-clipboard';

const RandomColor = styled.div`
  position: absolute;
  border-radius: 0 10px;
  width: 120px;
  height: 120px;
  background-color: ${(props) => props.color || 'blue'};
`;

type RandomColorListEntryProps = {
  color: string;
};

function RandomColorListEntry({ color }: RandomColorListEntryProps) {
  return (
    <CopyToClipboard text={color}>
      <div className='random-color__wrapper'>
        <RandomColor className='random-color__color' color={color} />
        <span className='random-color__info--span no-drag'>복사하기</span>
        <div className='random-color__info--hidden'>
          <span className='random-color__color-code no-drag'>{color}</span>
        </div>
      </div>
    </CopyToClipboard>
  );
}

export default RandomColorListEntry;
//모든 색갈피 페이지
//시그니처 색상 페이지
//팔레트 편집 페이지
//영어로 쓰인 모든 거 바꾸기
