import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            movie: {},
        }
    },
    mutations: {
        setMovie(state, payload) {
            state.movie = payload;
        }
    }
});

export default store;
