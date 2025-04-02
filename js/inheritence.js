function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;//this is a property
}
//getSummary
Book.prototype.getSummary = function () { //function as a property, its stored in the prototype
    return `${this.title} was written by ${this.author} in ${this.year}`;
}


function Magazine(title, author, year, month) {
    Book.call(this, title, author, year);
    this.month = month;//this is a property

}

//inherit prototype
Magazine.prototype = Object.create(Book.prototype);

//instantiate magazine object
const mag1 = new Magazine("MagOne", "John Doe", 2018, "Jan");

//use Magazine constructor
Magazine.prototype.constructor = Magazine;
console.log(mag1);

console.log(mag1.getSummary());  