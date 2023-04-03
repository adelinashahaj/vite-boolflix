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
     <div class="header-top ">
        <div class="title">
                <h1>BOOLFIX</h1>
            </div>
            <div class="search">
                <input type="text" class="form-control" placeholder="Cerca il tuo film preferito" v-model="store.search"  >
                <button @click="$emit('doSearch')" class="btn ">Cerca</button>
            </div>
            
            
        </div>
  
</template>

<style lang="scss" scoped>
.header-top{
    background-color: black;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    
}
.search{
    display: flex;
    
    
} 
.title {
            color: red;
        }
.btn {
    background-color: red;
    border: none;
    padding: 10px;
    color: white;
}
.form-control{
    border: none;
}
</style>