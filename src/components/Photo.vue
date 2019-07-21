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
    margin: 30px 0px 20px;
    color: #FFBC00;
    font-size: 18px;
}
@media only screen and (min-width: 700px) {
.grid-wrapper {
    display: flex;
    justify-content: space-between;
}
#photo {
    padding: 0px 0px 50px;
}
.grid-wrapper img {
    width: 200px;
}
}
@media only screen and (min-width: 1150px) {
    section h2 {
    margin-bottom: 60px;
    font-size: 21px;
}
#photo {
    padding: 0px 40px 50px 40px;
}
.grid-wrapper img {
    width: 250px;
}
}
</style>

