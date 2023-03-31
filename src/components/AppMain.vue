

<template>
     <div class="container">
        
        <div class="row">
            <h3>Movie</h3>
            <div class="movie-card" v-for="(movie, index) in store.movieList" :key="index">
                <AppCardMovie 
                    :titolo="movie.name"
                    :titolo_org="movie.original_name"
                    :lingua="movie.original_language"
                    :voto="movie.vote_average"
                />
            </div>
        </div>
        

        <div class="row">
            <h3>Serie tv</h3>
            <div class="serietv-card" v-for="(tv, index) in store.serieList" :key="index">
                <AppCardTv 
                    :titolo="tv.title"
                    :titolo_org="tv.original_title"
                    :lingua="tv.original_language"
                    :voto="tv.vote_average"
                />
            </div>
        </div>
        
    </div>

    
</template>

<script>

import { store } from '../store.js';
import AppCardMovie from './AppCardMovie.vue';
import AppCardTv from './AppCardTv.vue';

export default{
    components: {
        AppCardMovie,
        AppCardTv
    },
    data(){
        return {
            store
        }
    }
}

</script>

<style lang="scss" >
.container{
    max-width: 1000px;
    margin: auto;
}
.row{
    padding: 0 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around
}
.movie-card,
.serietv-card{
    width: calc(100% / 5 - 20px);
}

</style>