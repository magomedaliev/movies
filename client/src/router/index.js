import { createWebHistory, createRouter } from "vue-router";

import MoviesView from "@/views/MoviesView.vue";
import MovieView from "@/views/MovieView.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "Movies",
            component: MoviesView
        },
        {
            path: "/:id",
            name: "Movie",
            component: MovieView
        },
        {
            path: "/:pathMatch(.*)*",
            redirect: { name: "Movies" }
        }
    ]
});

export default router;
