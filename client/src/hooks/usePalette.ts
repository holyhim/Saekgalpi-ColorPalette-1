import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PaletteState } from '../reducer/paletteReducer';
import { setClickedPalette } from '../actions/paletteAction';

export default function usePalette() {
  const palette = useSelector((state: PaletteState) => state.clickedPalette);
  const dispatch = useDispatch();

  const setPalette = useCallback(
    (palette: object) => dispatch(setClickedPalette(palette)),
    [dispatch]
  );

  return {
    palette,
    setPalette,
  };
}
