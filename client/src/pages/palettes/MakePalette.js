import React from 'react';
import styled from 'styled-components';
import { Slider, Input } from 'antd';
import EditPaletteList from '../../components/palette/EditPaletteList';
import EditPaletteHexList from '../../components/palette/EditPaletteHexList';

const MakePaletteContainer = styled.section`
    border: 1px solid black;
    width: 60vw;
    height: 20vh;
    margin-bottom: 20px;
`;

const { TextArea } = Input;

const MakePalette = () => {
    const onChangeColor = (e) => {
        // 컬러 갯수에 따라서 바뀜
        // TODO: Input 값 value로 받아 state 설정
        // console.log(e.target.value);
    };
    const handleInputValue = (e) => {
        // TODO: Input 값 value로 받아 state 설정
        // e.target.value
    };
    const onClickPostButton = (e) => {
        // TODO: 서버로 팔레트 POST 요청 (axios 사용)
    };

    return (
        <main className='make-palette__main'>
            {/* wrapper */}
            <h1 className='make-palette__title'> 색갈피 만들기 </h1>
            <MakePaletteContainer className='make-palette__color-container'>
                {/* top color choice
                    onChangeColor state 값 넘겨주기
                    */}
                <EditPaletteList />
            </MakePaletteContainer>
            <MakePaletteContainer className='make-palette__hex-container'>
                {/* middle hex code desc 
                    onChangeColor state 값 넘겨주기
                    */}
                <EditPaletteHexList />
            </MakePaletteContainer>
            <section className='make-palette__palette-info'>
                {/* bottom other desc */}
                <form
                    className='palette-info__form'
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                >
                    <label className='palette-info__color-range-label'>
                        색상 갯수
                        <Slider
                            className='palette-info__color-range'
                            min={2}
                            max={7}
                            step={1}
                            defaultValue={5}
                            style={{ width: '200px' }}
                            onChange={onChangeColor}
                        />
                    </label>
                    <Input
                        className='palette-info__palette-name'
                        type='text'
                        placeholder='팔레트 이름'
                        name='title'
                        onChange={handleInputValue}
                    />
                    <TextArea
                        className='palette-info__palette-description'
                        placeholder='팔레트 설명'
                        name='description'
                        onChange={handleInputValue}
                    />
                    <button
                        className='make-palette__button'
                        onClick={onClickPostButton}
                    >
                        저장
                    </button>
                </form>
            </section>
        </main>
    );
};

export default MakePalette;
