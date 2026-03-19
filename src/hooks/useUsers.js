import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../store/redux/slices/usersSlice';

export const useUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);

  const addToFavorites = (userId) => {
    dispatch(toggleFavorite(userId));
  };

  const isFavorite = (userId) => {
    return users.favoriteUserIds.includes(userId);
  };


  return {
    ...users,
    addToFavorites,
    isFavorite,
  };
};