import { User } from '../types';
import { ActionEnum, ActionInterface } from './reducer';

const setUser = (user: User): ActionInterface => {
  return {
    type: ActionEnum.SET_USER,
    payload: user,
  };
};

export { setUser };
