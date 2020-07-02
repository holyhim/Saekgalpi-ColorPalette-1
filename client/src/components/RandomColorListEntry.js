import React from 'react';

const RandomColorListEntry = ({ color }) => {
    // TODO: 마우스 컬러 div에 마우스가 올라갔는지를 판별하는 state 작성

    const onMouseEnterColor = () => {
        // TODO: 마우스 컬러 div에 마우스 올렸을 때 컬러 정보 div 나오도록 제어 -> state값 true
    };

    const onMouseLeaveColor = () => {
        // TODO: 마우스 컬러 div에서 마우스 나갔을 때 컬러 정보 div 숨김 -> state값 false
    };

    return (
        <div>
            <div
                onMouseEnter={onMouseEnterColor}
                onMouseLeave={onMouseLeaveColor}
            >
                {color}
                {/* background-color를 내려받은 color로 */}
            </div>
            <div style={{ backgroundColor: 'red', display: 'none' }}>
                {/* state 값이 true라면 display: 'block이나 flex'  / false라면 display: 'none' */}
                {/* 혹은 className을 바꿔주고 나머지는 CSS로 제어해도 괜찮읍니다^^ */}
                <span>컬러정보(임시)</span>
            </div>
        </div>
    );
};

export default RandomColorListEntry;
