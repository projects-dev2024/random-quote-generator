let quotes = [
"What we know is a drop. What we don't know is an ocean. - Isaac Newton ",
"Everything you can imagine is real. - Pablo Picasso  ",
"Be less curious about people and more curious about ideas. - Marie Curie ",
"You are your best thing. - Toni Morrison ",
"Always stand on principle, even if you stand alone. - John Adams ",
]
let generate = document.querySelector(".generate")
let screen = document.querySelector(".screen")

generate.addEventListener("click", () => {
    let chance = Math.floor(Math.random() * quotes.length)
    screen.textContent = quotes[chance]
})


//-------------------------------------------//Practice
// let numbers = [1,2,3,4,5,6,7,8,9,10]

// generate.addEventListener("click", () => {
// let numberChance = Math.floor(Math.random() * numbers.length)
// screen.textContent = numberChance
// })