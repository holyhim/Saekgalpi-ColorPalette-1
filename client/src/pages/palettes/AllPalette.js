import React from 'react';
import PaletteList from '../../components/palette/PaletteList';

import { fakeFavPalettes } from '../../fakeData';

const AllPalette = ({ dispatch }) => {
    return (
        <main className='all-palette__main'>
            <span className='h1'>전체 색갈피 보기</span>
            <div className='allPalWarpper'>
                <section className='all-palette__palettes'>
                    <PaletteList
                        dispatch={dispatch}
                        palettes={fakeFavPalettes}
                    />
                </section>
            </div>
        </main>
    );
};

export default AllPalette;
