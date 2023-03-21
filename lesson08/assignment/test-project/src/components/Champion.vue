<template>
    <div class="champion-container">
      <div class="champion-img">
        <img v-bind:src="url" :alt="name" class="img-fluid" :class="{greenBorder: isGreen}" @click="toggleImgBorder">
      </div>
      <div class="champion-description">
        <h2>{{element}} Sign Rep: {{name}}  </h2>
        <h3>{{sign}}</h3>
        <p class="text-left">{{description}}</p>
      </div>
    </div>
</template>

<script>

  export default {
    name: 'ChampionPage',
    props: {
      name: String,
      description: String,
      url: String,
      element: String,
      sign: String,
    },
    data() {
      return {
        isGreen: false,
      }
    },
    methods: {
      toggleImgBorder() {
        this.isGreen = !this.isGreen;
      }
    }
  }

</script>

<style>
  .greenBorder {
    border: 10px solid #536f50;
  }


</style>
