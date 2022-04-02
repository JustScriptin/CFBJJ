import { createStore, combineReducers } from "redux";
import { carouselReducer } from "./ducks/carouselDucks";
import { mapReducer } from "./ducks/mapDucks";
import { popupMenuReducer } from "./ducks/popupMenuDucks";

export const allReducers = combineReducers({
  carousel: carouselReducer,
  map: mapReducer,
  popupMenu: popupMenuReducer,
});

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
