const GITHUB_URL = "https://api.github.com/users/aytan-cohen";

fetch(GITHUB_URL)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    const profileImage = document.getElementById("profile-image");
    profileImage.src = data.avatar_url;
  });

  var indexCard = document.getElementById("index-card");

  indexCard.addEventListener("mouseover", function() {
    indexCard.style.maxWidth
  })

  indexCard.addEventListener("mouseout", function(){

  })

const languages = ['HTML', 'CSS', 'JavaScript']
let footerString = 'This page was created with' 

  for(let i=0; i<languages.length; i++){
    let x = languages[i];
    footerString = footerString + " " + x
  }

  // This page was created with HTML CSS JavaScript