import Axios from 'api';

const users = (set, get) => ({
  users: {
    users: null,
    getLoading: false,
  },

  getAllUsers: async () => {
    set({
      users: { ...get().users, getLoading: true },
    });
    try {
      const res = await Axios.get(`/users`);
      console.log(res);
      set({
        users: { ...get().users, users: res?.data?.data?.users, getLoading: false },
      });
      return res;
    } catch (error) {
      console.log(error.response);
      return error.response;
    }
  },
  getFilteredUsers: async (payload) => {
    const params = {
      ...payload,
    };
    set({
      users: { ...get().users, getLoading: true },
    });
    try {
      const res = await Axios.get(`/users`, { params });
      console.log('usersss', res);
      set({
        users: { ...get().users, users: res?.data?.data?.users, getLoading: false },
      });
      return res;
    } catch (error) {
      console.log(error.response);
      return error.response;
    }
  },
});

export default users;
