<template>
  <div id="app">
  <!--head for importing google fonts-->
  <head>
    <!--google fonts-->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Noto+Serif:wght@400;700&family=Rufina:wght@700&family=Syne:wght@400;500;600&display=swap" rel="stylesheet">
  </head>

  <!--header and nav for every page-->
  <header id="header">
    <div class="header-container">
      <div class="header">
        <h1 class="text-center">Hyrulian Astrology</h1>
      </div>
    </div>
  </header>
  <nav class="navbar navbar-expand-lg">
    <!--hamburger toggle button to reveal nav on small screens-->
    <button class="btn bg-light btn-light navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0 container">
        <li class="nav-item active">
          <router-link to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/accordion-page">Accordion Page</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/img-page">Image Page</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/grid-page">Grid Page</router-link>
        </li>
      </ul>
    </div>
  </nav>


  <!--VIEWS ROUTED IN HERE-->
    <router-view/>

  <!--footer for every page-->
    <footer>
      <section>
        <h1>Information</h1>
        <span class="tt" data-bs-placement="top" title="this is a book">
          <p>Astrological insights are referenced from <a href="https://a.co/d/0rDoknD">The Only Astrology Book You'll Ever Need</a> by Joanna Martine Woolfolk (2012)</p>
        </span>
        <span class="tt" data-bs-placement="bottom" title="these are websites">
          <p>Images and Descriptions are referenced from <a href="https://gadhagod.github.io/Hyrule-Compendium-API/#/">Hyrule Compendium API by Aarav Borthakur</a> and <a href="https://zelda.fandom.com/wiki/The_Legend_of_Zelda:_Breath_of_the_Wild">The Legend of Zelda: Breath of the Wild Wiki</a></p>
        </span>
        <p>Created by Mary Sennello 2023</p>
      </section>
    </footer>
  </div>
</template>

<script>
 
</script>


<style>

@import "@/assets/css/style.css";

#app {
  //font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-wrap: wrap;
  align-content: stretch;
  justify-content: space-around;
}

header, footer {
  width: 100%;
}

nav {
  padding: 30px;
  width: 100%;

  a {
    //font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    padding: 1em 2em;

    &.router-link-exact-active {
      color: #536f50;
    }
  }
}


</style>
