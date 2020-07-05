import React from 'react';
import styled from 'styled-components';

const PaletteHex = styled.div`
    width: 500px
    height: 200px;
    border: 1px solid black;
    display: grid;
    grid-template-rows: repeat(2, 1fr);
`;

const ColorCode = styled.span`
    place-self: center center;
`;

const EditPaletteHexListEntry = () => {
    // props로 color를 받아옵니다
    // 여기에서 color를 받아오려면 상위의 상위인 edit / make palette에서 color state가 있어야 합니다
    // 리덕스가 있으면 좋겠어요..
    return (
        <PaletteHex className='edit-palette__hex'>
            <ColorCode className='palette__hex'>#0652DD</ColorCode>
            <ColorCode className='palette__rgb'>RGB(6, 82, 221)</ColorCode>
        </PaletteHex>
    );
};

export default EditPaletteHexListEntry;
