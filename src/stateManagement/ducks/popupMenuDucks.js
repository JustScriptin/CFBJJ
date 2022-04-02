//action types
const TOGGLE = "toggle";
const DISPLAY_BLOCK = "displayBlock";
const DISPLAY_NONE = "displayNone";
//action Creators
export const toggle = () => ({
  type: TOGGLE,
});
export const displayBlock = () => ({
  type: DISPLAY_BLOCK,
});
export const displayNone = () => ({
  type: DISPLAY_NONE,
});
//initial State
const initialState = {
  toggleOpen: false,
  style: { display: "none" },
};
// reducer
export const popupMenuReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE:
      return { ...state, toggleOpen: !state.toggleOpen };
    case DISPLAY_BLOCK:
      return {
        ...state,
        style: state.toggleOpen ? { display: "block" } : { display: "none" },
      };
    case DISPLAY_NONE:
      return { ...state, style: { display: "none" } };
    default:
      return state;
  }
};
