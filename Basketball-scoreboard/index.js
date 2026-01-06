let homeScore = 0;
let guestScore = 0;

//connect the html to the js with the buttons
const homeScoreEl = document.getElementById("home-score");
const guestScoreEl = document.getElementById("guest-score");

//add points to home score
function addHome(points){
homeScore += points;
homeScoreEl.textContent = homeScore;

}

function addGuest(points){
guestScore += points;
guestScoreEl.textContent = guestScore;
}