<template>
    <main>
        <div class="container">
            <template v-if="isLoading">
                <TheLoading />
            </template>
            <template v-else>
                <div class="actions">
                    <BackButton />
                </div>
                <div v-if="!movie">
                    <NotFound />
                </div>
                <div v-else>
                    <CardMovie :movie="movie" />
                </div>
            </template>
        </div>
    </main>
</template>

<script>
import TheLoading from "@/components/TheLoading.vue";
import BackButton from "@/components/BackButton.vue";
import NotFound from "@/components/NotFound.vue";
import CardMovie from "@/components/CardMovie.vue";

export default {
    components: {
        TheLoading,
        BackButton,
        NotFound,
        CardMovie
    },
    data() {
        return {
            isLoading: true,
            movie: {}
        }
    },
    mounted() {
        this.getMovie();
    },
    methods: {
        getMovie: async function () {
            if (Object.keys(this.$store.state.movie).length) {
                this.movie = this.$store.state.movie
            } else {
                const response = await fetch(`http://localhost:3000/movie/${this.$route.params.id}`);
                const result = await response.json();
                this.movie = result;
            }

            this.isLoading = false;
        }
    }
}
</script>

<style></style>
