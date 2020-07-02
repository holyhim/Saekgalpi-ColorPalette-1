import React from 'react';

const EditPaletteHexList = () => {
    //주석 나중에 제거하거나 다듬을 것
    //컬러 api 사용
    const createDIVbox = (range) => {
        //갯수에 맞게 div 갯수 만들거나 줄임
    };
    return (
        <div onChange={createDIVbox}>
            {/*2개부터 7개까지 div*/}
            <div>hex, rgb</div>
            <div>hex, rgb</div>
        </div>
    );
};

export default EditPaletteHexList;
