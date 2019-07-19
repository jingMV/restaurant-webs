<template>
<div id="photo">
    <div class="wrapper">
        <section>
            <h2>Photos</h2>
            <div class="grid-wrapper">
                <img :src="require('../assets/photo1.png')">
                <img :src="require('../assets/photo2.png')">
                <img :src="require('../assets/photo3.png')">
            </div>
        </section>
    </div>
</div>
</template>
<script>
export default {
    name: 'Photo',
}
</script>
<style scoped>
.grid-wrapper img {
    width: 100%;
    
}
.grid-wrapper {
    width: 80%;
    margin: 0 auto;
}
section h2 {
    text-align: center;
    margin-bottom: 20px;
    color: #FFBC00;
    font-size: 18px;
}
</style>

