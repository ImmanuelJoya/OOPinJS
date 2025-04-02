// prototypes


//Instantiate an object
const book1 = new Book("Start With Why", "Simon Sinek", 2011);
const book2 = new Book("Atomic Habits", "James Clear", 2018);
const book3 = new Book("10 Rules for Life", "Jordan Peterson", 2018);

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;//this is a property
}
//getSummary
Book.prototype.getSummary = function () { //function as a property, its stored in the prototype
    return `${this.title} was written by ${this.author} in ${this.year}`;
}

//GetAge 
Book.prototype.getAge = function () {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
}

//revise / change year
Book.prototype.revise = function (newYear) {
    this.year = newYear;
    this.revised = true;
}
console.log(book1);
book1.revise(2022);
console.log(book1);


// console.log(book1.getSummary()); //if u view it on the browser the getSummary ought to be in the prototype 
// console.log(book1);

// console.log(book3.getAge());