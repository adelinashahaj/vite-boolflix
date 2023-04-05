
<template>
    
<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img :src="img" alt="Avatar" >
    </div>
    <div class="flip-card-back">
        <h3>{{ titolo }}</h3>
        <h5>{{ titolo_org }}</h5>
        <img v-if="lingua == 'it'" class="image"   alt="flag_italy">
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
        <h4>Attori:</h4>
        <span v-for="(element, index) in cast.splice(0, 5)" :key="index">
             {{element.name }}
        </span>
        
        <h4>Trama</h4>
        <div class="parag">
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
        methods: {
         getCast(){
            let newcast=[];
            newcast.push(this.cast)
            return newcast;
         }
        }
     
     
}

</script>
<style lang="scss">
@use '../styles/partials/appcard' as *;

/*
.flip-card {
    background-color: transparent;
    perspective: 1000px;
  
      .flip-card-inner {
      position: relative;
      width: 231px;
      height: 300px;
      text-align: center;
      transition: transform 0.8s;
      transform-style: preserve-3d;
  
          .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
          }
          .flip-card-front, .flip-card-back {
          position: absolute;
          width: 231px;
          height: 100%;
          -webkit-backface-visibility: hidden; 
          backface-visibility: hidden;
  
              .flip-card-front {
              background-color: #bbb;
              color: black;
              }
  
          
                  .flip-card-back {
                  background-color: black;
                  color: white;
                  transform: rotateY(180deg);
              }
          }
  
      }
  }
  
  .image{
      width: 20px;
  }
  
  img{
      width: 100%;
  }
*/
</style>