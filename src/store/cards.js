import Axios from 'api';

const card = (set, get) => ({
  cards: {
    cards: null,
    getLoading: false,
  },

  getAllCards: async () => {
    set({
      cards: { ...get().cards, getLoading: true },
    });
    try {
      const res = await Axios.get(`/cards`);
      console.log(res);
      set({
        cards: { ...get().cards, cards: res?.data?.data?.cards, getLoading: false },
      });
      return res;
    } catch (error) {
      console.log(error.response);
      return error.response;
    }
  },
  getFilteredCards: async (payload) => {
    const params = {
      ...payload,
    };
    set({
      cards: { ...get().cards, getLoading: true },
    });
    try {
      const res = await Axios.get(`/cards`, { params });
      console.log(res);
      set({
        cards: { ...get().cards, cards: res?.data?.data?.cards, getLoading: false },
      });
      return res;
    } catch (error) {
      console.log(error.response);
      return error.response;
    }
  },
  cardLockUnlock: async (id, lockStatus) => {
    try {
      const res = await Axios.put(`/cards/${id}/lockUnlock?lockStatus=${lockStatus}`);
      console.log('lockUnlock', res);

      return res;
    } catch (error) {
      console.log(error.response);
      return error.response;
    }
  },
  cardUnblockPin: async (id) => {
    try {
      const res = await Axios.put(`/cards/${id}/unblockPin`);
      console.log('unblockPin', res);

      return res;
    } catch (error) {
      console.log(error.response);
      return error.response;
    }
  },
});

export default card;
