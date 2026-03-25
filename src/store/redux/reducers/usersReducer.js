const initialState = {
  users: [],
  favoriteUserIds: [],
  error: null,
};

export default function usersReducer(state = initialState, action) {
  console.log('action.payload===<>', action.payload);
  switch (action.type) {
    case 'loadUsers':
      return {
        ...state,
        users: action.payload.isLoadMore
          ? [...state.users, ...action.payload.data]
          : action.payload.data,
        error: null,
      };

    case 'setError':
      return {
        ...state,
        error: action.payload,
      };

    case 'toggleFav':
      const exists = state.favoriteUserIds.includes(action.payload)

      return {
        ...state,
        favoriteUserIds: exists
          ? state.favoriteUserIds.filter(id => id != action.payload)
          : [...state.favoriteUserIds, action.payload],
      };

    case 'clearUsers':
      return {
        ...state,
        users: [],
        error: null,
        favoriteUserIds: [],
      };

    default:
      return state
  }
}
