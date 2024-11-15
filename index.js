let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let sumEl = document.getElementById("sum-el")

let count = 0
let totalSum = 0 // intialization total sum
function increment() {
    count += 1
    countEl.textContent = count
    
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    totalSum += count // update total sum with current count
    sumEl.textContent = "Total: " + totalSum; //Display the tptal sum
    countEl.textContent = 0
    count = 0
    
}

