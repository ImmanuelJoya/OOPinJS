console.log("object oriented programming in js");

// const s = "Hello"
// console.log(s.toUpperCase());
// console.log(typeof s);

// const s1 = new String("Hello")
// console.log(typeof s1);

// console.log(window);
// window.alert("Hello");
// alert("Hello");

// Object literals

const book = {
    title: "cant stop me",
    author: "David Goggins",
    year: 2020,
    getSummary: function () { //function as a property
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}
console.log(book.getSummary());
console.log(Object.values(book));
console.log(Object.keys(book));


