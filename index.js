/***** Beginning of Starter Code ****/

const playerContainer = document.querySelector(".player-container")

// render one player to the DOM
function renderPlayer(player) {
  // create an element for the outer div
  const playerDiv = document.createElement("div")

  // set attributes on the outer div
  playerDiv.className = "player"
  playerDiv.dataset.number = player.number

  // use innerHTML to create any child elements of the div
  playerDiv.innerHTML = `
    <h3>${player.name} (<em>${player.nickname}</em>)</h3>
    <img src="${player.photo}" alt="${player.name}">
    <p class="likes">${player.likes} likes</p>
    <button class="like-button">❤️</button>
  `

  // append the element to the container
  playerContainer.append(playerDiv)
}

// for each player in the array, render to the DOM
PLAYERS.forEach(renderPlayer)

/***** End of Starter Code ****/




/***** Deliverable 1 *****/
function toggleColor(element) {
  if (element.style.color === "red") {
    element.style.color = "black"
  } else {
    element.style.color = "red"
  }
}

const header = document.querySelector("h1#header");
header.addEventListener('click', function(){
  toggleColor(this);
});


/***** Deliverable 2 *****/
const newPlayer = document.querySelector("#new-player-form");

newPlayer.addEventListener('submit', function(e){
  e.preventDefault()

  // const newPlayer = {
  //   number: e.target.number.value,
  //   name: e.target.name.value,
  //   nickname: e.target.nickname.value,
  //   photo: e.target.photo.value,
  //   likes: 0
  // }
  
  console.log(e.target);
  let newPlayer1 = {};
  newPlayer1["number"] = e.target.number.value;
  newPlayer1["name"] = e.target.name.value;
  newPlayer1["nickname"] = e.target.nickname.value;
  newPlayer1["photo"] = e.target.photo.value;
  
  renderPlayer(newPlayer1);
});



/***** Deliverable 3 *****/
document.querySelector('.player-container').addEventListener('click', e => {
  if(e.target.matches(".like-button")) {
    const playerDiv = e.target.closest(".player");
    const likesP = playerDiv.querySelector(".likes");
    const newLikes = parseInt(likesP.textContent) + 1;
    likesP.textContent = `${newLikes} likes`;
  }
})
