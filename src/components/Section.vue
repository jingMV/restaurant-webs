<template>
    <div id="section">
    <div class="wrapper">
    <section>
        <span class="background-overlay"></span>
        <h1>Foods and Coffee</h1>
        <p>Treat your family and Friends here at Rr Restaurant</p>
        <div class="arrow-wrapper">
        <div class="arrow-down">
            <span class="bar barA"></span>
            <span class="bar barB"></span>
            <p>scroll down</p>
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
    #section {
    position: relative;
    background-image: url('~@/assets/sectionBG.png');
    background-size: cover;
}
section {
    text-align: center;
    padding: 70px 0px 40px;
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
}
.arrow-down {
    z-index: 2;
    position: relative;
}
.arrow-wrapper {
    margin-top: 80px;
}
.bar {
    width: 15px;
    height: 4px;
    background: #fff;
    display: block;
    margin:  auto;
    border-radius: 10px;
    animation: arrow-animation 2s infinite;
    position: relative;
    
}
@keyframes arrow-animation {
    from {
        top: -10px;
    }
    to {
        top: 0px;
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
</style>