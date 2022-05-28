import Axios from "api";

const restrictions = (set, get) => ({
  restrictions: {
    restriction: null,
    getLoading: false,
  },

  getAllRestrictions: async () => {
    set({
      countrys: { ...get().restrictions, getLoading: true },
    });
    // const params = { pageCount: 2 };

    try {
      const res = await Axios.get(`/countryRestrictionGroups`);
      // console.log("countryRestrictionGroups",res?.data?.data.countryRestrictionGroups);
      set({
        restrictions: {
          ...get().restrictions,
          restriction: res?.data?.data.countryRestrictionGroups,
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

export default restrictions;
