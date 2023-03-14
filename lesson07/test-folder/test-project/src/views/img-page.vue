<template>
  <div class="accordion-page">
    <main class="main">
      <section>
        <h2>Hyrule's Champions and the Elements</h2>
        <h3> based purely on what my heart tells me but this content is just so obvious to me</h3>
        <p class="lead p-intro"> content WIP </p>
      </section>
<!--Images -->
      <div class="champion-container" v-for="champion in champions" :key="champion.id">
<!--champion 1-->

        <div class="champion-img">
          <img v-bind:src="champion.url" :alt="champion.name" class="img-fluid">
        </div>
        <div class="champion-description">
          <h2>{{champion.element}} Sign Rep: {{champion.name}}</h2>
          <h3>{{champion.signs}}</h3>
          <p class="text-left">{{champion.description}}</p>
        </div>

      </div>
    </main>
  </div>
</template>

<script>
  import Urbosa from "../assets/urbosa-botw-intro.png"
  import Daruk from "../assets/daruk-botw-intro.png"
  import Revali from "../assets/revali-botw-intro.png"
  import Mipha from "../assets/mipha-botw-intro.png"

export default {
  data (){
    return {


    //img-Champions
      champions: [
        {
          name: 'Urbosa',
          url : Urbosa,
          element: 'Fire',
          signs: 'Aries, Leo, Sagitarius',
          description: 'Chief of the Gerudo, a natural leader, capable of manipulating lightening, and trouble containing her emotions, there is no doubt that Urbosa represents the Fire signs. duty, organization, urbosa\'s fury, fiercely loyal.',
        },
        {
          name: 'Daruk',
          url : Daruk,
          element: 'Earth',
          signs: 'Taurus, Virgo, Capricorn',
          description: 'Daruk, and his race of Goron, are undeniably of the Earth. Their strength and resiliance strongly reverberate with Earth signs. Sometimes stubborn, looking for the bigger picture, and moving purposefully so as not to misstep or make a wrong decision are things you could say about both.',
        },
        {
          name: 'Revali',
          url : Revali,
          element: 'Air',
          signs: 'Gemini, Libra, Aquarius',
          description: 'Air signs are often seen as intellectual and analytical, and Revali is exactly that. The weapons of the Rito are known for precision and distance, and Revali\'s personality matches the sometimes boastful and abrasive personalities of Air signs. Hide insecurities. "Coasting through life" "winging it" updraft to soar high in the air. his appearance is based on a bird of prey',
        },
        {
          name: 'Mipha',
          url : Mipha,
          element: 'Water',
          signs: 'Pisces, Cancer, Scorpio',
          description: 'Let\'s start with the obvious, ok? Mipha is the princess of the Zora, an aquatic race adept at swimming and thriving underwater.',
        },
      ], //end champions


    }//end return
  }//end data
}
</script>
<style>
</style>
