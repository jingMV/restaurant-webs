<template>
  <v-app>
    <v-toolbar
    :fixed="true"
    class="nav"
    dark>
      
      <v-toolbar-side-icon
      @click.native.stop="sideNav = !sideNav"
      class="hidden-md-and-up"
      left></v-toolbar-side-icon>

      <v-toolbar-title class="logo" right><a href="#home"><img :src="require('./assets/FC.png')"></a></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat v-for="items in myItems" :key="items.Title" :href="items.link">{{items.Title}}</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer v-model="sideNav" :fixed="true" :temporary="true" class="nav-drawer">
      <v-list>
        <v-list-tile v-for="items in myItems" :key="items.Title" @click="">
          <v-list-tile-content>
            <v-list-tile-title><a class="linkk" :href="items.link">{{items.Title}}</a></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <router-view></router-view>
  </v-app>
</template>
<script>


export default {
  name: 'App',
  components: {
    
  },
  data () {
    return {
      sideNav: false,
      myItems: [
        {Title: 'About', link: '#about'},
        {Title: 'Menu', link: '#menu'},
        {Title: 'Photos', link: '#photo'},
        {Title: 'Location', link: '#location'},
        {Title: 'Contact', link: '#contact'},
      ]
    }
  }
}
</script>
<style>
html {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}
a {
  text-decoration: none;
}
.linkk {
  color: black
}
.logo img {
  width: 35px;
  margin-top: 5px;
}
.nav {
  z-index: 10;
}
.nav-drawer {
  z-index: 11;
}
@media only screen and (min-width: 1250px) {
  .wrapper {
    max-width: 1250px;
    width: 98%;
    margin: 0 auto;
  }
}
</style>

