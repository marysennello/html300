<template>
  <div class="grid-page">
    <main class="main">
      <section>
        <h2>The Signs as Monsters from Breath of the Wild</h2>
        <h3>WIP based purely on what my heart tells me</h3>
        <p class="lead p-intro"> some things are just for fun... this is one of them  </p>
      </section>
<!--iterate through each sign-->
      <div v-for="sign in signs" :key="sign.id" class="container">
        <div class="row">
          <div class="col-lg-2 astro-grid">
            <h2> {{sign.name}} </h2>

          </div>
          <div class="col-md col-sm astro-grid">
            <h3> {{sign.name}} Sun</h3><br>
            <h4> {{sign.sunMonster}}</h4><br>
            <img v-bind:src="'https://botw-compendium.herokuapp.com/api/v2/entry/'+ sign.sunImg +'/image'" :alt="sign.sunMonster" class="img-fluid">

          </div>
          <div class="col-md col-sm astro-grid">
            <h3> {{sign.name}} Moon</h3><br>
            <h4> {{sign.moonMonster}}</h4><br>
            <img v-bind:src="'https://botw-compendium.herokuapp.com/api/v2/entry/'+ sign.moonImg +'/image'" :alt="sign.moonMonster" class="img-fluid">

          </div>
          <div class="col-md col-sm astro-grid">
            <h3> {{sign.name}} Rising</h3><br>
            <h4> {{sign.risingMonster}}</h4><br>
            <img v-bind:src="'https://botw-compendium.herokuapp.com/api/v2/entry/'+ sign.risingImg +'/image'" :alt="sign.risingMonster" class="img-fluid">

          </div>
        </div>
      </div>
    </main>
  </div>
</template>

  <script>
  export default {
    data (){
      return {

        //signs
        signs:
        [
          {
            name : "Aries",
            sunImg : "fire-breath_lizalfos",
            sunMonster : "Fire-Breath Lizalfos",
            moonImg : "fire_keese",
            moonMonster : "Fire Keese",
            risingImg : "silver_bokoblin",
            risingMonster : "Silver Bokoblin",

          },
          {
            name : "Taurus",
            sunImg : "blue-maned_lynel",
            sunMonster : "Blue-Maned Lynel",
            moonImg : "stone_talus_(luminous)",
            moonMonster : "Stone Talus (Luminous)",
            risingImg : "chuchu",
            risingMonster : "Chuchu",
          },
          {
            name : "Gemini",
            sunImg : "electric_wizzrobe",
            sunMonster : "Electric Wizzrobe",
            moonImg : "yiga_footsoldier",
            moonMonster : "Yiga Footsoldier",
            risingImg : "guardian_scout_ii",
            risingMonster : "Guardian Scout II",
          },
          {
            name : "Cancer",
            sunImg : "naydra",
            sunMonster : "Naydra",
            moonImg : "treasure_octorok",
            moonMonster : "Treasure Octorok",
            risingImg : "ice-breath_lizalfos",
            risingMonster : "Ice-Breath Lizalfos",
          },
          {
            name : "Leo",
            sunImg : "white-maned_lynel",
            sunMonster : "White-Maned Lynel",
            moonImg : "meteo_wizzrobe",
            moonMonster : "Meteo Wizzrobe",
            risingImg : "electric_lizalfos",
            risingMonster : "Electric Lizalfos",
          },
          {
            name : "Virgo",
            sunImg : "guardian_stalker",
            sunMonster : "Guardian Stalker",
            moonImg : "lynel",
            moonMonster : "Lynel",
            risingImg : "forest_octorok",
            risingMonster : "Forest Octorok",
          },
          {
            name : "Libra",
            sunImg : "blue_lizalfos",
            sunMonster : "Blue Lizalfos",
            moonImg : "yiga_blademaster",
            moonMonster : "Yiga Blademaster",
            risingImg : "stalkoblin",
            risingMonster : "Stalkoblin",
          },
          {
            name : "Scorpio",
            sunImg : "blizzrobe",
            sunMonster : "Blizzrobe",
            moonImg : "decayed_guardian",
            moonMonster : "Decayed Guardian",
            risingImg : "water_octorok",
            risingMonster : "Water Octorok",
          },
          {
            name : "Sagittarius",
            sunImg : "guardian_scout_iii",
            sunMonster : "Guardian Scout III",
            moonImg : "guardian_scout_i",
            moonMonster : "Guardian Scout",
            risingImg : "silver_lizalfos",
            risingMonster : "Silver Lizalfos",
          },
          {
            name : "Capricorn",
            sunImg : "black_moblin",
            sunMonster : "Black Moblin",
            moonImg : "stone_talus",
            moonMonster : "Stone Talus",
            risingImg : "guardian_turret",
            risingMonster : "Guardian Turret",
          },
          {
            name : "Aquarius",
            sunImg : "guardian_skywatcher",
            sunMonster : "Guardian Sky Watcher",
            moonImg : "blue_bokoblin",
            moonMonster : "Blue Bokoblin",
            risingImg : "silver_moblin",
            risingMonster : "Silver Moblin",
          },
          {
            name : "Pisces",
            sunImg : "lizalfos",
            sunMonster : "Lizalfos",
            moonImg : "hinox",
            moonMonster : "Hinox",
            risingImg : "ice_chuchu",
            risingMonster : "Ice Chuchu",
          }
        ]
      }
    }
  }
  </script>
