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


<style lang="scss">

// Colors
$cream: #fdffe0;
$grass: #92c582;
$steel: #86a5a9;
$gray: #767676;
$black: rgb( 0,0,0);
$black-85: rgba( 0,0,0, 0.85);
$black-35: rgba( 0,0,0, 0.35);
$forest: #536f50;
$forest-15: rgba( 83, 111, 80, 0.15);
$forest-35: rgba( 83, 111, 80, 0.35);
$forest-85: rgba( 83, 111, 80, 0.85);

$charcoal: #36454F;
$charcoal-35: rgba( 54, 69, 79, 0.35);
$charcoal-dark: #242f36;
$charcoal-dark-35: rgba( 36, 47, 54, 0.35);
$charcoal-dark-85: rgba( 36, 47, 54, 0.85);

//font
$font-serif: 'Rufina', serif;
$font-serif-2: 'Noto Serif', serif;
$font-syne:'Syne', sans-serif;
$font-inter: 'Inter', sans-serif;

//shadows
$shadow-1: 0 15px 6px rgba(0, 0, 0, 0.01), 0 8px 5px rgba(0, 0, 0, 0.05), 0 4px 4px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.09), 0 0 0 rgba(0, 0, 0, 0.09);
$shadow-2: 0 15px 6px rgba(0, 0, 0, 0.01), 0 8px 5px rgba(0, 0, 0, 0.05), 0 4px 4px rgba(0, 0, 0, 0.08);
$shadow-3: 0 15px 6px rgba(0, 0, 0, 0.5), 0 8px 5px rgba(0, 0, 0, 0.05);
/* Inner Shadow */
$inner-shadow: inset 0px 46px 19px rgba(0, 0, 0, 0.01), inset 0px 26px 16px rgba(0, 0, 0, 0.03), inset 0px 12px 12px rgba(0, 0, 0, 0.05), inset 0px 3px 6px rgba(0, 0, 0, 0.05);

//border radii
$border-outer: 80px;
$border-outer-bottom: 0 0 80px 80px;
$border-outer-top: 80px 80px 0 0;
$border-inner: 40px;
$border-inner-bottom: 0 0 40px 40px;
$border-outer-top2: 40px 40px 0 0;

#app {
  //font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-wrap: wrap;
  align-content: stretch;
  justify-content: stretch;
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
/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */
html {
  font-family: sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%
}

body {
  margin: 0
}

article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section, summary {
  display: block
}

audio, canvas, progress, video {
  display: inline-block;
  vertical-align: baseline
}

audio:not([controls]) {
  display: none;
  height: 0
}

[hidden], template {
  display: none
}

a {
  background-color: rgba(0, 0, 0, 0)
}

a:active, a:hover {
  outline: 0
}

abbr[title] {
  border-bottom: 1px dotted
}

b, strong {
  font-weight: bold
}

dfn {
  font-style: italic
}

h1 {
  font-size: 2em;
  margin: .67em 0
}

mark {
  background: #ff0;
  color: #000
}

small {
  font-size: 80%
}

sub, sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline
}

sup {
  top: -0.5em
}

sub {
  bottom: -0.25em
}

img {
  border: 0
}

svg:not(:root) {
  overflow: hidden
}

figure {
  margin: 1em 40px
}

hr {
  box-sizing: content-box;
  height: 0
}

pre {
  overflow: auto
}

code, kbd, pre, samp {
  font-family: monospace, monospace;
  font-size: 1em
}

button, input, optgroup, select, textarea {
  color: inherit;
  font: inherit;
  margin: 0
}

button {
  overflow: visible
}

button, select {
  text-transform: none
}

button, html input[type=button], input[type=reset], input[type=submit] {
  -webkit-appearance: button;
  cursor: pointer
}

button[disabled], html input[disabled] {
  cursor: default
}

button::-moz-focus-inner, input::-moz-focus-inner {
  border: 0;
  padding: 0
}

