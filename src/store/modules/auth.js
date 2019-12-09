import api from "../../api/imgur";
import qs from "qs";
import { router } from "../../main";
const IMGUR_TOKEN_KEY = "imgur-token";

const state = {
  token: window.localStorage.getItem(IMGUR_TOKEN_KEY)
};

const getters = {
  isLoggedIn: state => !!state.token
};

const actions = {
  login: () => api.login(),
  logout: ({ commit }) => {
    commit("setToken", null);
    window.localStorage.removeItem(IMGUR_TOKEN_KEY);
  },
  finalizeLogin: ({ commit }, hash) => {
    const query = qs.parse(hash.replace("#", ""));
    const token = query.access_token;
    commit("setToken", token);
    window.localStorage.setItem(IMGUR_TOKEN_KEY, token);
    router.push("/");
  }
};

const mutations = {
  setToken: (state, token) => (state.token = token)
};

export default {
  state,
  getters,
  actions,
  mutations
};
