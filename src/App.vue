<script >
  import axios from 'axios';
import { store } from './store.js';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppCard from './components/AppCard.vue';

export default{
    components: {
      AppHeader,
      AppMain,
      AppCard
    },
    data(){
      return {
        store
      }
    },
    methods: {
      getCharacters() {
    
        let urlApi = 'https://api.themoviedb.org/3/search/movie?api_key=47080667b8bd1ff723a19f5bd0a7d72f&language=it-IT';
        
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
      this.getCharacters();
    }

}

</script>

<template>

  <AppHeader  @doSearch="getCharacters"/>
  
  <main>
    <AppMain/>
    
  </main>

  
</template>

<style lang="scss">

@use './styles/general.scss';

</style>
