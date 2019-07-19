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
                left
                show-arrows>

                <v-tab v-for="item in items" 
                :key="item"
                :href="`#tab-${item}`">
                {{item}}
                </v-tab>

                </v-tabs>

                <!--TAB CONTENT-->
               <v-tabs-items v-model="model">
               <v-tab-item
               v-for="item in items"
               :key="item"
               :value="`tab-${item}`">

               <v-card flat>
               <v-card-text v-text="text" class="menu-text"></v-card-text>
               </v-card>
      </v-tab-item>
    </v-tabs-items>
    </div>
    <!--img corousel-->
    <div class="img-content">
        <v-carousel hide-controls class="hidden-sm-and-down">
            <v-carousel-item v-for="(myImg, i) in myImgs" 
            :key="i"
            :src="myImg.src">
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
        'Breakfast', 'Lunch', 'Dinner', 'Merienda', 'Soap', 'Dessert', 'Coffee'
     ],
     text: '  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to makea type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsumpassages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
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
section {
    padding: 35px 0px;
}
section h2 {
    text-align: center;
    margin-bottom: 20px;
    color: #91D000;
    font-size: 18px;
}
.menu-text {
    font-size: 12px;
}
</style>


