import React, { useState, useEffect } from 'react';
import PaletteList from '../../components/palette/PaletteList';
import { allPaletteGetAPI, PaletteData } from '../../apis/paletteAPI';

const AllPalette = () => {
  const [allPalettes, setallPalettes] = useState<PaletteData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getPalettes = async () => {
    const allPalettesData = await allPaletteGetAPI();
    setallPalettes([...allPalettesData]);
  };

  useEffect(() => {
    setIsLoading(true);
    getPalettes();
    setIsLoading(false);
  }, []);

  return isLoading ? (
    <main className='all-palette__main'>로딩중</main>
  ) : (
    <main className='all-palette__main'>
      <span className='h1'>전체 색갈피 보기</span>
      <div className='allPalWarpper'>
        <section className='all-palette__palettes'>
          <PaletteList palettes={allPalettes} />
        </section>
      </div>
    </main>
  );
};

export default AllPalette;
