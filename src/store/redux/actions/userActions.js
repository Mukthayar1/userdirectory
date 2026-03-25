import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

export const fetchUsers = (setLoading, page = 1, isLoadMore = false) => async (dispatch) => {
  try {
    setLoading(true)
    console.log("fetching users")
    const response = await axios.get(`${API_URL}?_page=${page}&_limit=10`)
    console.log('response.data', response.data)
    dispatch({
      type: 'loadUsers',
      payload: {
        data: response.data,
        isLoadMore,
      },
    })
    setLoading(false)
  } catch (error) {
    console.log('error', error)
    dispatch({
      type: 'setError',
      payload: error.message,
    })
    setLoading(false)
  }
};