document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM is READY, javascript a go")

//click on a sign (li.2 with in a li.1>ul.2), amend ul.1 with a li.1 containing text of li.2 selected
//plan - define sign list elements as variables
//add event listener to run function which will find text of li clicked and amend li after grand-parent??

  //dropdowns to select sign
  let signsToClick = document.querySelectorAll('.sign li');
  let signSelect = document.querySelectorAll('.sign-select');

  //sign blocks in container
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
    if (window.pageYOffset > (sticky+5)) {
      header.classList.add('sticky');
      header.classList.remove('unstick');
    }else if (window.pageYOffset <= sticky+5) {
      header.classList.remove('sticky');
      header.classList.add('unstick')
    } else {
        let unstick = (header.offsetTop)
        header.classList.add('unstick')
    }
  }
//scroll-up grows Header


  //event listener for clicking on a sign will reveal li element with sign name
    for (let i = 0; i < signsToClick.length; i++){
      let signClicked = signsToClick[i];
      signClicked.addEventListener('click', populateSign)

      function populateSign(){
        let blankSign = signClicked.parentElement.parentElement.nextElementSibling;
        blankSign.textContent = signClicked.innerHTML
        blankSign.classList.remove('sign-chosen-hidden');
        blankSign.classList.add('sign-chosen');
      }
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

    //reset
    let resetClicked = resetButton.addEventListener('click', hideResults)

    function hideResults(){
      resultsContainer.classList.remove('container');
      resultsContainer.classList.add('sign-chosen-hidden');
      //hide buttons and reveal reset button
      resetButton.classList.add('hidden');
      calculateButton.classList.remove('hidden');
      natalButton.classList.remove('hidden');
    }


  //update results Section


//end brackets
})
// notes -

//results appear when a sign is selected....s o if sun sign's 2nd li is filled with text, the result for sun will appear with sun sign listed, result(?) etc....

//--add animation for when sign appears in box

//--add selector boxes to see categories??? weapons, monsters, etc.
