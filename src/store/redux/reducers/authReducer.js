const initialState = {
  isAuthenticated: false,
  userEmail: null,
  token: null,
  saveUserInfo: false,
  lastLogin: null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case 'loginSucess':
      return {
        ...state,
        isAuthenticated: true,
        userEmail: action.payload.email,
        token: action.payload.token,
        saveUserInfo: action.payload.rememberMe,
        lastLogin: new Date(),
      };

    case 'logoutUser':
      return {
        ...state,
        isAuthenticated: false,
        userEmail: state.saveUserInfo ? state.userEmail : null,
        token: null,
        lastLogin: null,
      };

    default:
      return state;
  }
}