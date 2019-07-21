<template>
<div id="location">
<div class="wrapper">
<section>
<div class="content" id="contact">
<h2>Location and Contact</h2>
<b>Location:</b>230 Sitio Balangay St. David Philippines<br>
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
<!--MAPS-->
<GmapMap
  :center="{lat:16.0650, lng:120.4012}"
  :zoom="8"
  map-type-id="terrain"
  :options="{
    fullscreenControl: false,
    mapTypeControl: false,
 }"
  class="imgg">
  
  <GmapMarker
    :key="index"
    v-for="(m, index) in markers"
    :position="m.position"
    :clickable="true"
    @click="center=m.position"/>

</GmapMap> 
  
</div>
</section>
</div>
</div>
</template>
<script>


export default {
    name: 'Location',
  data() {
      return {
          markers: [
            {position: {lat: 16.0406, lng: 120.4314}}
          ]
      }
  },
  
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
.img-content .imgg {
    width: 300px;
    height: 300px;
    margin: 0 auto
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
.img-content .imgg {
    width: 550px;
    height: 300px;
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
    .img-content .imgg {
    width: 600px;
    height: 300px;
    margin-right: 30px;
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


