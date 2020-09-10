import { PaletteAction, SET_CLICKED_PALETTE } from '../actions/paletteAction';

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
        palette: action.palette,
      };
    }
    default: {
      return state;
    }
  }
}

export default paletteReducer;
