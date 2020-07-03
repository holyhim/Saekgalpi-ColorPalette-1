import React from 'react';

const AllPalette = () => {
    const onChangeInput = (e) => {
        // TODO: Input 값 value로 받아 state 설정
        // e.target.value
    };

    const onClickSearchButton = () => {
        // TODO: 서버로 검색어를 전달하고 검색 결과값을 가져오는 POST 요청 (axios), 받아온 값들을 state로 저장
    };

    return (
        <main>
            <h1>전체 색갈피 보기</h1>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                }}
            >
                <input
                    type='text'
                    placeholder='검색어를 입력하세요'
                    onChange={onChangeInput}
                />
                <button onClick={onClickSearchButton}>검색</button>
            </form>
            <section>추후 팔레트 리스트 컴포넌트가 추가될 자리입니다</section>
        </main>
    );
};

export default AllPalette;
