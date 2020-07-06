import React, { useLayoutEffect, useState } from 'react';
import { SketchPicker } from 'react-color';
import styled from 'styled-components';

const PaletteColor = styled.div`
    border: 1px solid black;
    background-color: ${(props) => props.color};
    cursor: pointer;
`;

const ColorPickerContainer = styled.div`
    display: ${(props) => (props.isOpen ? 'block' : 'none')};
    position: absolute;
    top: 200px;
    left: ${(props) => props.left}px;
    background-color: white;
    border: 1px solid black;
    padding: 10px;
`;

// window 창의 리사이징을 검사하는 Hook
// 출처: https://stackoverflow.com/questions/19014250/rerender-view-on-browser-resize-with-react
const useWindowSize = () => {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
        const updateSize = () => {
            setSize([window.innerWidth, window.innerHeight]);
        };
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
};

const EditPaletteListEntry = ({ paletteColor, idx, setNthColor }) => {
    // 토글..
    const [color, setColor] = useState(paletteColor);
    const [isOpen, setIsOpen] = useState(false);
    // useWindowSize()[0] * 0.7) / 3 + 0.5 * idx

    console.log(((useWindowSize()[0] * 0.7) / 3) * (0.5 + idx));

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
                left={((useWindowSize()[0] * 0.7) / 3) * (0.5 + idx) + 100}
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
