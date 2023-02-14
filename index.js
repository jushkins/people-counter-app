// document.getElementById("count-el").innerText = 10

// function mon() {
//     console.log(42);
// }

// mon()
// let lapsCompleted = 0
// function incrementLap() {
//     lapsCompleted = lapsCompleted + 1
// }

// incrementLap()
// incrementLap()
// incrementLap()
// incrementLap()

// console.log(lapsCompleted);
let saveEL = document.getElementById("save-el")
let countEL = document.getElementById("count-el")
let count = 0
function increment() {
    count += 1
    countEL.textContent = count 
 }

function save() {
    countStr = count + " - "
    saveEL.textContent += countStr
    countEL.textContent = 0
    count = 0
}
// ##################################
// let namee = "Jushkin"
// let greating = "Hi! My name is "

// let myGreating = greating + namee + "."
// console.log(myGreating);
// ###################################
