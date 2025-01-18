function createCounter() {
    let count = 0;

    return function () {
        
        console.log('Student Name: chanmey')
        console.log('Id : 102')

        count++; 
        return count;
    }
}

const counter = createCounter();

console.log(counter());
console.log(counter());
console.log(counter());