input {
  line-height: normal
}

input[type=checkbox], input[type=radio] {
  box-sizing: border-box;
  padding: 0
}

input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button {
  height: auto
}

input[type=search] {
  -webkit-appearance: textfield;
  box-sizing: content-box
}

input[type=search]::-webkit-search-cancel-button, input[type=search]::-webkit-search-decoration {
  -webkit-appearance: none
}

fieldset {
  border: 1px solid silver;
  margin: 0 2px;
  padding: .35em .625em .75em
}

legend {
  border: 0;
  padding: 0
}

textarea {
  overflow: auto
}

optgroup {
  font-weight: bold
}

table {
  border-collapse: collapse;
  border-spacing: 0
}

td, th {
  padding: 0
}

html {
  box-sizing: border-box
}

*, *:after, *:before {
  box-sizing: inherit
}

body {
  background-image: url("assets/stars-unsplash.jpg");
  background-color: rgba(83, 111, 80, .35);
  background-blend-mode: multiply;
  background-size: cover;
  background-attachment: fixed;
  margin: 0
}

body .sr-only {
  position: absolute;
  left: -150px
}

.hidden {
  display: none
}

header {
  padding: 1rem 2rem;
  height: 16rem;
  margin-top: 0;
  width: 100%;
}

header h1 {
  font-family: "Syne", sans-serif;
  color: #fdffe0;
  font-size: 3.5rem
}

header .header-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: inherit
}

.sticky {
  background-color: rgba(0, 0, 0, .85);
  position: fixed;
  z-index: 1000;
  padding-bottom: 2rem;
  height: 6rem;
  width: 100%;
  top: 0;
  border-radius: 0 0 80px 80px;
  border-bottom: 1px #536f50 solid;
  background-color: #000;
  box-shadow: 0 15px 6px rgba(0, 0, 0, .01), 0 8px 5px rgba(0, 0, 0, .05), 0 4px 4px rgba(0, 0, 0, .08), 0 1px 2px rgba(0, 0, 0, .09), 0 0 0 rgba(0, 0, 0, .09);
  animation-name: stickyHeader;
  animation-duration: 350ms;
  animation-timing-function: linear;
  animation-direction: normal
}

.sticky h1 {
  font-size: 1.5rem
}

.sticky+nav {
  padding-top: 8rem
}

.unstick {
  animation-name: unstickHeader;
  animation-direction: normal;
  animation-duration: 350ms;
  animation-timing-function: ease-out;
  margin-bottom: 1rem
}

.unstick h1 {
  font-size: 3.5rem
}

@keyframes stickyHeader {
  0% {
    height: 16rem;
    font-size: .5rem;
    border-radius: 0 0 80px 80px;
    border-bottom-color: #536f50;
    box-shadow: inset 0px 46px 19px rgba(0, 0, 0, .01), inset 0px 26px 16px rgba(0, 0, 0, .03), inset 0px 12px 12px rgba(0, 0, 0, .05), inset 0px 3px 6px rgba(0, 0, 0, .05)
  }

  35% {
    background-color: rgba(0, 0, 0, .35)
  }

  85% {
    background-color: rgba(0, 0, 0, .85)
  }

  100% {
    height: 6rem;
    border-radius: 0 0 80px 80px;
    border-bottom: 1px #536f50 solid;
    background-color: #000
  }
}

@keyframes unstickHeader {
  0% {
    height: 6rem;
    font-size: .5rem;
    border-radius: 0 0 80px 80px;
    border-bottom: 1px #536f50 solid;
    background-color: #000
  }

  35% {
    background-color: rgba(0, 0, 0, .35);
    border-bottom: 1px #536f50 solid
  }

  85% {
    background-color: rgba(0, 0, 0, .35);
    border-bottom: 1px #536f50 solid
  }

  100% {
    height: 16rem;
    border-radius: 0 0 80px 80px;
    box-shadow: inset 0px 46px 19px rgba(0, 0, 0, .01), inset 0px 26px 16px rgba(0, 0, 0, .03), inset 0px 12px 12px rgba(0, 0, 0, .05), inset 0px 3px 6px rgba(0, 0, 0, .05);
    font-size: 3.5rem
  }
}

