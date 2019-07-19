<template>
    <div>
        <Section />
        <About />
        <Menu />
        <Photo />
        <Location />
        <foot />
    </div>
</template>

<script>
import Section from './Section.vue'
import About from './About.vue'
import Menu from './Menu.vue'
import Photo from './Photo.vue'
import Location from './Location.vue'
import foot from './foot.vue'

export default {
    name: 'Home',
    components: {
        Section,
        About,
        Menu,
        Photo,
        Location,
        foot,
    }
}
</script>
<style scoped>

</style>

