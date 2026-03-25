export const loginSuccess = (data) => ({
  type: 'loginSucess',
  payload: data,
});

export const logout = () => ({
  type: 'logoutUser',
});