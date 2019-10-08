import { types } from './reducers';

export const useActions = (state, dispatch) => {
  function authSubmit(email, password) {
    // post email and password to backend and get token
    let token = 'ExampleToken';
    dispatch({ type: types.AUTH_LOGIN, payload: token });
  }

  return {
    authSubmit
  };
};
