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
     <div class="search ">
        <div class="title">
                <h1>BOOLFIX</h1>
            </div>
            <div class="col">
                <input type="text" class="form-control" placeholder="Search character" v-model="store.search"  >
                <button @click="$emit('doSearch')" class="btn btn-primary">Search</button>
            </div>
            
            
        </div>
  
</template>

<style lang="scss" scoped>
.search{
    background-color: black;
    display: flex;
    justify-content: space-between;
    
}
.col{
    display: flex;
    justify-content: end;
    
} 
.title {
            color: red;
        }

</style>