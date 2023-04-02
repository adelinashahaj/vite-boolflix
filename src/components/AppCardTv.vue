

<template>
 <div class="character ">
    <img :src="img">
        <h3>{{ titolo }}</h3>
        <h5>{{ titolo_org }}</h5>

        <img v-if="lingua == 'it'" class="image" src="../assets/it.svg" alt="flag_it">
        <img v-else-if="lingua == 'en'" class="image" src="../assets/en.svg" alt="flag_uk">
        <img v-else-if="lingua == 'fr'" class="image" src="../assets/fr.svg" alt="flag_fr">
        <img v-else-if="lingua == 'de'" class="image" src="../assets/de.svg" alt="flag_de">
        <div v-else >{{ lingua }}</div>

        <p class="stars">
                    <span v-for="number in 5" :key="number">
                        <i class="fa-solid fa-star" v-if="getStars(voto / 2) >= number"></i>
                        <i class="fa-regular fa-star" v-else ></i>
                    </span>
                </p>
    </div>

    
</template>
<script>

export default{
    props: {
        img: String,
        titolo: String,
        titolo_org: String,
        lingua: String,
        voto: Number,
        
            
        },
        methods: {
       getStars(vote) {
           return Math.ceil(vote);
       }
   }
       
     
  
}

</script>
<style lang="scss" >
.image{
    width: 20px;
}

</style>