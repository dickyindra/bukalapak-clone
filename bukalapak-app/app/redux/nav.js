import RootNavigator from '../navigators/RootNavigator'

const initialState = RootNavigator.router.getStateForAction(
  RootNavigator.router.getActionForPathAndParams('Home')
)

const navReducer = (state = initialState, action) => {
  const nextState = RootNavigator.router.getStateForAction(action, state)

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state
};

export default navReducer
