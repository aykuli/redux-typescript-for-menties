import { combineReducers, Reducer, CombinedState } from 'redux';
import { User } from '../types';

interface AuthState {
  user: User | null;
}

const initState: AuthState = {
  user: null,
};

export enum ActionEnum {
  SET_USER = 'SET_USER',
}

export interface ActionInterface {
  type: ActionEnum;
  payload: User;
}

const authReducer = (state = initState, action: ActionInterface): AuthState => {
  const { type, payload } = action;
  switch (type) {
    case ActionEnum.SET_USER:
      return { ...state, user: payload };
    default:
      return state;
  }
};
interface ReducerType extends Reducer<CombinedState<ReducerInterface>, ActionInterface> {}
const reducer: ReducerType = combineReducers({
  auth: authReducer,
});

export default reducer;

interface ReducerInterface {
  auth: AuthState;
}
