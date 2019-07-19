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
</style>
