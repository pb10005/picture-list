import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";

Vue.use(Vuex);

const store = {
  state: {
    dataset: {
      title: "",
      description: "",
      restaurants: []
    },
    currentFilter: "",
    currentData: []
  },
  mutations: {
    setData(state, payload) {
      state.dataset = payload;
      state.currentData = state.dataset.restaurants;
    },
    clear(state) {
      state.currentFilter = "";
      state.currentData = state.dataset.restaurants;
    },
    filter(state, tag) {
      state.currentFilter = tag;
      state.currentData = state.dataset.restaurants.filter(x =>
        x.tags.includes(tag)
      );
    },
    shuffle(state) {
      const tmpList = Object.assign([], state.currentData);
      for (let i = tmpList.length - 1; i > 0; i -= 1) {
        const r = Math.floor(Math.random() * (i + 1));
        const tmp = tmpList[i];
        tmpList[i] = tmpList[r];
        tmpList[r] = tmp;
      }
      state.currentData = tmpList;
    }
  },
  actions: {
    fetchData(context, payload) {
      axios.get(payload.fileName)
        .then(response => {
          context.commit("setData", response.data);
        })
    }
  }
};
export default new Vuex.Store(store);
