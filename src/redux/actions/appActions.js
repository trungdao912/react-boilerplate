import { FETCH_ITEMS } from '../../constant/actionTypes';

export const fetchUser = () => ({
  type: FETCH_ITEMS,
  promise: () => fetch('https://reqres.in/api/users?page=1'),
});
