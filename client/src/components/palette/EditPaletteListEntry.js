import React, { useState } from 'react';
import { SketchPicker } from 'react-color';
import styled from 'styled-components';

const PaletteColor = styled.div`
    width: 500px
    border: 1px solid black;
    background-color: ${(props) => props.color}
`; // TODO: 클릭시 컬러피커 나타나도록

const ColorPickerContainer = styled.div`
    display: ${(props) => (props.isOpen ? 'block' : 'none')};
    position: absolute;
    top: 200px;
    left: ${(props) => props.idx}px;
    background-color: white;
    border: 1px solid black;
    padding: 10px;
`;

const EditPaletteListEntry = ({ paletteColor, idx, setNthColor }) => {
    // 토글..
    const [color, setColor] = useState(paletteColor);
    const [isOpen, setIsOpen] = useState(false);

    const togglePicker = (e) => {
        setIsOpen((prevState) => !prevState);
    };

    const onChange = (color) => {
        setColor(color.hex);
        // 이걸 상위 컴포넌트에서 받아가야 함
    };

    return (
        <>
            <PaletteColor
                className='edit-palette__color'
                color={color}
                onClick={togglePicker}
            ></PaletteColor>
            <ColorPickerContainer
                className='color-picker__container'
                idx={400 * (idx + 1)}
                isOpen={isOpen}
            >
                <SketchPicker
                    className='color-picker'
                    color={color}
                    onChange={onChange}
                />
                <button
                    className='color-picker__button'
                    onClick={() => {
                        // 여기는 따로 확인 버튼을 만들자
                        setNthColor(idx, color);
                        togglePicker();
                        // 그리고토글
                    }}
                >
                    저장
                </button>
            </ColorPickerContainer>
        </>
    );
};

export default EditPaletteListEntry;
