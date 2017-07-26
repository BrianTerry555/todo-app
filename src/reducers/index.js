let defaultState = {
  items: []
}
const mainReducer = (state = defaultState, action) => {
  if(action.type === "ADD_ITEM") {
    return {
      ...state,
      items: action.items
    }
    } else {
      return{
        ...state
      }
    }
}

export default mainReducer;
