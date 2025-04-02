//constructrs

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;//this is a property

    this.getSummary = function () {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}
//Instantiate an object
const book1 = new Book("Start With Why", "Simon Sinek", 2011);
const book2 = new Book("Atomic Habits", "James Clear", 2018);
const book3 = new Book("10 Rules for Life", "Jordan Peterson", 2018);
console.log(book1.getSummary());