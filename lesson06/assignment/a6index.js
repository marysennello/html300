$( document ).ready(function() {
    console.log( "ready!" );

// console.log(accordion);

let regions = [
  {
    name : "Akkala",
    img : "images/botw-akkala.png",
    idCard : "akkalaHeading",
    idCollapse : "akkalaCollapse",
    dataTarget : "#akkalaCollapse",
    text : "test 123",
    start: "true",
    subRegions: "Akkala Highlands, Akkala Sea, and Deep Akkala"
  },
  {
    name : "Central Hyrule",
    img : "images/botw-centralhyrule.png",
    idCard : "centralHyruleHeading",
    idCollapse : "centralHyruleCollapse",
    dataTarget : "#centralHyruleCollapse",
    text : "test 123",
    start: "false",
    subRegions: "Great Hyrule Forest, Great Plateau, Hyrule Field, and Hyrule Ridge"
  },
  {
    name : "Eldin",
    img : "images/botw-eldin.png",
    idCard : "eldinHeading",
    idCollapse : "eldinCollapse",
    dataTarget : "#eldinCollapse",
    text : "test 123",
    start: "false",
    subRegions: "Death Mountain, Eldin Canyon, and Eldin Mountains"
  },
  {
    name : "Faron",
    img : "images/botw-faron.png",
    idCard : "faronHeading",
    idCollapse : "faronCollapse",
    dataTarget : "#faronCollapse",
    text : "test 123",
    start: "false",
    subRegions: "There are no recognized subregions of Faron"
  },
  {
    name : "Gerudo",
    img : "images/botw-gerudo.png",
    idCard : "gerudoHeading",
    idCollapse : "gerudoCollapse",
    dataTarget : "#gerudoCollapse",
    text : "test 123",
    start: "false",
    subRegions: "Gerudo Desert and Gerudo Highlands"
  },
  {
    name : "Hebra",
    img : "images/botw-hebra.png",
    idCard : "hebraHeading",
    idCollapse : "hebraCollapse",
    dataTarget : "#hebraCollapse",
    text : "test 123",
    start: "false",
    subRegions: "Hebra Mountains and Tabantha Frontier"
  },
  {
    name : "Lanayru",
    img : "images/botw-lanayru.png",
    idCard : "lanayruHeading",
    idCollapse : "lanayruCollapse",
    dataTarget : "#lanayruCollapse",
    text : "test 123",
    start: "false",
    subRegions: "Lanayru Great Spring, Lanayru Sea, Lanayru Wetlands, Mount Lanayru, and Shatterback Point"
  },
  {
    name : "Necluda",
    img : "images/botw-necluda.png",
    idCard : "necludaHeading",
    idCollapse : "necludaCollapse",
    dataTarget : "#necludaCollapse",
    text : "test 123",
    start: "false",
    subRegions: "East Necluda, Necluda Sea, and West Necluda "
  }
];
//need:
//div.accordion#accordionHyrule
//   div.card
//    div.card-header#id
//      h2.mb-0
//        button.btn.btn-link
//div.collapse.show#id, arialabelledby#idcard, dataparent
//  div.card-body
//  inner text


//defining main section, creating Accordion div and appending to Main.
const mainSection = document.querySelector('main');

const accordion = document.createElement('div');
accordion.classList.add('accordion');
accordion.setAttribute('id', 'accordionHyrule');
mainSection.appendChild(accordion);

//make accordion section for each region
regions.forEach(regions => {

  //create div.card and append to accordion
  const card = document.createElement('div');
  card.classList.add('card', 'accordion-item');
  accordion.appendChild(card);

  //create div.card-header#id
  const cardHeader = document.createElement('div');
  cardHeader.classList.add('card-header');
  cardHeader.setAttribute('id', regions.idCard)
  card.appendChild(cardHeader);

  //title of region in div.card-header
  const h2 = document.createElement('h2');
  //h2.textContent = regions.name;
  h2.classList.add('mb-0');
  console.log(h2);
  cardHeader.appendChild(h2);

  //button for collapsing
  const button = document.createElement('button');
  button.classList.add('btn', 'btn-link');
  button.setAttribute('type', 'button');
  button.setAttribute('data-bs-toggle', 'collapse');
  button.setAttribute('data-bs-target', regions.dataTarget);
  button.setAttribute('aria-expanded', regions.start);
  button.setAttribute('aria-target', regions.idCollapse);
  button.textContent = regions.name;
  h2.appendChild(button);

//create div box that collapses
  const collapseShow = document.createElement('div');
  collapseShow.setAttribute('id', regions.idCollapse);
  collapseShow.classList.add('collapse');
  collapseShow.setAttribute('aria-labelledby', regions.idCard);
  collapseShow.setAttribute('data-bs-parent', '#accordionHyrule');
  accordion.appendChild(collapseShow);

  //div of opened card body
  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');
  cardBody.textContent = regions.subRegions;
  collapseShow.appendChild(cardBody);

  //add image to card body
      const img = document.createElement('img');
    img.src = regions.img;
    img.setAttribute('alt', 'area image');
    img.classList.add('img-fluid')
    cardBody.appendChild(img)

})
//end of for each loop

const firstItem = document.getElementById('akkalaCollapse');
firstItem.setAttribute('aria-expanded', 'true');
//END
})
