import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";

// * Types
import { GlobalState } from "./interfaces/state.interface";

// * Store parts
import state from "./state";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

export const key: InjectionKey<Store<GlobalState>> = Symbol();

const store = createStore<GlobalState>({
  state,
  mutations,
  actions,
  getters,
  strict: process.env.NOVE_ENV !== "production",
});

export default store;
