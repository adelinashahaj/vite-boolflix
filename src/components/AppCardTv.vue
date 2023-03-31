

<template>
 <div class="character ">
        <img src="" alt="">
        <h3>{{ titolo }}</h3>
        <h5>{{ titolo_org }}</h5>

        <img v-if="lingua == 'it'" class="image" src="../assets/it.svg" alt="flag_it">
        <img v-else-if="lingua == 'en'" class="image" src="../assets/en.svg" alt="flag_uk">
        <img v-else-if="lingua == 'fr'" class="image" src="../assets/fr.svg" alt="flag_fr">
        <img v-else-if="lingua == 'de'" class="image" src="../assets/de.svg" alt="flag_de">
        <div v-else >{{ lingua }}</div>

        <h5>{{ voto }}</h5>
    </div>
</template>
<script>

export default{
    props: {
        titolo: String,
        titolo_org: String,
        lingua: String,
        voto: Number,
        
            
        },
        methods: {
        getImagePath: function (img) {
            return new URL(`./assets/${img}.svg`, import.meta.url).href;
        }
}
}
</script>
<style lang="scss" >
.image{
    width: 20px;
}

</style>