nav {
  height: 2em;
  padding: 0 15rem

}

nav .container {
  background-color: #86a5a9;
  border-radius: 80px;
  display: flex;
  justify-content: space-around;
  align-items: stretch;
  height: inherit;
  padding: 1rem
}

nav .container .nav-item {
  font-family: "Inter", sans-serif;
  color: #92c582;
  text-align: center;
  font-weight: 400;
  text-decoration: none;
  animation: linkhover-exit;
  animation-duration: 500ms;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards
}

nav .container .nav-item:hover {
  color: #fdffe0;
  animation-name: linkhover;
  animation-duration: 300ms;
  animation-delay: 25ms;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards
}

@keyframes linkhover {
  0% {
    background-color: rgba(54, 69, 79, .35)
  }

  100% {
    border-radius: 40px;
    background-color: rgba(54, 69, 79, .35);
    box-shadow: inset 0px 46px 19px rgba(0, 0, 0, .01), inset 0px 26px 16px rgba(0, 0, 0, .03), inset 0px 12px 12px rgba(0, 0, 0, .05), inset 0px 3px 6px rgba(0, 0, 0, .05)
  }
}

@keyframes linkhover-exit {
  0% {
    border-radius: 40px;
    background-color: rgba(54, 69, 79, .35);
    box-shadow: inset 0px 46px 19px rgba(0, 0, 0, .01), inset 0px 26px 16px rgba(0, 0, 0, .03), inset 0px 12px 12px rgba(0, 0, 0, .05), inset 0px 3px 6px rgba(0, 0, 0, .05)
  }
}

@media screen and (max-width: 767px) {
  nav {
    padding: .5em
  }

  nav .container {
    justify-self: flex-start;
    justify-content: flex-start;
    border-radius: 40px;
    width: 25%;
    margin-left: 1rem
  }

  nav .container a {
    padding: .5em;
    text-align: center
  }
}

.main {
  margin: 5%;
  padding: 2rem;
  background-color: #242f36;
  border-radius: 80px;
  font-family: "Inter", sans-serif
}

.main h2, .main h3, .main .p-intro {
  color: #fdffe0;
  text-align: center
}

.main .champion-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: stretch;
  border-radius: 40px;
  border: 1px solid #92c582;
  padding: 2em
}

.main .champion-container .champion-img {
  width: 40%;
  padding: 1rem 0
}

.main .champion-container .champion-img img {
  border-radius: 40px;
  height: auto
}

.main .champion-container .champion-description {
  width: 55%;
  border-bottom: 1px solid #86a5a9;
  padding: 1rem 0
}

.main .champion-container .champion-description h2, .main .champion-container .champion-description h3 {
  font-family: "Syne", sans-serif
}

.main .champion-container .champion-description p {
  color: #fdffe0
}

@media screen and (min-width: 920px) {
  .main .champion-container .champion-img {
    width: 55%;
    padding: 1rem
  }

  .main .champion-container .champion-description {
    width: 40%;
    padding: 0;
    margin: 1rem 0
  }
}

@media screen and (max-width: 767px) {
  .main .champion-container :nth-child(1) {
    order: 1
  }

  .main .champion-container :nth-child(2) {
    order: 2
  }

  .main .champion-container :nth-child(3) {
    order: 4
  }

  .main .champion-container :nth-child(4) {
    order: 3
  }

  .main .champion-container :nth-child(5) {
    order: 5
  }

  .main .champion-container :nth-child(6) {
    order: 6
  }

  .main .champion-container :nth-child(7) {
    order: 8
  }

  .main .champion-container :nth-child(8) {
    order: 7
  }

  .main .champion-container .champion-img {
    width: 100%;
    padding: 0
  }

  .main .champion-container .champion-description {
    width: 100%;
    padding: 0;
    margin: 1rem 0
  }
}

