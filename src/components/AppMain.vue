

<template>
    <div class="container">
        
        <section v-if="store.movieList.length > 0">
            <h2>Movie</h2>
            <div class="row">
            
                <div class="movie-card" v-for="(movie, index) in store.movieList" :key="index">
                
                    <AppCardMovie 
                        :img="movie.poster_path? 'https://image.tmdb.org/t/p/w342' + movie.poster_path :'https://www.prolococisanobg.it/wp-content/uploads/2017/10/Non-disponibile-_04.jpg'"
                        :titolo="movie.title"
                        :titolo_org="movie.original_title"
                        :lingua="movie.original_language"
                        :voto="movie.vote_average"
                        :trama="movie.overview"
                        :cast="movie.cast"
                        
                    />
                
                </div>
            </div>
        </section>
        <section v-if="store.serieList.length > 0">
            <h2>Serie tv</h2>
            <div class="row">
            
                <div class="serietv-card" v-for="(tv, index) in store.serieList" :key="index">
                    <AppCardTv
                        :img="tv.poster_path? 'https://image.tmdb.org/t/p/w342' + tv.poster_path: 'https://www.prolococisanobg.it/wp-content/uploads/2017/10/Non-disponibile-_04.jpg'"
                        :titolo="tv.name"
                        :titolo_org="tv.original_name"
                        :lingua="tv.original_language"
                        :voto="tv.vote_average"
                        :trama="tv.overview"
                        :cast="tv.cast"
                        
                       
                        
                    />
               
                </div>
            </div>
        </section>
        <h2 v-if="store.movieList.length == 0 && store.serieList.length == 0">Nessun risultato di ricerca</h2>
       
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
   
}
.movie-card,
.serietv-card{
    width: calc(100% / 5 );
}
h2 {
    margin-top: 30px;
}


</style>