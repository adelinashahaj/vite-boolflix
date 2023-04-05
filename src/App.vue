
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
        const paramsObject = {
          params: {
            api_key: "47080667b8bd1ff723a19f5bd0a7d72f",
            query: this.store.search,
            language: "it-IT",
          },
        };

      this.getMovie(paramsObject );
      this.getSeries(paramsObject );
    },
      getMovie(paramsObject ) {
    
        let urlApi = 'https://api.themoviedb.org/3/search/movie';
        axios.get(urlApi, paramsObject )
        .then(response => {
          this.store.movieList = response.data.results;
         console.log(this.store.movieList);
        //richiedo lista attori
        
        this.getAttori();

        })
       
      },
      getSeries(paramsObject ) {
    
    let urlApi = 'https://api.themoviedb.org/3/search/tv';
    axios.get(urlApi, paramsObject )
    .then(response => {
      this.store.serieList = response.data.results;
      this.getAttori();
    
    })
   
  },

  getAttori() {

      for(let i = 0; i < this.store.movieList.length; i++) {
        let urlApi = `https://api.themoviedb.org/3/movie/${this.store.movieList[i].id}/credits?api_key=47080667b8bd1ff723a19f5bd0a7d72f`;
    axios.get(urlApi )
    .then(response => {
      this.store.movieList[i].cast = response.data.cast;
      

    })
   }

   for(let i = 0; i < this.store.serieList.length; i++) {
        let urlApi = `https://api.themoviedb.org/3/tv/${this.store.serieList[i].id}/credits?api_key=47080667b8bd1ff723a19f5bd0a7d72f`;
    axios.get(urlApi )
    .then(response => {
      this.store.serieList[i].cast = response.data.cast;
      

    })
   }

   
  }

    /*
    ***un altro esempio***

    getMovie() {
      
      let urlApi = 'https://api.themoviedb.org/3/search/movie?api_key=47080667b8bd1ff723a19f5bd0a7d72f&language=it-IT';

    if (store.search.length > 0) {
      urlApi += `&query=${store.search}`;
    } 
      axios.get(urlApi)
      .then(response => {
        this.store.serieList = response.data.results;
      
      })

    }
    */
    
  }
}

</script>



<style lang="scss">

@use './styles/general.scss';

</style>