.main .accordion {
  margin: 1rem 20%
}

.main .accordion .card-header {
  background-color: #536f50;
  box-shadow: inset 0px 46px 19px rgba(0, 0, 0, .01), inset 0px 26px 16px rgba(0, 0, 0, .03), inset 0px 12px 12px rgba(0, 0, 0, .05), inset 0px 3px 6px rgba(0, 0, 0, .05)
}

.main .accordion .card-header h2 {
  text-align: left
}

.main .accordion .card-header h2 .btn-link {
  color: #92c582;
  text-decoration: none;
  font-size: 1em;
  width: 100%;
  font-family: "Syne", sans-serif
}

.main .accordion .card-body {
  color: #242f36;
  font-family: "Inter", sans-serif;
  background-color: #86a5a9;
  padding: 2em;
  margin: 0 0 1em 0;
  box-shadow: 0 15px 6px rgba(0, 0, 0, .01), 0 8px 5px rgba(0, 0, 0, .05), 0 4px 4px rgba(0, 0, 0, .08);
  border-radius: 0 0 40px 40px
}

.main .accordion .card-body img {
  border-radius: 40px;
  border: 1px solid #536f50
}

@media screen and (max-width: 767px) {
  .main .accordion {
    margin: 1rem 5%
  }

  .main .accordion .card-body {
    padding: 1em
  }
}

@media screen and (min-width: 768px) {
  .main .accordion {
    margin: 1rem 10%
  }

  .main .accordion .card-body {
    padding: 2em
  }
}

@media screen and (min-width: 920px) {
  .main .accordion {
    margin: 1rem 15%
  }

  .main .accordion .card-body {
    padding: 2em
  }
}

@media screen and (min-width: 1300px) {
  .main .accordion {
    margin: 1rem 25%
  }

  .main .accordion .card-body {
    padding: 3rem
  }
}

.main .container .row .col, .main .container .row .col-2 {
  border: 1px solid #fdffe0
}

.main .container .row .astro-grid {
  margin: .5rem;
  background-color: #36454f;
  border-radius: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: stretch;
  box-shadow: 0 15px 6px rgba(0, 0, 0, .01), 0 8px 5px rgba(0, 0, 0, .05), 0 4px 4px rgba(0, 0, 0, .08), 0 1px 2px rgba(0, 0, 0, .09), 0 0 0 rgba(0, 0, 0, .09)
}

.main .container .row .astro-grid h2 {
  color: #92c582;
  padding: 0.5rem 2rem;
}

.main .container .row .astro-grid h3 {
  color: #86a5a9;
  padding: .5rem 2rem;
}

.main .container .row .astro-grid h4 {
  color: #86a5a9;
  padding: .5rem 2rem;
}

.main .container .row .astro-grid img {
  margin: 1rem 0rem;
  padding: 0 .5rem 1rem .5rem;
  border-radius: 40px
}

@media screen and (min-device-width : 768px)and (max-device-width : 1024px) {
  .main .container div.col-md-2 {
    writing-mode: vertical-rl;
    text-orientation: sideways
  }
}

footer {
  margin-top: 3rem;
  color: #fdffe0;
  background-color: #536f50;
  border-radius: 80px 80px 0 0;
  border: 2px solid rgba(83, 111, 80, .35);
  box-shadow: inset 0px 46px 19px rgba(0, 0, 0, .01), inset 0px 26px 16px rgba(0, 0, 0, .03), inset 0px 12px 12px rgba(0, 0, 0, .05), inset 0px 3px 6px rgba(0, 0, 0, .05);
  padding: 3px 0;
  left: 0;
  bottom: 0;
  z-index: 1000;
  width: 100%;
}

