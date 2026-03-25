import { useDispatch, useSelector } from 'react-redux';

export const useUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);

  const addToFavorites = (userId) => {
    dispatch({ type: 'toggleFav', payload: userId })
  };

  const isFavorite = (userId) => {
    return users.favoriteUserIds.includes(userId);
  };

  const clearUsers = () => {
    dispatch({ type: 'clearUsers' })
  };


  return {
    ...users,
    addToFavorites,
    isFavorite,
    clearUsers
  };
};