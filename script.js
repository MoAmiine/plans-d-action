// exercice 1
// let tableau = ["amine", "mohamed", "omar", "aymane", "hamza"]
// console.log(tableau[0])
// console.log(tableau[tableau.length - 1])
// tableau[2] = "simo"

// exercice 2
// let tableau = ["amine", "omar", "hamza"]
// tableau.push("mohamed")
// tableau.unshift("aymen")
// tableau.shift()
// tableau.pop()

// exercice 3
let tableau = ["amine", "mohamed", "omar", "aymane", "hamza"]
tableau.forEach(e => (
    console.log(e)
))
let nombres = [1, 2, 3, 4, 5]
let sum = 0
for (let i = 0; i < nombres.length ; i++){
    sum += nombres[i]
}
let somme
nombres.forEach(e => (
    somme += nombres[e]
))

