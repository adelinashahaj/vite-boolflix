import { reactive } from 'vue';

export const store = reactive(
    {
        movieList: [],
        serieList: [],
        search: '',
        movieGenres: [],
        tvGenres: [],
        genres: [],
        chosenGenre: ''
      
        
    }
);