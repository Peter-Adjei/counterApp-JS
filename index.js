// document.getElementById("count").innerText = 5

// let count = 5
// count = count + 1
// console.log(count)

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count


let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function increment() {
    count +=  1
    countEl.textContent = count
    document.getElementById("count").innerText = count
    console.log(count)
}


function save(){
    let countStr = count + "-"
    console.log(count)
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
save()


// let welcomeEl = document.getElementById("welcome-el")
// let name = "Peter"
// let greeting = "Hope all is well "

// welcomeEl.innerText = greeting + name 
// welcomeEl.innerText +=  "😊"









