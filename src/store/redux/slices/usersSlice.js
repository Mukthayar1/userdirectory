import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  favoriteUserIds: [],
  error: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      const { data, isLoadMore } = action.payload;
      if (isLoadMore) {
        state.users = [...state.users, ...data];
      } else {
        state.users = data;
      }
      state.error = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    toggleFavorite: (state, action) => {
      const userId = action.payload;
      const index = state.favoriteUserIds.indexOf(userId);
      if (index == -1) {
        state.favoriteUserIds.push(userId);
      } else {
        state.favoriteUserIds.splice(index, 1);
      }
    },
    clearUsers: (state) => {
      state.users = [];
      state.error = null;
    },
  },
});

export const { setUsers, setLoading, setError, toggleFavorite, addUserNote, clearUsers } = usersSlice.actions;
export default usersSlice.reducer;