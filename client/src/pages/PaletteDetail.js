import React from 'react';
import { Link } from 'react-router-dom';

const PaletteDetail = () => {
    return (
        <main>
            <h1>팔레트 디테일 </h1>
            <Link to='/editPalette/:id'>색갈피 편집</Link>
        </main>
    );
};

export default PaletteDetail;
