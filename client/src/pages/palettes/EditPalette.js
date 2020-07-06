import React from 'react';
import EditPaletteList from '../../components/palette/EditPaletteList';
import EditPaletteHexList from '../../components/palette/EditPaletteHexList';
import { EditPaletteContainer } from '../Pages_styd';

// TODO: 섹션을 고쳐주십시오..

const EditPalette = () => {
    //props로 넣어 주면 됩니다

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
        <main className='edit-palette__main'>
            {/* wrapper */}
            <h1 className='edit-palette__title'> 색갈피 편집 </h1>
            <EditPaletteContainer className='edit-palette__color-container'>
                {/* top color choice
                    onChangeColor state 값 넘겨주기
                    */}
                <EditPaletteList />
            </EditPaletteContainer>
            <EditPaletteContainer className='edit-palette__hex-container'>
                {/* middle hex code desc 
                    onChangeColor state 값 넘겨주기
                    */}
                <EditPaletteHexList />
            </EditPaletteContainer>
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
