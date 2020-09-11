import React, { useEffect } from 'react';

import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faShareAlt } from '@fortawesome/free-solid-svg-icons';

import CopyToClipboard from 'react-copy-to-clipboard';
import { getPaletteImage, convertHex } from '../../utils/helper';

import { paletteVisitPostAPI, paletteDeleteAPI } from '../../apis/paletteAPI';

import { Button } from 'antd';
import { EditButton, ShareBtn, PaletteDescription } from '../Pages_styd';

type ColorCodeProp = {
  number: number;
};

const Paltte = styled.div`
  background-color: ${(props) => props.color || 'black'};
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(1);
  }
`;

const PaletteWrapper = styled.div`
  width: 500px;
  height: 250px;
  margin-bottom: 20px;
  display: grid;

  grid-template-columns: repeat(${(props: ColorCodeProp) => props.number}, 1fr);
`;

const ColorCodeDetail = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props: ColorCodeProp) => props.number}, 1fr);
`;

const ColorCode = styled.div`
  background-color: ${(props) => props.color};
  text-align: center;
  padding: 5px;
  font-size: 0.8em;
`;

function PaletteDetail({ location, history }: any) {
  const {
    state: {
      id,
      userId,
      paletteName,
      description,
      colorCode01,
      colorCode02,
      colorCode03,
      colorCode04,
      colorCode05,
      colorCode06,
      colorCode07,
    },
  } = location;

  const colorCode = [
    colorCode01,
    colorCode02,
    colorCode03,
    colorCode04,
    colorCode05,
    colorCode06,
    colorCode07,
  ].filter((code: string) => code !== null);

  const onClickDownload = () => {
    getPaletteImage(colorCode);
  };

  const countVisit = () => {
    paletteVisitPostAPI(id);
  };

  const onClickDeleteBtn = () => {
    paletteDeleteAPI(id);
    history.push('/');
  };

  useEffect(() => {
    countVisit();
  });

  return (
    <main className='palette-detail__main'>
      <span className='h1'>색갈피 상세</span>
      <div className='palette-detail__all-wrapper'>
        <div className='palette-detail__container'>
          <div className='palette-detail__column'>
            <PaletteWrapper
              className='palette-detail__palette'
              number={colorCode.length}
            >
              {colorCode.map((color, idx) => (
                <CopyToClipboard text={color} key={idx}>
                  <Paltte color={color} key={idx} />
                </CopyToClipboard>
              ))}
            </PaletteWrapper>
            <span>색상을 클릭하면 HEX 코드가 복사됩니다</span>
            <div className='palette-detail__share-container'>
              {/* {!isLogin ? (
                <></>
              ) : (
                <>
                  <div>
                    <EditButton
                      className='palette-detail__edit-btn'
                      onClick={onClickDeleteBtn}
                    >
                      색갈피 삭제
                    </EditButton>
                    <EditButton
                      className='palette-detail__edit-btn'
                      onClick={onClickEditBtn}
                    >
                      색갈피 편집
                      // TODO: 여기 Link를 사용
                    </EditButton>
                  </div>
                </>
              )} */}
              <ul className='palette-detail__share-lists'>
                <li className='palette-detail__share-item'>
                  <CopyToClipboard text={`http://localhost:5000/${id}`}>
                    <ShareBtn className='palette-detail__item-link'>
                      <FontAwesomeIcon icon={faShareAlt} />
                    </ShareBtn>
                  </CopyToClipboard>
                </li>
                <li className='palette-detail__share-item'>
                  <ShareBtn
                    className='palette-detail__item-download'
                    onClick={onClickDownload}
                  >
                    <FontAwesomeIcon icon={faArrowDown} />
                  </ShareBtn>
                </li>
              </ul>
            </div>
          </div>
          <div className='palette-detail__column'>
            <div className='palette-detail__info'>
              <span className='palette-detail__title'>{paletteName}</span>
              <span className='palette-detail__username'>{userId}</span>
            </div>
            <article className='palette-detail__code-container'>
              <h5>HEX</h5>
              <ColorCodeDetail
                className='palette-detail__hex'
                number={colorCode.length}
              >
                {colorCode.map((color, idx) => (
                  <ColorCode color={color} key={idx}>
                    {color}
                  </ColorCode>
                ))}
              </ColorCodeDetail>
            </article>
            <article className='palette-detail__code-container'>
              <h5>RGB</h5>
              <ColorCodeDetail
                className='palette-detail__rgb'
                number={colorCode.length}
              >
                {colorCode.map((color, idx) => (
                  <ColorCode color={color} key={idx}>
                    {convertHex(color)}
                  </ColorCode>
                ))}
              </ColorCodeDetail>
            </article>
          </div>
        </div>
        <PaletteDescription className='palette-detail__description'>
          {description}
        </PaletteDescription>
      </div>
    </main>
  );
}

export default PaletteDetail;
