<template>
    <section class="card-movie">
        <div class="card-movie__poster">
            <img class="card-movie__image" :src="movie.poster" :alt="movie.title">
        </div>
        <div class="card-movie__body">
            <h3 class="card-movie__title roboto-bold">
                {{ movie.title }}
            </h3>
            <div class="card-movie__info">
                <p class="card-movie__info-line">
                    <span class="card-movie__info-text roboto-bold">
                        {{ movie.year }}, {{ format(movie.genres) }}
                    </span>
                </p>
                <p class="card-movie__info-line" v-if="movie.directors">
                    <span class="card-movie__info-text roboto-bold">
                        Режиссеры: {{ format(movie.directors) }}
                    </span>
                </p>
                <p class="card-movie__info-line card-movie__info-line_separator" v-if="movie.actors">
                    <span class="card-movie__info-text roboto-bold">
                        Актеры:
                    </span>
                    <span class="card-movie__actors roboto-regular">
                        {{ format(movie.actors) }}
                    </span>
                </p>
            </div>
            <p class="card-movie__description roboto-regular" v-if="movie.description">
                {{ movie.description }}
            </p>
        </div>
    </section>
</template>

<script>
export default {
    props: ["movie"],
    methods: {
        format: function (list) {
            return list.length < 1 ? list[0] : list.join(", ");
        }
    }
}
</script>

<style>
.card-movie {
    display: flex;
    background-color: #4D4747;
    box-shadow: 0 8px 20px 0 #00000059;
    margin: 0 0 32px 0;
    transition: all 0.2s;
    cursor: pointer;
}

.card-movie:hover {
    transform: translateY(-8px);
}

.card-movie__poster {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 168px;
    min-height: 168px;
    background-color: #C4C4C4;
}

.card-movie__image {
    width: 112px;
    height: 168px;
    object-fit: cover;
    object-position: center;
}

.card-movie__body {
    padding: 32px 32px 32px 24px;
}

.card-movie__title {
    font-size: 36px;
    color: #FFFFFF;
    margin: 0 0 12px 0;
}

.card-movie__info-line {
    display: block;
}

.card-movie__info-line:not(:last-child) {
    margin: 0 0 8px 0;
}

.card-movie__info-line_separator {
    display: flex;
}

.card-movie__info-text {
    display: block;
    font-size: 12px;
    color: #988F8F;
    text-transform: uppercase;
}

.card-movie__actors {
    display: block;
    font-size: 12px;
    color: #FFFFFF;
    text-transform: capitalize;
    padding: 0 0 0 8px;
}

.card-movie__description {
    display: block;
    font-size: 16px;
    color: #FFFFFF;
    margin: 16px 0 0 0;
}
</style>
