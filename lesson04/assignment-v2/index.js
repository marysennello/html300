document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM is READY, javascript a go")
//PLAN
//click on a sign (li.2 with in a li.1>ul.2), amend ul.1 with a li.1 containing text of li.2 selected
//plan - define sign list elements as variables
//add event listener to run function which will find text of li clicked and amend li after grand-parent??

  //dropdowns to select sign
  let signsToClick = document.querySelectorAll('.sign li');
  let signSelect = document.querySelectorAll('.sign-select');

  //h2 of sign blocks in results container
  let sunSign = document.getElementById('sunSign');
  let moonSign = document.getElementById('moonSign');
  let risingSign = document.getElementById('risingSign');

  //buttons to calculate results/reset section:
  let calculateButton = document.querySelector('.calculate');
  let resetButton = document.querySelector('.resetCalculate');
  let natalButton = document.querySelector('.natalChart');

  //misc sections
  let header = document.getElementById('header');
  let resultsContainer = document.getElementById('resultsContainer');

//scroll shrinks HEADER
  window.onscroll = function() {stickyHeader()};
  let sticky = (header.offsetTop);
  function stickyHeader() {
    if (window.pageYOffset > (sticky+20)) {
      header.classList.add('sticky');
      header.classList.remove('unstick');
    }else if (window.pageYOffset <= sticky+20) {
      header.classList.remove('sticky');
      header.classList.add('unstick')
    }
    //else {
    //    let unstick = (header.offsetTop)
    //    header.classList.add('unstick')
    //}
  }


  //event listener for clicking on a sign will reveal li element with sign name, and update the results section titles
    for (let i = 0; i < signsToClick.length; i++){
      let signClicked = signsToClick[i];
      signClicked.addEventListener('click', populateSign)
      //click reveals li with sign clicked
      function populateSign(){
        let blankSign = signClicked.parentElement.parentElement.nextElementSibling;
        blankSign.textContent = signClicked.innerHTML
        blankSign.classList.remove('sign-chosen-hidden');
        blankSign.classList.add('sign-chosen');
      }
      //h2 in results sections update

    }

  //reveal results section
    let calculateClicked = calculateButton.addEventListener('click', showResults)

    function showResults(){

      resultsContainer.classList.add('container');
      resultsContainer.classList.remove('sign-chosen-hidden');
      //hide buttons and reveal reset button
      resetButton.classList.remove('hidden');
      calculateButton.classList.add('hidden');
      natalButton.classList.add('hidden');
    }

    //reset - remove results section and add back buttons
    let resetClicked = resetButton.addEventListener('click', hideResults)
    let chosenSigns = document.querySelectorAll('.sign')
    function hideResults(){
      resultsContainer.classList.remove('container');
      resultsContainer.classList.add('sign-chosen-hidden');
      //hide reset button and reveal other buttons
      resetButton.classList.add('hidden');
      calculateButton.classList.remove('hidden');
      natalButton.classList.remove('hidden');
      //reset sign choices
      for (let i = 0; i < chosenSigns.length; i++){
          let resetSign = chosenSigns[i].parentElement.nextElementSibling;
          resetSign.classList.remove('sign-chosen')
          resetSign.classList.add('sign-chosen-hidden')
      }
    }

  //update results Section


//end brackets
})
// notes -

//results appear when a sign is selected....s o if sun sign's 2nd li is filled with text, the result for sun will appear with sun sign listed, result(?) etc....


//--add selector boxes to see categories??? weapons, monsters, etc.
