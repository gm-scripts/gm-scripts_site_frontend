import { createStore } from "vuex";
import { Themes } from "../ts/types/ColorThemesEnum";

export default createStore({
  state: {
    theme: Themes.Dark,
  },
  mutations: {},
  actions: {},
  modules: {},
});
