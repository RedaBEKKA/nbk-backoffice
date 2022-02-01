import Axios from 'api';

const users = (set, get) => ({
  users: {
    users: null,
    user: null,
    getLoading: false,
    getSingleLoading: false,
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
  getUser: async (id) => {
    set({
      users: { ...get().users, getSingleLoading: true },
    });
    try {
      const res = await Axios.get(`/users/${id}`);
      console.log('single user', res);
      set({
        users: { ...get().users, user: res?.data?.data?.users, getSingleLoading: false },
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
  editUser: async (id, payload) => {
    const params = {
      ...payload,
    };

    try {
      const res = await Axios.put(`/users/${id}`, { params });
      console.log('edit user response', res);
      return res;
    } catch (error) {
      console.log(error.response);
      return error.response;
    }
  },
});

export default users;
