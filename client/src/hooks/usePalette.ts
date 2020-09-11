import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../reducer';
import { setClickedPalette } from '../actions/paletteAction';

export default function usePalette() {
  const clickedPalette = useSelector(
    (state: RootState) => state.paletteReducer.clickedPalette
  );
  const dispatch = useDispatch();

  const setPalette = useCallback(
    (palette: object) => dispatch(setClickedPalette(palette)),
    [dispatch]
  );

  return {
    clickedPalette,
    setPalette,
  };
}
