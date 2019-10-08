const initialState = {
  isAuthenticated: false,
  authToken: '',
  techList: ['TypeScript', 'React Hooks']
};

const types = {
  AUTH_LOGIN: 'AUTH_LOGIN',
  AUTH_LOGOUT: 'AUTH_LOGOUT'
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.AUTH_LOGIN:
      return {
        ...state,
        authToken: action.payload,
        isAuthenticated: true
      };
    case types.AUTH_LOGOUT:
      return {
        ...state,
        authToken: '',
        isAuthenticated: false
      };
    default:
      throw new Error('Unexpected action');
  }
};
export { initialState, types, reducer };
