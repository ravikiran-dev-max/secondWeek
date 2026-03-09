class Book {
  constructor(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
    this.isAvailable = true
  }
  borrow() {
    if (this.isAvailable) {
      this.isAvailable = false;
      console.log(`${this.title} has taken.`);
    } else {
      console.log(`${this.title} is not available.`);
    }
  }

  returnBook() {
    if(this.isAvailable==true){
    console.log(`${this.title} has been returned.`);
    }
  }
  getInfo() {
    return `${this.title} by ${this.author} (${this.pages} pages)`;
  }

isLongBook() {
 return this.pages>300
}
}
let book1 = new Book("Harry Potter", "J.K. Rowling", 350);
let book2 = new Book("BOOK2", "Authour2", 328);
let book3 = new Book("BOOK3", "Authour3", 310);
let book4 = new Book("BOOK4", "Authour4", 277);
let book5 = new Book("BOOK5", "Authour5", 281);

let library = [book1, book2, book3, book4, book5];
console.log("___________________________________________________________")
console.log("Books In library:");
console.log(library)
book1.borrow();
book3.borrow();
console.log("__________________________________________________________")
console.log("Availability after borrowing:");
library.filter(book =>{ if(book.isAvailable){
 console.log(book,"The Book Available")
}
else{
  console.log(book,"The is not Available ")
}})
book3.returnBook();
console.log("_______________________________________________________________________")
console.log("Availability after returning:");
library.filter((book)=>{
  if(book.isAvailable){
  console.log("Available")
}
else{
  console.log("NOT Availabale")
}
});
console.log("________________________________________________________________________")
console.log("Long bOOks Count : ")
let count=0
for(let i=0;i<library.length;i++)
{
  if(library[i].isLongBook()){
    count++
  }
}
console.log(`Number of long books: ${count}`);
console.log("__________________________________________________________________")
console.log("Available Books:");
console.log("_______________________________________________________________")
library.filter(book => {if(book.isAvailable==true)
{
    console.log(book.getInfo())
}
});
console.log("_______________________________________________________________________")