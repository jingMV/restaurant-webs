<template>
    <div id="location">
        <div class="wrapper">
            <section>
                <div class="content">
                <h2>Location</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting 
industry. Lorem Ipsum has been the industry's standard dummy 
text ever since the 1500s, when an unknown printer took a galley 
of type and scrambled it to makea type specimen book. It has 
survived not only five centuries, but also the leap into electronic 
typesetting, remaining essentially unchanged. It was popularised 
in the 1960s with the release of Letraset sheets containing Lorem 
Ipsumpassages, and more recently with desktop publishing software 
like Aldus PageMaker including versions of Lorem Ipsum.</p>
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


