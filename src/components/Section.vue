<template>
    <div id="home">
    <div class="wrapper">
    <section>
        <span class="background-overlay"></span>
        <h1>Foods and Coffee</h1>
        <p>Treat your family and Friends here at FC Restaurant</p>
        <div class="arrow-wrapper">
        <div class="arrow-down">
            <p>scroll down</p>
            <div class="arrows">
            <span class="bar barA"></span>
            <span class="bar barB"></span>
            </div>
            
        </div>
        </div>
    </section>
    </div>
    </div>
</template>
<script>
export default {
    name: 'Section'
}
</script>
<style scoped>
    #home {
    position: relative;
    background-image: url('~@/assets/sectionBG.png');
    background-size: cover;
}
section {
    text-align: center;
    padding: 220px 0px 40px;
    min-height: 750px;
    
}
section h1 {
    color: #FFBC00;
    z-index: 2;
    position: relative;
    font-family: 'montserrat';
    font-size: 28px;
}
section p {
    color: #fff;
    z-index: 2;
    position: relative;
    font-family: 'open sans';
    font-size: 8px;
    text-align: center;
}
.arrow-down {
    z-index: 2;
    position: relative;
}
.arrow-wrapper {
    margin-top: 300px;
}
.bar {
    width: 15px;
    height: 4px;
    background: #fff;
    display: block;
    margin:  auto;
    border-radius: 10px;
    animation: arrow-animation 2.5s infinite;
    position: relative;
    
}
.arrows {
    margin-left: -10px;
}
@keyframes arrow-animation {
    from {
        top: -3px;
    }
    to {
        top: 5px;
    }
}
.barA {
    transform: rotate(30deg) translateX(-3px)
}
.barB {
    transform: rotate(-30deg) translateX(10px)
}
.background-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    background: black;
    opacity: 0.8;
}
@media only screen and (min-width: 360px) {
    section h1 {
    font-size: 37px;
}
section p {
    font-size: 10px;
}
}
@media only screen and (min-width: 500px) {
    section h1 {
    font-size: 40px;
}
section p {
    font-size: 12px;
}
.arrow-wrapper {
    margin-top: 120px;
}
}
@media only screen and (min-width: 700px) {
        section h1 {
    font-size: 50px;
}
section p {
    font-size: 13px;
}
.arrow-wrapper {
    margin-top: 140px;
}
}
@media only screen and (min-width: 960px) {
section {
padding: 220px 0px 40px;
}
section h1 {
font-size: 70px;
}
section p {
    font-size: 13px;
    line-height: 1px;
}
.arrow-wrapper {
    margin-top: 300px;
}
}
@media only screen and (min-width: 1150px) {
    section {
padding: 200px 0px 60px;
}
section h1 {
font-size: 85px;
}
section p {
    font-size: 14px;
    line-height: 1px;
}
.arrow-wrapper {
    margin-top: 330px;
}
}
</style>