
<template>

  <AppHeader  @doSearch="searchTitles"/>
  
  <main>
    <AppMain/>
    
  </main>
  
</template>


<script >
  import axios from 'axios';
import { store } from './store.js';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppCardMovie from './components/AppCardMovie.vue';
import AppCardTv from './components/AppCardTv.vue';

export default{
    components: {
      AppHeader,
      AppMain,
      AppCardMovie,
      AppCardTv
    },
    data(){
      return {
        store
      }
    },
    methods: {
      searchTitles() {
      this.getCharactersMovie();
      this.getCharactersSeries();
    },
      getCharactersMovie() {
    
        let urlApi = 'https://api.themoviedb.org/3/search/movie?api_key=47080667b8bd1ff723a19f5bd0a7d72f&language=it-IT';
        
      if (store.search.length > 0) {
        
        urlApi += `&query=${store.search}`;
      } else {
        urlApi += "?api_key=47080667b8bd1ff723a19f5bd0a7d72f"
      }
        axios.get(urlApi)
        .then(response => {
          this.store.serieList = response.data.results;
        
        })
       
      },
      getCharactersSeries() {
    
    let urlApi = 'https://api.themoviedb.org/3/search/tv?api_key=47080667b8bd1ff723a19f5bd0a7d72f&language=it-IT';
    
  if (store.search.length > 0) {
    
    urlApi += `&query=${store.search}`;
  } else {
    urlApi += "?api_key=47080667b8bd1ff723a19f5bd0a7d72f"
  }
    axios.get(urlApi)
    .then(response => {
      this.store.movieList = response.data.results;
    
    })
   
  }

    },
    created() {
      this.getCharactersSeries();
    }

}

</script>



<style lang="scss">

@use './styles/general.scss';

</style>
