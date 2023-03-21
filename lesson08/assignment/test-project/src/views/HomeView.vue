<template>
  <div class="home">
  <!--  <img alt="Vue logo" src="../assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <main class="main">
    <section>
      <h2>Landing page with some content</h2>
      <h3>check out some cool tool tips in the footer</h3>
      <p class="lead p-intro"> content WIP </p>
      <h4>
        <button class="korokbutton" v-on:click="show = !show">Examine?</button>
      </h4>
      <img v-if="show" src="https://oyster.ignimgs.com/mediawiki/apis.ign.com/the-legend-of-zelda-hd/c/c3/KP_FairyDust.jpg?width=2240" class="korokpuzzle">


      <img v-else src="https://cdn.vox-cdn.com/thumbor/vFQLJ3ZDw2DYKmL54jvv1H0O_Pg=/0x0:1920x1080/1520x1013/filters:focal(807x387:1113x693):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/55337577/cover_1_0000_Layer_6.0.jpg" class="korokpuzzle">

    </section>
  </main>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  //components: {
  //  HelloWorld
  //},
  data (){
    return {
    show: true,
    }
  }
}


</script>


<style>
.korokpuzzle {
max-width: 80%;
border-radius: 50px;
}
.korokbutton {
color: black;
}

</style>
