//Action types
const INCREMENT = "increaseSlide";
const DECREMENT = "decreaseSlide";

//Action Creator
export const incrementSlide = () => ({
  type: INCREMENT,
});

export const decrementSlide = () => ({
  type: DECREMENT,
});

//initial State
const initialState = {
  currentSlide: 0,
  carouselImgs: [
    "https://www.jiujitsutimes.com/wp-content/uploads/top-image-700x393.jpg",
    "https://pbs.twimg.com/media/DE0szhfXcAALUAP?format=jpg&name=large",
    "https://mymmanews.com/wp-content/uploads/2021/02/161292891964034302-1.jpg",
  ],
};

// Reducer
export const carouselReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        currentSlide:
          state.currentSlide === state.carouselImgs.length - 1
            ? 0
            : state.currentSlide + 1,
      };
    case DECREMENT:
      return {
        ...state,
        currentSlide:
          state.currentSlide === 0
            ? state.carouselImgs.length - 1
            : state.currentSlide - 1,
      };
    default:
      return state;
  }
};
