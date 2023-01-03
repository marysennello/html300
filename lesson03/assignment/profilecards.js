// Code that requires the DOM be loaded should not be run until the DOM is loaded
document.addEventListener("DOMContentLoaded", function() {

      //JSON informationconst
      profilesJSON = '[  {    "name": "Paolo Maldini",    "jobTitle": "Front End Developer",    "company": "Web Weavers",    "experience": "3 years",    "school": "University of Washington",    "major": "Marketing",    "email": "paolo@example.com",    "linkedInUrl": "paolo.linkedinprofile.com",    "codeLanguages": [      " HTML", " CSS", " JavaScript", " Node", " Express"    ]  },  {    "name": "Barbara Bonansea",    "jobTitle": "Software Engineer",    "company": "Excellence in the Cloud",    "experience": "12 years",    "school": "University of Southern California",    "major": "Computer Science",    "email": "barbara@example.com",    "linkedInUrl": "barbara.linkedinprofile.com",    "codeLanguages": [" HTML", " JavaScript", " C", " Go"    ]  },  {    "name": "Javier Hernandez",    "jobTitle": "User Experience Engineer",    "company": "Web Sites and More",    "experience": "5 years",    "school": "Seattle University",    "major": "Performing Arts",    "email": "javier@example.com",    "linkedInUrl": "javier.linkedinprofile.com",    "codeLanguages": [ " HTML", " CSS" ]  },  {    "name": "Maribel Dominguez",    "jobTitle": "Front End Engineer",    "company": "Bits and Bytes",    "experience": "6 years",    "school": "University of Washington",    "major": "Mechanical Engineering",    "email": "maribel@example.com",    "linkedInUrl": "maribel.linkedinprofile.com",    "codeLanguages": [ "HTML", " CSS", " JavaScript",      " React", " Vue", " Redux"]  }]'
      const profiles = JSON.parse(profilesJSON);

      //where to put the cards:
      const cardSection = document.querySelector('section')


      //NEED: div.card-container, div.left, div.right, img.profile-img, h2, p.caption, span.bold, p
      profiles.forEach(function(el) {

        //card container for each
        let cardContainer = document.createElement('div');
        cardContainer.classList.add('card-container');

      //left side of card
        let leftSide = document.createElement('div');
        leftSide.classList.add('left');

        //prof img
        let profileImg = document.createElement('img');
        profileImg.classList.add('profile-img');
        profileImg.src = ('img/headshot.jpg')

        //name
        let name = document.createElement('h2');
        name.innerHTML = `${el.name}`

        //caption/ title
        let title = document.createElement('p');
        title.classList.add('caption');
        title.innerHTML = `${el.jobTitle}`

      //right side of card
      let rightSide = document.createElement('div');
      rightSide.classList.add('right');

      //profile info
      let info = document.createElement('ul')
      info.innerHTML = `
      <li><span class="bold">Company: </span> ${el.company}</li>
      <li><span class="bold">Experience: </span> ${el.experience}</li>
      <li><span class="bold">School: </span> ${el.school}</li>
      <li><span class="bold">Major: </span> ${el.major}</li>
      <li><span class="bold">Email: </span> ${el.email}</li>
      <li><span class="bold">Code Languages: </span>  ${el.codeLanguages}</li>
      `
      //linkedIn bug and links
      let networking = document.createElement('p')
      networking.innerHTML = `
      <img class="bug" src="img/linkedin.svg"> ${el.linkedInUrl}
      `
    //append all sections
        leftSide.append(profileImg, name, title);
        rightSide.append(info, networking);
        cardContainer.append(leftSide, rightSide);
        cardSection.append(cardContainer);
      })

      //final closing bracket
    })
