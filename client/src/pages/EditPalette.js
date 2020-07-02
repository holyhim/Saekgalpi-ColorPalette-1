import React from 'react';
import EditPaletteList from '../components/EditPaletteList';
import EditPaletteHexList from '../components/EditPaletteHexList';

const EditPalette = () => {
    //TODO: GET 해당 팔레트에 대한 정보를 서버에서 요청
    //props로 넣어 주면 됩니다

    const onChangeColor = (e) => {
        // 컬러 갯수에 따라서 바뀜
        // TODO: Input 값 value로 받아 state 설정
        console.log(e.target.value);
    };
    const handleInputValue = (e) => {
        // TODO: Input 값 value로 받아 state 설정
        // e.target.value
    };
    const onClickPostButton = (e) => {
        // TODO: 서버로 팔레트 POST 요청 (axios 사용)
    };
    return (
        <main>
            <div>
                {/* wrapper */}
                <h1> 팔레트 편집 </h1>
                <section>
                    {/* top color choice
                    onChangeColor state 값 넘겨주기
                    */}
                    <EditPaletteList />
                </section>
                <section>
                    {/* middle hex code desc 
                    onChangeColor state 값 넘겨주기
                    */}
                    <EditPaletteHexList />
                </section>
                <section>
                    {/* bottom other desc */}
                    <form>
                        <label>
                            색상 갯수
                            <input
                                type='range'
                                min='2'
                                max='7'
                                name='colorRange'
                                onChange={onChangeColor}
                            />
                        </label>
                        <input
                            type='text'
                            placeholder='팔레트 이름'
                            name='title'
                            onChange={handleInputValue}
                        />
                        <textarea
                            placeholder='팔레트 설명'
                            name='description'
                            onChange={handleInputValue}
                        />
                        <button onClick={onClickPostButton}>저장</button>
                    </form>
                </section>
            </div>
        </main>
    );
};

export default EditPalette;
