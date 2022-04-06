import Axios from "api";

const channels = (set, get) => ({
  channels: {
    channels: null,
    getLoading: false,
  },

  getAllChannels: async () => {
    set({
      channels: { ...get().channels, getLoading: true },
    });
    const params = { pageCount: 10 };

    try {
      const res = await Axios.get(`/channels`, { params });
      console.log("channels", res.data.data.channels);

      set({
        channels: {
          ...get().channels,
          channels: res?.data?.data?.channels,
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

export default channels;
