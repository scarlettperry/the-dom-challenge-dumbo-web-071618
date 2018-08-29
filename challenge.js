//our queries
const counter = document.getElementById("counter")
const plus_id = document.getElementById("+")
const minus_id = document.getElementById("-")
const likes = document.querySelector('.likes')
const heart = document.getElementById("<3")
const pause_button = document.getElementById("pause")

//our listeners
counter.addEventListener("DOMContentLoaded", increment(counter))
plus_id.addEventListener("click", plus)
minus_id.addEventListener("click", minus)
heart.addEventListener("click", liked )
pause_button.addEventListener('click', pause_game)

//helper functions
function increment(counter) {
  // console.log(pause_button.innerText === "resume");
  // if (pause_button.innerText === "pause"){
  setInterval(function(){
    if(pause_button.innerText === "pause"){
      counter.innerText = parseInt(counter.innerText) +1}},1000)
}


function plus() {
  counter.innerText = `${parseInt(counter.innerText) +1}`
}

function minus() {
  counter.innerText = `${parseInt(counter.innerText) -1}`
}

function liked(){
  let a_like = document.createElement("p")
  a_like.innerText = `${counter.innerText} has been liked!`
  likes.append(a_like)
}

function pause_game(){
  if (pause_button.innerText === "pause"){
  pause_button.innerText = "resume"
  } else {
    pause_button.innerText = "pause"
  }
}


// function liked(){
//   let a_like
//   a_like.id = (`${counter.innerText}`)
//   let like_counter = 0
//   if (!!a_like.id) {
//     like_counter ++
//   }
//   else {
//     a_like = document.createElement("p")
//     a_like.id = (`${counter.innerText}`)
//   }
//   a_like.innerText = `${counter.innerText} has been liked! ${like_counter} time(s)`
//   likes.append(a_like)
// }
