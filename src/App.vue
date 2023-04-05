
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
    
    })
   
  },

  getAttori() {

    let urlApi = 'https://api.themoviedb.org/3/movie/268/credits?api_key=47080667b8bd1ff723a19f5bd0a7d72f';

      for(let i = 0; i < this.store.movieList.length; i++) {
       
        }

    axios.get(urlApi )
    .then(response => {
      this.store.nomiAttori = response.data.cast;
      console.log(this.store.nomiAttori);

    })
   
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
