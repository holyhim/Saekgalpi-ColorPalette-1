// 낱개 팔레트 회원과 해당 팔레의 userid가 같다면 딜리트 버튼이 있어야 함
import React from 'react';
import styd from 'styled-components';

const PaletteEntryWrapper = styd.div`
background-color: #aa0033;
margin: 5px;
width: 100px;
display: inline-block;
`;
const PaletteListEntry = () => {
    //주석 나중에 제거하거나 다듬을 것
    //숫자에 맞게 div를 생성하는 헬퍼 함수를 만들어야 합니다

    return (
        <PaletteEntryWrapper>
            {/* wrapper */}
            <div>
                {/* div를 묶어 줘야 됨 */}
                <div>+</div>
                <div>+</div>
            </div>
            <div>
                {/* hover page */}
                <span>타이틀</span>
                <button>ㅁ</button>
                <button>저장</button>
                <button>공유</button>
            </div>
            <button>삭제</button>
        </PaletteEntryWrapper>
    );
};

export default PaletteListEntry;
