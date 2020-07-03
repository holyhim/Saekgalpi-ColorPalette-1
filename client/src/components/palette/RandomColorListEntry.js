import React from 'react';

const RandomColorListEntry = ({ color }) => {
    // TODO: 마우스 컬러 div에 마우스가 올라갔는지를 판별하는 state 작성

    return (
        <div>
            <div>
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
