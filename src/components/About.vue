<template>
    <div id="about">
        <div class="wrapper">
            <section>
                <h2>About</h2>
                <p>
                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                 standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                 a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
                 essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                 passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>

                <p>
                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                 standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                 a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
                 essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                 passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </section>
        </div>
        <div class="banner">
            <img :src="require('../assets/banner.png')">
        </div>
    </div>
</template>
<script>
export default {
    name: 'About'
}
</script>

<style scoped>
section h2 {
    text-align: center;
    margin-bottom:20px;
    color: #91D000;
    font-size: 18px;
}
section p {
    font-size: 12px;
}
section {
    padding: 35px 10px;
}
.banner img {
    width: 100%;
    min-height: 10%;
}
@media only screen and (min-width: 500px) {
    section {
    padding: 35px 20px;
}
}
@media only screen and (min-width: 960px) {
section h2 {
font-size: 21px;
}
section p {
    font-size: 13px;
}
section {
    padding: 70px 50px;
}
}
@media only screen and (min-width: 1150px) {
section h2 {
margin-bottom: 40px;
}
section {
    padding:  90px 70px;
}
}
</style>
