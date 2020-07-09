import React, { useState, useEffect } from 'react';
import PaletteList from '../../components/palette/PaletteList';
import { AllPaletteGetAPI } from '../../PaletteAPI';

const AllPalette = ({ dispatch }) => {
    //더미 데이터를 넣어서 잘 들어오는지 확인해 볼 것
    const [palleteData, setPalleteData] = useState([]);

    useEffect(() => {
        AllPaletteGetAPI().then((res) => {
            setPalleteData(res.data);
        });
    }, []);

    return (
        <main className='all-palette__main'>
            <span className='h1'>전체 색갈피 보기</span>
            <div className='allPalWarpper'>
                <section className='all-palette__palettes'>
                    <PaletteList dispatch={dispatch} palettes={palleteData} />
                </section>
            </div>
        </main>
    );
};

export default AllPalette;
