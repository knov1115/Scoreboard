let counterHome = document.getElementById("counter-home")
let counterGuest = document.getElementById("counter-guest")
let countHome = 0
let countGuest = 0

function increment1() {
    countHome += 1
    counterHome.innerText = countHome
}
function increment2() {
    countHome += 2
    counterHome.innerText = countHome
}
function increment3() {
    countHome += 3
    counterHome.innerText = countHome
}
function incrementGuest1() {
    countGuest += 1
    counterGuest.innerText = countGuest
}
function incrementGuest2() {
    countGuest += 2
    counterGuest.innerText = countGuest
}
function incrementGuest3() {
    countGuest += 3
    counterGuest.innerText = countGuest
}