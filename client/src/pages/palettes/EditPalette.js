import React from 'react';
import styled from 'styled-components';
import EditPaletteList from '../../components/palette/EditPaletteList';
import EditPaletteHexList from '../../components/palette/EditPaletteHexList';
import './EditPalette.scss';

const EditPaletteContainer = styled.section`
    border: 1px solid black;
    width: 70vw;
    height: 200px;
    margin-bottom: 20px;
`;

const EditPaletteHexContainer = styled.section`
    border: 1px solid black;
    width: 70vw;
    height: 200px;
    margin-bottom: 20px;
`;
// TODO: 섹션을 고쳐주십시오..

const EditPalette = () => {
    //TODO: GET 해당 팔레트에 대한 정보를 서버에서 요청
    //props로 넣어 주면 됩니다

    const onChangeColor = (e) => {
        // 컬러 갯수에 따라서 바뀜
        // TODO: Input 값 value로 받아 state 설정
        console.log(e.target.value);
    };
    const handleInputValue = (e) => {
        // TODO: Input 값 value로 받아 state 설정
        // e.target.value
    };
    const onClickPostButton = (e) => {
        // TODO: 서버로 팔레트 POST 요청 (axios 사용)
    };
    return (
        <main className='edit-palette__main'>
            {/* wrapper */}
            <h1 className='edit-palette__title'> 팔레트 편집 </h1>
            <EditPaletteContainer className='edit-palette__color-container'>
                {/* top color choice
                    onChangeColor state 값 넘겨주기
                    */}
                <EditPaletteList />
            </EditPaletteContainer>
            <EditPaletteHexContainer className='edit-palette__hex-container'>
                {/* middle hex code desc 
                    onChangeColor state 값 넘겨주기
                    */}
                <EditPaletteHexList />
            </EditPaletteHexContainer>
            <section className='edit-palette__palette-info'>
                {/* bottom other desc */}
                <form
                    className='palette-info__form'
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                >
                    <label className='palette-info__color-range-label'>
                        색상 갯수
                        <input
                            className='palette-info__color-range'
                            type='range'
                            min='2'
                            max='7'
                            name='colorRange'
                            onChange={onChangeColor}
                        />
                    </label>
                    <input
                        className='palette-info__palette-name'
                        type='text'
                        placeholder='팔레트 이름'
                        name='title'
                        onChange={handleInputValue}
                    />
                    <textarea
                        className='palette-info__palette-description'
                        placeholder='팔레트 설명'
                        name='description'
                        onChange={handleInputValue}
                    />
                    <button
                        className='edit-palette__button'
                        onClick={onClickPostButton}
                    >
                        저장
                    </button>
                </form>
            </section>
        </main>
    );
};

export default EditPalette;
