

<template>
 

    <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img :src="img" alt="Avatar" >
    </div>
    <div class="flip-card-back">
        <h3>{{ titolo }}</h3>
        <h5>{{ titolo_org }}</h5>
        <img v-if="lingua == 'it'" class="image" src="../assets/it.svg" alt="flag_italy">
        <img v-else-if="lingua == 'en'" class="image" src="../assets/en.svg" alt="flag_uk">
        <img v-else-if="lingua == 'fr'" class="image" src="../assets/fr.svg" alt="flag_fr">
        <img v-else-if="lingua == 'de'" class="image" src="../assets/de.svg" alt="flag_de">
           
        <div v-else >{{ lingua }}</div>

        <p class="stars">
              <span v-for="number in 5" :key="number">
                  <i class="fa-solid fa-star" v-if="Math.floor(voto / 2) >= number"></i>
                  <i class="fa-regular fa-star" v-else ></i>

             </span>
        </p>
        <h4 class="tex-color mg-top ">Attori:</h4>
         <div v-if="cast">

              <span v-for="(element, index) in cast.splice(0, 5)" :key="index">
                  
                  {{element.name }}
              </span>

        </div>
        <h4 class="tex-color mg-top">Trama</h4>
          <div class="parag mg-top">
            <p>{{ trama.substring(0, 100) }}</p>
        </div>

    </div>
  </div>
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
        trama: String,
        cast: Array
        
            
        },
  
}

</script>
<style lang="scss" >
@use '../styles/partials/appcard' as *;


</style>