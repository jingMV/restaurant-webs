<template>
    <div id="location">
        <div class="wrapper">
            <section>
                <div class="content" id="contact">
                <h2>Location and Contact</h2>
                <b>Location:</b>230 Sitio Balangay St. Panguda Philippines<br>
                <br>
                <i>-for reservations-</i><br>
                <b>Contact No:</b> 09245879932<br>
                <b>Tel No:</b> 578-113-7774<br>
                <b>Email:</b> fcreservation@gmail.com
                <br>
                <br>
                <i>Closed every Saturday and Sunday</i>
                
                
</div>
<div class="img-content">
    <img :src="require('../assets/map.png')">
</div>
            </section>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Location'
}
</script>
<style scoped>
section {
    background: #F1F1F1;
    padding: 30px 10px 0px;
}
.content h2 {
    text-align: center;
    margin-bottom:20px;
    color: #91D000;
    font-size: 18px;
}
.content p {
    font-size: 12px;
}
.img-content img {
    width: 100%;
}
.content {
    padding-bottom: 50px;
}
@media only screen and (min-width: 500px) {
    section {
    padding: 30px 20px 0px;
}
}
@media only screen and (min-width: 700px) {
    section {
    padding: 30px 50px 0px;
}
}
@media only screen and (min-width: 960px) {
    section {
        display: flex;
    }
    .content {
        width: 500px;
        padding: 5px;
    }
}
@media only screen and (min-width: 1150px) {
        .content {
        width: 700px;
        padding: 20px;
    }
        section {
        padding: 30px 20px;
    }
}
</style>


