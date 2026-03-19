import axios from 'axios';
import { setUsers, setLoading, setError } from '../slices/usersSlice';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

export const fetchUsers = (setLoading, page = 1, isLoadMore = false) => async (dispatch) => {
  setLoading(true);
  try {
    const response = await axios.get(`${API_URL}?_page=${page}&_limit=10`);
    dispatch(setUsers({
      data: response.data,
      isLoadMore,
    }));
    setLoading(false);
  } catch (error) {
    setLoading(false);
    dispatch(setError(error.message));
  }
};