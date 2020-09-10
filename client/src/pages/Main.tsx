import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePalette from '../hooks/usePalette';

import { CurrentPalettesGetAPI, FavPalettesGetAPI } from '../apis/paletteAPI';
import { PaletteData } from '../apis/paletteAPI';

import { BigSquareButton } from './Pages_styd';

function Main() {
  const { palette, setPalette } = usePalette();

  const [isLoading, setIsLoading] = useState(false);
  const [favPalettes, setFavPalettes] = useState<PaletteData[]>([]);
  const [curPalettes, setCurPalettes] = useState([]);

  const getPalettes = async () => {
    const favPalettesData = await FavPalettesGetAPI();
    const currentPalettesData = await CurrentPalettesGetAPI();
    // console.log(typeof favPalettesData);

    // setFavPalettes([]);
    // setCurPalettes([...currentPalettesData.data]);
  };

  return isLoading ? (
    <main className='main__main-content'>로딩중...</main>
  ) : (
    <main className='main__main-content'>
      <BigSquareButton onClick={getPalettes}>
        ㅁㅁㅁ
        {/* {!isLogin ? (
                <Link to='/signIn'>내 색갈피 만들기</Link>
            ) : (
                <Link to='/makePalette'>내 색갈피 만들기</Link>
            )} */}
      </BigSquareButton>
      <section className='fav-palettes__container'>
        <h3 className='fav-palettes__title'>많이 찾은 색갈피</h3>
        {/* <PaletteList
                dispatch={dispatch}
                palettes={favPalettes}
                userInfo={userInfo}
            /> */}
      </section>
      <section className='current-palettes__container'>
        <h3 className='current-palettes__title'>새로운 색갈피</h3>
        {/* <PaletteList
                dispatch={dispatch}
                palettes={currentPalettes}
                userInfo={userInfo}
            /> */}
      </section>
      <section className='random-colors__container'>
        <h3 className='random-colors__title'>지금의 색</h3>
        {/* <RandomColorList /> */}
      </section>
    </main>
  );
}

export default Main;
