<script>



export default{
    props: {
        titolo: String,
        titolo_org: String,
        lingua: String,
            
        }
}

</script>

<template>
    <div class="character text-center">
        <img class='img-fluid rounded-circle' />
        <h3>{{ titolo }}</h3>
        <h5>{{ titolo_org }}</h5>
        <h5>{{ lingua }}</h5>
    </div>

</template>

<style lang="scss">

</style>