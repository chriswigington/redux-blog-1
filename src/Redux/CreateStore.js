function createStore(reducer){
  let state;
  const getState = () => {
    return state
  }
  const dispatch = (action) => {
    state = reducer(state, action)
  }
  state = reducer(state, {})
  return { getState, dispatch}
}

export default createStore;
