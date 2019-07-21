<template>
    <div id="menu">
        <div class="wrapper">
            <section>
                <h2>Menu</h2>

                <div class="menu-wrapper">

                <div class="menu-content">
                <!--TAB CONTAINER and TAB ITEMS-->
                <v-tabs v-model="model"
                slider-color="#91D000"
                centered
                show-arrows
                max>

                <v-tab v-for="item in items" 
                :key="item.Id"
                :href="`#tab-${item.itm}`">
                {{item.itm}}
                </v-tab>

                </v-tabs>

                <!--TAB CONTENT-->
               <v-tabs-items v-model="model">
               <v-tab-item
               v-for="item in items"
               :key="item.Id"
               :value="`tab-${item.itm}`">

               <v-card flat>
               <v-card-text class="menu-text"><img :src="item.content"></v-card-text>
               </v-card>
      </v-tab-item>
    </v-tabs-items>
    </div>
    <!--img corousel-->
    <div class="img-content">
        <v-carousel hide-controls class="hidden-sm-and-down">
            <v-carousel-item v-for="(myImg, i) in myImgs" 
            :key="i"
            :src="myImg.src"
            >
            </v-carousel-item>
        </v-carousel>
    </div>
    </div>
            </section>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Menu',
    data() {
        return {
        model: null,
        items: [
        {itm: 'Breakfast', content: require('../assets/breakfast menu.jpg')},
         {itm: 'Lunch', content: require('../assets/lunch menu.jpg')},
         {itm: 'Dinner', content: require('../assets/dinner menu.jpg')},
         {itm: 'Merienda', content: require('../assets/merienda menu.jpg')},
         {itm: 'Dessert', content: require('../assets/dessert menu.jpg')},
         {itm: 'Coffee', content: require('../assets/coffee menu.jpg')}
     ],
     myImgs: [
      {src: require('../assets/img1.png')},
      {src: require('../assets/img2.png')},
      {src: require('../assets/img3.png')},
      {src: require('../assets/img4.png')},
     ]
    }
}
}
</script>
<style scoped>
#menu {
    background: #f1f1f1;
    position: relative;
}

section {
    padding: 35px 0px;
}
section h2 {
    text-align: center;
    margin-bottom: 20px;
    color: #91D000;
    font-size: 18px;
}
.menu-text img {
    width: 100%;
}
@media only screen and (min-width: 700px) {
    section {
    padding: 50px 20px;
}
.menu-text {
    width: 400px;
    margin: 0 auto;
 
}
}
@media only screen and (min-width: 960px) {
section h2 {
font-size: 21px;
margin-bottom: 40px;
}
.img-content {
    width: 500px;
}
.menu-content {
    width: 400px;
}
.menu-wrapper {
    display: flex;
    justify-content: space-around;
}
}
@media only screen and (min-width: 1150px) {
section h2 {
margin-bottom: 60px;
}
section {
padding: 50px 40px;
}
.menu-content {
    width: 500px;
}
#menu::before {
    content: '';
    width: 350px;
    height: 550px;
    background-image: url('~@/assets/menuBG.png');
    background-size: 350px 550px;
    display: inline-block;
    position: absolute;
    bottom: 0;
    

}

}

</style>


