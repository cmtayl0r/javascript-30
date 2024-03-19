// -----------------------------------------------------------------------------
// Map method
// -----------------------------------------------------------------------------

// ------ Challenge 1

const tempC = [0, 20, 30, 40];

const tempF = tempC.map(temp => {
    const fahrenheit = (temp * 9) / 5 + 32;
    return fahrenheit;
});

// console.log(tempF);
// [32, 68, 86, 104]

// ------ Challenge 2

const names = ['aliCe', 'bO', 'charLie', 'daVid', 'aNNa'];

const namesCap = names.map(name => {
    // lowercase everything
    const newName = name.toLowerCase();
    // Capitalise first letter
    return newName.replace(newName[0], newName[0].toUpperCase());
});

// console.log(namesCap);
// ["Alice", "Bob", "Charlie", "David"]

// -----------------------------------------------------------------------------
// Reduce method
// -----------------------------------------------------------------------------

// ------ Challenge 1

const squares = [1, 2, 3, 4];

const squaresSum = squares.reduce((total, num) => {
    return total + num ** 2;
}, 0);

// console.log(squaresSum);

// ------ Challenge 2

const fruit = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

const fruitSum = fruit.reduce((obj, item) => {
    // obj = accumulated value so far
    // item = current element being processed (array item string)
    // Initial value is an empty object {}

    // If current item NOT already property of obj, create new property and start at 0
    if (!obj[item]) {
        obj[item] = 0;
    }
    // increment obj by 1
    obj[item]++;
    return obj;
}, {});

// console.log(fruitSum);

// -----------------------------------------------------------------------------
// Sort method
// -----------------------------------------------------------------------------

// ------ Challenge 1

const fruit2 = ['banana', 'pie', 'apple', 'fritter', 'orange'];

const fruitSort = fruit2.sort((a, b) => {
    // return a.length > b.length ? 1 : -1;

    if (a.length === b.length) {
        return 1; // if same, maintain position
    } else if (a.length > b.length) {
        return 1;
    } else {
        return -1;
    }
});

// console.log(fruitSort);

// ------ Challenge 2

const numbers = [10, -1, 20, 3, -2, 0];

const numSort = numbers.sort((a, b) => {
    return a > b ? -1 : 1;
});

// console.log(numSort);

// -----------------------------------------------------------------------------
// Filter method
// -----------------------------------------------------------------------------

const nummers = [1, 2, 3, 4, 5, 6];

// ------ Challenge 1

const numFilter = nummers.filter(num => {
    if (num !== 3) return true;
});

// console.log(numFilter);

// ------ Challenge 2

const evenFilter = nummers.filter(num => {
    if (num % 2 === 0) return true;
});

// console.log(evenFilter);

// const isEven = n => n % 2 === 0;

// -----------------------------------------------------------------------------
// Integrated challenge #1
// -----------------------------------------------------------------------------

const students = [
    { name: 'Alice', grades: [90, 95, 100] },
    { name: 'Bob', grades: [70, 85, 80] },
    { name: 'Charlie', grades: [100, 100, 100] },
];

const avgGrade = students.map(({ name, grades }) => {
    // Loop through each student's grades and calculate average
    // a = accumulator, b = current value, 0 = initial value
    const averageGrade = (
        grades.reduce((a, b) => a + b, 0) / grades.length
    ).toFixed(0);
    return { name, averageGrade };
});

// console.log(avgGrade);

// -----------------------------------------------------------------------------
// Integrated challenge #2
// -----------------------------------------------------------------------------

const products = [
    { name: 'Laptop', category: 'Electronics', price: 1000 },
    { name: 'Coffee Maker', category: 'Appliances', price: 80 },
    { name: 'Book', category: 'Entertainment', price: 15 },
    { name: 'Smartphone', category: 'Electronics', price: 500 },
    { name: 'Frying Pan', category: 'Appliances', price: 40 },
];

const highProducts = products
    .filter(({ price }) => price >= 100) // filter products with price >= 100
    .sort((a, b) => a.price - b.price) // sort products by price a = current, b = next
    .map(({ name }) => name); // map products to get  only the name, create new array

// console.log(highProducts);

// -----------------------------------------------------------------------------
// Integrated challenge #3
// -----------------------------------------------------------------------------

const stock = [
    { category: 'Electronics', inStock: true, price: 299.99 },
    { category: 'Electronics', inStock: false, price: 199.99 },
    { category: 'Clothing', inStock: true, price: 19.99 },
    { category: 'Clothing', inStock: true, price: 29.99 },
    { category: 'Electronics', inStock: true, price: 399.99 },
];

// -----------------------------------------------------------------------------
// Integrated challenge #4
// -----------------------------------------------------------------------------

const transactions = [
    { userId: 1, amount: 50, category: 'Food' },
    { userId: 2, amount: 20, category: 'Clothing' },
    { userId: 1, amount: 70, category: 'Food' },
    { userId: 3, amount: 30, category: 'Food' },
    { userId: 2, amount: 80, category: 'Food' },
    { userId: 3, amount: 120, category: 'Electronics' },
];
