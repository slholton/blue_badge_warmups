// For loop challenge

let foods = ['apple', 'orange', 'rice', 'bread', 'tofu']

for (let i = foods.length - 1; i > -1; i--){
    if (i % 2 == 1){
        let word = foods[i]
        let titleCasedWord = titleCase(word)
        console.log(`Foods[${i}]:` + titleCasedWord)
    }
}

function titleCase(word){
    let first_letter = word[0].toUpperCase()
    let rest = word.slice(1) 
    return first_letter + rest
}


// For..of loop challenge

foods = ['apple', 'orange', 'rice', 'bread', 'tofu']

let allergies = ['gluten', 'soy']

for (let food of foods){
    // assigns a string based on the function returning true / false
    let longWordResult = foodLengthCheck(food) ? "" : "not "

    // formatting the output
    let response = `${food} is ${longWordResult}a long word, and ${foodAllergyCheck(food).toLocaleLowerCase()} it with your allergies.`

    console.log(response)
}

function foodLengthCheck(food){
    return food.length > 4
}

function foodAllergyCheck(food){
    // Translates food to their underlying allergy
    allergyMap = {
        bread: "gluten",
        tofu: "soy"
    }

    // Checks to see if food is in the allergyMap
    let allergyLookup = allergyMap[food]

    // If it is and is one of their allergies
    if (allergies.includes(allergyLookup)) {
        return "You can't eat"
    } else { // Else
        return "You can eat"
    }
}

let cards = [2, 8, "K", 9, 10, 3, 4, "Q", 7, "J", 5, 6, "A"]
let faceCards = []
let numberedCards = []

while(cards.length > 0) {
    let card = cards.pop()
    if (isFaceCard(card)){
        faceCards.push(card)
    } else {
        numberedCards.push(card)
    }
}

console.log(cards)
console.log(faceCards)
console.log(numberedCards)

function isFaceCard(card){
    let result;
    switch(card){
        case "A":
        case "K":
        case "Q":
        case "J":
            result = true
            break
        default:
            result = false
            break
    }
    return result
}
