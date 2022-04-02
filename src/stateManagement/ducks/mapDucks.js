//Action Types
const LOADED = "loaded";
//Action Creators
export const loadMap = () => ({
  type: LOADED,
});
//initialState
const initialState = {
  isLoading: true,
};
//Reducer
export const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADED:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
