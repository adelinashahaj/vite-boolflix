<script>
import { store } from '../store.js';

export default{
    data() {
            return {
                store
            }
        }
}
</script>

<template>
     <div class="row ">
            <div class="col">
                <input type="text" class="form-control" placeholder="Search character" v-model="store.search"  >
            </div>
            <div class="col">
                <button @click="$emit('doSearch')" class="btn btn-primary">Search</button>
            </div>
            
        </div>
  
</template>

<style lang="scss" scoped>

</style>