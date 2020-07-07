import React, { useLayoutEffect, useState } from 'react';
import { SketchPicker } from 'react-color';
import styled from 'styled-components';

const PaletteColor = styled.div`
    background-color: ${(props) => props.color};
    cursor: pointer;
`;

const ColorPickerContainer = styled.div`
    display: ${(props) => (props.isOpen ? 'block' : 'none')};
    position: absolute;
    top: 200px;
    left: ${(props) => props.left}px;
    background-color: white;
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
    const [color, setColor] = useState(paletteColor);
    const [isOpen, setIsOpen] = useState(false);

    // console.log(((useWindowSize()[0] * 0.7) / 3) * (0.5 + idx));

    const togglePicker = (e) => {
        setIsOpen((prevState) => !prevState);
    };

    const onChange = (color) => {
        setColor(color.hex);
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
                left={200 + 100 * idx}
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
                        setNthColor(idx, color);
                        togglePicker();
                    }}
                >
                    저장
                </button>
            </ColorPickerContainer>
        </>
    );
};

export default EditPaletteListEntry;
