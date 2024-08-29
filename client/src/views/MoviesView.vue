<template>
    <main>
        <div class="container">
            <template v-if="isLoading">
                <TheLoading />
            </template>
            <template v-else>
                <div class="actions">
                    <div class="sort">
                        <h2 class="heading roboto-medium">Фильмы</h2>
                        <div class="options">
                            <div class="option" @click.prevent="setCheckName">
                                <div class="option__wrapper">
                                    <CheckButton :check="checkName" />
                                    <input class="option__checkbox" type="checkbox" v-model="checkName" id="title" name="title">
                                </div>
                                <label class="option__text roboto-regular" for="title">Отсортировать по названию</label>
                            </div>
                            <div class="option" @click.prevent="setCheckAge">
                                <div class="option__wrapper">
                                    <CheckButton :check="checkAge" />
                                    <input class="option__checkbox" type="checkbox" v-model="checkAge" id="age" name="age">
                                </div>
                                <label class="option__text roboto-regular" for="age">Отсортировать по году</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <CardMovie v-for="movie in sortedMovies" :movie="movie" @click="toMovie(movie)" :key="movie.id" />
                </div>
            </template>
        </div>
    </main>
</template>

<script>
import TheLoading from "@/components/TheLoading.vue";
import CheckButton from "@/components/CheckButton.vue";
import CardMovie from "@/components/CardMovie.vue";

export default {
    components: {
        TheLoading,
        CheckButton,
        CardMovie
    },
    data() {
        return {
            isLoading: true,
            checkName: false,
            checkAge: false,
            movies: []
        }
    },
    computed: {
        sortedMovies() {
            if (this.checkName) {
                return [...this.movies].sort((movie1, movie2) => movie1["title"].toLowerCase() > movie2["title"].toLowerCase() ? 1 : -1);
            }
            if (this.checkAge) {
                return [...this.movies].sort((movie1, movie2) => movie1["year"] > movie2["year"] ? 1 : -1);
            }

            return this.movies;
        }
    },
    mounted() {
        this.getMovies();
    },
    methods: {
        setCheckName: function () {
            this.checkName = !this.checkName;
            this.checkAge = false;
        },
        setCheckAge: function () {
            this.checkAge = !this.checkAge;
            this.checkName = false;
        },
        getMovies: async function () {
            const response = await fetch("http://localhost:3000/movie");
            const result = await response.json();
            this.movies = result;
            this.isLoading = false;
        },
        toMovie: function (movie) {
            this.$store.commit("setMovie", movie);
            this.$router.push(`/${movie.id}`);
        }
    }
}
</script>

<style>
.heading {
    font-size: 32px;
    color: #FFFFFF;
    margin: 0 0 16px 0;
}

.options {
    display: flex;
    align-items: center;
    gap: 32px;
}

.option {
    display: flex;
    align-items: center;
}

.option__wrapper {
    cursor: pointer;
}

.option__checkbox {
    display: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    padding: 0;
    border: none;
    outline: none;
    background: transparent;
}

.option__text {
    display: block;
    font-size: 16px;
    margin: 0 0 0 8px;
    color: #FFFFFF;
    cursor: pointer;
    user-select: none;
}
</style>
