

<template>
     <div class="container">
        <h3>Movie</h3>
        <div class="row">
            
            <div class="movie-card" v-for="(movie, index) in store.movieList" :key="index">
                
                <AppCardMovie 
                    :img="movie.poster_path? 'https://image.tmdb.org/t/p/w342' + movie.poster_path : ''"
                    :titolo="movie.name"
                    :titolo_org="movie.original_name"
                    :lingua="movie.original_language"
                    :voto="movie.vote_average"
                    
                />
                
            </div>
        </div>
        
        <h3>Serie tv</h3>
        <div class="row">
            
            <div class="serietv-card" v-for="(tv, index) in store.serieList" :key="index">
                <AppCardTv
                    :img="tv.poster_path? 'https://image.tmdb.org/t/p/w342' + tv.poster_path: ''"
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
    },
   
   
   
}

</script>

<style lang="scss" >
.container{
    max-width: 1170px;
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