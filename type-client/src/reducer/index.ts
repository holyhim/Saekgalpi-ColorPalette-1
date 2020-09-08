import { combineReducers } from 'redux';
import paletteReducer from './paletteReducer';

const rootReducer = combineReducers({
  paletteReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
