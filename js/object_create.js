//Object of protos
const booksProtos = {
    getSummery: function () {
        return `${this.title} was written by ${this.author} in ${this.year}`;

    },
    getAge: function () {

        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
    }
}

//create object // thats one way of doing it 
const book1 = Object.create(booksProtos);
book1.title = "Meditation";
book1.author = "marcus aurelius";
book1.year = "235 B.C";
console.log(book1);

//another way of doing it
const book2 = Object.create(booksProtos, {
    title: { value: "Atomic Habits" },
    author: { value: "James Clear" },
    year: { value: "2018" }
});
console.log(book2);