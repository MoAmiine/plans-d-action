// exercice 1
// console.log(localStorage);
// localStorage.setItem("name", "Ali")
// localStorage.getItem("name")

// exercice 2
localStorage.setItem("name", "Ali")
console.log(localStorage.getItem("name"))
console.log()
localStorage.removeItem("name")
for (let i = 0; i < localStorage.length; i++) {
    console.log(localStorage.key(i))
}