footer h1 {
  font-family: "Syne", sans-serif;
  text-align: center
}

footer p {
  font-family: "Inter", sans-serif;
  text-align: center
}

footer a {
  font-family: "Inter", sans-serif;
  color: #92c582;
  font-weight: 400;
  text-decoration: none
}

footer a:hover {
  color: #fdffe0;
  text-decoration: underline
}

.home, .accordion-page, .img-page, .grid-page {
width: 100%;
}
.sticky {
  background-color: rgba( 0,0,0, 0.85);
  position: fixed;
  z-index: 1000;
  padding-bottom: 2rem;
  height: 6rem;
  width: 100%;
  top: 0;
  border-radius: $border-outer-bottom;
  border-bottom: 1px $forest solid;
  background-color: $black;
  box-shadow: $shadow-1;
  animation-name: stickyHeader;
  animation-duration: 350ms;
  animation-timing-function: linear;
  animation-direction: normal;

  & h1 {
    font-size: 1.5rem;
  }
}

.sticky + nav {
  padding-top: 8rem;
}
/*still trying to get this to work... */
.unstick {
  animation-name: unstickHeader;
  animation-direction: normal;
  animation-duration: 350ms;
  //animation-delay: 0ms;
  animation-timing-function: ease-out;
  margin-bottom: 1rem;

  & h1 {
    font-size: 3.5rem;
  }
}
@keyframes stickyHeader {
  0% {
    height: 16rem;
    font-size: 0.5rem;
    border-radius: $border-outer-bottom;
    border-bottom-color: $forest;
    box-shadow: $inner-shadow;
  }

  35% {
    background-color: $black-35;
  }

  85% {
    background-color: rgba( 0,0,0, 0.85);
  }

  100% {
    height: 6rem;
    border-radius: $border-outer-bottom;
    border-bottom: 1px $forest solid;
    background-color: $black;
  }
}
@keyframes unstickHeader {
  0% {
    height: 6rem;
    font-size: 0.5rem;
    border-radius: $border-outer-bottom;
    border-bottom: 1px $forest solid;
    background-color: $black;
  }

  35% {
    background-color: $black-35;
    border-bottom: 1px $forest solid;
  }

  85% {
    background-color: $black-35;
    border-bottom: 1px $forest solid;
  }

  100% {
    height: 16rem;
    border-radius: $border-outer-bottom;
    box-shadow: $inner-shadow;
    font-size: 3.5rem;
  }
}
main {
  /*general*/
  padding-top: 1rem;
  color: $cream;
  margin-left: 8rem;
  margin-right: 8rem;
  min-height: 36rem;

  & h1 {
    font-family: $font-syne;
    text-align: center;
    padding-top: 3rem;
  }

  & p {
    font-family: $font-inter;
    text-align: center;
  }
  /*button for results and discovering user's signs*/
  & button {
    color: $cream;
    text-align: center;
    border-radius: $border-outer;
    font-family: $font-inter;
  }

  & .calculate {
    padding: 1rem 6rem;
    background-color: $charcoal;
  }

  & .natalChart {
    background-color: $gray;
    padding: 1rem;
    & a {
      color: $cream;
      text-decoration: none;
    }
  }

  & .resetCalculate {
    padding: 1rem 6rem;
    background-color: $charcoal;
  }

  & button:hover {
    background: $charcoal-dark;
    cursor: pointer;
    box-shadow: $shadow-1;
  }
  /*SECTION FOR --SELECTING-- BIG 3*/
  /*flex box for selecting big 3*/
  & .container-select {
    display: flex;
    justify-content: center;
    text-align: center;
    color: $cream;
    font-family: $font-serif;
    /*Each section is constructed:
    ul.sign-select
      li
        ul.sign
          li(13)
      li.sign-chosen (will only appear after selecting sign)*/
    & ul {
      list-style: none;
      padding: 1rem;
      margin: 1rem;
      display: inline-block;
      background: $forest;
      border-radius: $border-inner;
    }

    & li {
      width: 150px;
      height: 24px;
      line-height: 24px;
      position: relative;
      text-transform: uppercase;
      //font-size: 14px;
      cursor: pointer;
    }
    /*hide list of signs until hovered*/
    & .sign {
      display: none;
    }
    /*reveal list of signs while hovering on sign-selector box*/
    & .sign-select:hover {
      background-color: $forest;
      box-shadow: $inner-shadow;
      /*ul that contains signs as li*/
      & .sign {
        display: block;
        background-color: $forest-85;
        border-radius: $border-inner-bottom;
        box-shadow: $shadow-2;
        width: 150px;
        margin-top: -2px;
        margin-left: 0;
        /*animated dropdown of signs*/
        & li {
          background-color: $forest;
          box-shadow: $shadow-1;
          //border-radius: $border-inner;
          margin: 0;
          width: 120px;
          opacity: 0;
          /*animation based on example from lesson4*/
          @for $i from 1 through 13 {
            &:nth-child(#{$i}) {
              animation-name: sign;
              animation-duration: 50ms;
              animation-delay: (50ms * $i) - 100;
              animation-timing-function: ease-in-out;
              animation-fill-mode: forwards;
            }
            @keyframes sign {
              0% {
                opacity: 0;
                transform: rotateY(-90deg) translateY(30px);
              }

              100% {
                opacity: 1;
                transform: rotateY(0deg) translateY(0px);
              }
            }
          }
        }
        /*changes for hover and click on signs to select*/
        & li:hover {
          background-color: $charcoal-dark;
          box-shadow: $shadow-2;
          border-radius: $border-inner;
        }

        & li:active {
          background-color: $grass;
          color: $forest;
        }
      }
    }
    /*HIDE li ELEMENT OF USER'S SIGN UNTIL SELECTED*/
    & .sign-chosen-hidden {
      display: none;
    }

    & .sign-chosen {
      display: block;
      font-family: $font-syne;
      border-radius: $border-inner;
      color: $forest;
      background-color: $grass;
    }
  }
  /*end of container-select */

  /*SECTION FOR --RESULTS--OF BIG 3*/
  & .sign-chosen-hidden {
    display: none;
  }

  & .container {
    /*ANIMATION FOR BLOCKS SLIDING IN*/
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    padding: 1rem 3rem;
  }
  /*3 blocks to hold the 3 signs*/
  /*class of .block is for each sign's content*/
  & .block {
    opacity: 0;
    margin: 1rem;
    padding: 1rem;
    background-color: $charcoal;
    border: 2px solid $forest-35;
    border-radius: $border-outer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: $inner-shadow;
    @for $i from 1 through 3 {
      &:nth-child(#{$i}) {
        animation-name: showResults;
        animation-duration: 300ms;
        animation-delay: (300ms * $i) - 300;
        animation-timing-function: ease-out;
        animation-fill-mode: forwards;
      }
      @keyframes showResults {
        0% {
          opacity: 0;
          transform: rotateY(-270deg) translateY(30px);
        }

        100% {
          opacity: 1;
          transform: rotateY(0deg) translateY(0px);
        }
      }
      /*div.sign-img placeholder for image to pull from API*/
      & .sign-img {
        background-color: $charcoal-35;
        border-radius: 38px;
        box-shadow: $shadow-1;
        width: 300px;
        height: 300px;
        background-image: url("./assets/botw-star.png");
        background-size: cover;
        overflow: hidden;
        align-self: center;
        box-shadow: $shadow-2;
      }

      & h2,
      h3 {
        font-family: $font-syne;
        text-align: center;
        margin-top: 0;
      }
    }
  }
  /*final bracket for main*/
}
</style>
