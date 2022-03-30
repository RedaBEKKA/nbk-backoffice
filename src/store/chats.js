import Axios from "api";

const chats = (set, get) => ({
  chats: {
    chats: null,
    getLoading: false,
  },

  getAllChats: async () => {
    set({
        chats: { ...get().chats, getLoading: true },
    });
    try {
      const res = await Axios.get(`/channels`);
      // console.log('/v1/channels',res?.data?);
      set({
        chats: {
          ...get().chats,
          chats: res?.data?.data?.channels,
          getLoading: false,
        },
      });
      return res;
    } catch (error) {
      console.log(error.response);
      return error.response;
    }
  },

});

export default chats;