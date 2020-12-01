import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase";
import router from "@/router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    appTitle: "Firudo App",
    // user
    user: null,
    error: null,
    loading: false,
    // filters
    showMyOffers: false,
    sortType: "domyślnie",
    propertyType: undefined,
    offerType: undefined,
    priceMin: undefined,
    priceMax: undefined,
    spaceMin: undefined,
    spaceMax: undefined,
    localization: undefined,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
    setLoading(state, payload) {
      state.loading = payload;
    },
    setShowMyOffers(state, payload) {
      state.showMyOffers = payload;
    },
    setSortType(state, payload) {
      state.sortType = payload;
    },
    setPropertyType(state, payload) {
      state.propertyType = payload;
    },
    setOfferType(state, payload) {
      state.offerType = payload;
    },
    setPriceMin(state, payload) {
      state.priceMin = payload;
    },
    setPriceMax(state, payload) {
      state.priceMax = payload;
    },
    setSpaceMin(state, payload) {
      state.spaceMin = payload;
    },
    setSpaceMax(state, payload) {
      state.spaceMax = payload;
    },
    setLocalization(state, payload) {
      state.localization = payload;
    },
  },
  actions: {
    signUpUser({ commit }, payload) {
      commit("setLoading", true);
      firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then((firebaseUser) => {
          commit("setUser", { email: firebaseUser.user.email });
          commit("setLoading", false);
          commit("setError", null);
          router.push({ name: "Home" });
        })
        .catch((error) => {
          commit("setError", error.message);
          commit("setLoading", false);
        });
    },
    singInUser({ commit }, payload) {
      commit("setLoading", true);
      firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then((firebaseUser) => {
          commit("setUser", { email: firebaseUser.user.email });
          commit("setLoading", false);
          commit("setError", null);
          router.push({ name: "Home" });
        })
        .catch((error) => {
          commit("setError", error.message);
          commit("setLoading", false);
        });
    },
    autoSignIn({ commit }, payload) {
      commit("setUser", { email: payload.email });
    },
    signOutUser({ commit }) {
      firebase.auth().signOut();
      commit("setUser", null);
    },
  },
  modules: {},
  getters: {
    isAuthenticated(state) {
      return state.user !== null && state.user !== undefined;
    },
  },
});
