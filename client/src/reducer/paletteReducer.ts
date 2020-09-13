import { PaletteAction, SET_CLICKED_PALETTE } from '../actions/paletteAction';

// 자세하게 써야 함 clickedPalette의 type 정의
export type PaletteState = {
  clickedPalette: object;
};

const inititalState: PaletteState = {
  clickedPalette: {},
};

function paletteReducer(
  state: PaletteState = inititalState,
  action: PaletteAction
) {
  switch (action.type) {
    case SET_CLICKED_PALETTE: {
      return {
        ...state,
        clickedPalette: action.palette,
      };
    }
    default: {
      return state;
    }
  }
}

export default paletteReducer;
