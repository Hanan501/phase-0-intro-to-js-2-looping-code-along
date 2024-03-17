// Code your solutions in this file
function wrapGifts(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`Wrapped ${array[0]} and added a bow!`);
        
    }
}



function writeCards(array, event){
    let newarray = [];
    for (let i = 0; i < array.length; i++) {
        newarray.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
    }
    return newarray;
}

console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"))




function countDown(num) {
    while (num >= 0) {
        console.log(num);
        num--;
    }
}

// countDown(10);