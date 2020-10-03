import { combineReducers } from 'redux';
import paletteReducer from './paletteReducer';
import userReducer from './UserReducer';

const rootReducer = combineReducers({
  paletteReducer,
  userReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
