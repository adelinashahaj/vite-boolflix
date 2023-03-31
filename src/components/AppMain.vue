

<template>
     <div class="container">
        <div class="row">
            <div class="col-3" v-for="(character, index) in store.movieList" :key="index">
                <AppCard  
                    
                    :titolo="character.title"
                    :titolo_org="character.original_title"
                    :lingua="character.original_language"
                />
            </div>
        </div>
    </div>

    
</template>

<script>

import { store } from '../store.js';
import AppCard from './AppCard.vue';

export default{
    components: {
        AppCard
    },
    data(){
        return {
            store
        }
    }
}

</script>

<style lang="scss" scoped>

</style>