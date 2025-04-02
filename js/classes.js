
//fundamentals of classes
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }

    getage() {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
    }

    revise(newYear) {
        this.year = newYear;
        this.revised = true;
    }

    static topBookStore() {
        return "Amazon";
    }
}

//instantiate an object
const book1 = new Book("Infinity and beyond", "Neil Tyson", 2022);

console.log(book1);
console.log(Book.topBookStore());