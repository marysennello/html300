<template>
  <div class="accordion-page">
    <main class="main">
      <section>
        <h2>Regions and Subregions of Hyrule</h2>
        <h3> for information purposes only</h3>
        <p class="lead p-intro"> content WIP </p>
      </section>

<!--ACCORDION -->
      <div class="accordion" id="accordionHyrule">
          <span v-for="region in regions" :key="region.idCard">
  <!--div card in accordion-->
            <div class="card accordion-item">
  <!--div card header-->
              <div class="card-header" id="region.id">
  <!--title of region-->
                <h2 class="mb-0">
  <!--button for collapsing-->
                <button class="btn btn-link" type="button" data-bs-toggle="collapse" data-bs-target="region.dataTarget" aria-expanded="region.start" aria-target="region.idCollapse">
                    {{region.name}}
                  </button>
                </h2>
              </div>
            </div>
  <!--create div box that collapses-->
            <div class="collapse" id="region.idCollapse" aria-labelledby="region.idCard" data-bs-parent="#accordionHyrule">
  <!--body of opened card-->
              <div class="card-body">
                {{region.subRegions}}
                <img src="region.img" alt="area image" class="img-fluid">
              </div>

            </div> <!--end of collapsing div-->
          </span> <!--end of span for each-->
        </div>

        </main>

  </div>
</template>

<script>
export default {
  data (){
    return {

      //regions
      regions:
      [
        {
          name : "Akkala",
          img : "assets/botw-akkala.png",
          idCard : "akkalaHeading",
          idCollapse : "akkalaCollapse",
          dataTarget : "#akkalaCollapse",
          text : "test 123",
          start: "true",
          subRegions: "Akkala Highlands, Akkala Sea, and Deep Akkala"
        },
        {
          name : "Central Hyrule",
          img : "assets/botw-centralhyrule.png",
          idCard : "centralHyruleHeading",
          idCollapse : "centralHyruleCollapse",
          dataTarget : "#centralHyruleCollapse",
          text : "test 123",
          start: "false",
          subRegions: "Great Hyrule Forest, Great Plateau, Hyrule Field, and Hyrule Ridge"
        },
        {
          name : "Eldin",
          img : "assets/botw-eldin.png",
          idCard : "eldinHeading",
          idCollapse : "eldinCollapse",
          dataTarget : "#eldinCollapse",
          text : "test 123",
          start: "false",
          subRegions: "Death Mountain, Eldin Canyon, and Eldin Mountains"
        },
        {
          name : "Faron",
          img : "assets/botw-faron.png",
          idCard : "faronHeading",
          idCollapse : "faronCollapse",
          dataTarget : "#faronCollapse",
          text : "test 123",
          start: "false",
          subRegions: "There are no recognized subregions of Faron"
        },
        {
          name : "Gerudo",
          img : "assets/botw-gerudo.png",
          idCard : "gerudoHeading",
          idCollapse : "gerudoCollapse",
          dataTarget : "#gerudoCollapse",
          text : "test 123",
          start: "false",
          subRegions: "Gerudo Desert and Gerudo Highlands"
        },
        {
          name : "Hebra",
          img : "assets/botw-hebra.png",
          idCard : "hebraHeading",
          idCollapse : "hebraCollapse",
          dataTarget : "#hebraCollapse",
          text : "test 123",
          start: "false",
          subRegions: "Hebra Mountains and Tabantha Frontier"
        },
        {
          name : "Lanayru",
          img : "assets/botw-lanayru.png",
          idCard : "lanayruHeading",
          idCollapse : "lanayruCollapse",
          dataTarget : "#lanayruCollapse",
          text : "test 123",
          start: "false",
          subRegions: "Lanayru Great Spring, Lanayru Sea, Lanayru Wetlands, Mount Lanayru, and Shatterback Point"
        },
        {
          name : "Necluda",
          img : "assets/botw-necluda.png",
          idCard : "necludaHeading",
          idCollapse : "necludaCollapse",
          dataTarget : "#necludaCollapse",
          text : "test 123",
          start: "false",
          subRegions: "East Necluda, Necluda Sea, and West Necluda "
        }
      ]
    }//end return
  }//end data
}
</script>
