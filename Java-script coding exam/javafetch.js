const books = [
    {
        id: 1 , title: "To kill a Mokingbird" , author: "Harper Lee" , genre: "Fiction", yearPublished: 1960 , price: 18.99, publisher: {name:"J.B. Lippincott & Co.",location:"Philadelphia"}
    },
    {
        id: 2 , title: "1984" , author:"George Orwell",genre: "Dystopian",yearPublished: 1949 , price: 15.99, publisher: {name: "Secker & Warburg",location:"London"}
    },
    {
        id: 3 , title: "The Great Gatsby" , author: "F. Scott Fitzgerald", genre: "Classic" ,yearPublished: 1925, price: 10.99, publisher: {name: "Charles Scribners Sons",location:"New York"}
    },
    {
        id: 4 , title: "Moby Dick" , author: "F.Scott Fitzgerland", genre: "Adventure" , yearPublished: 1851, price: 12.99, publisher: {name: "Harper & Brothers",location: "New york"}
    },
    {
        id: 5, title: "Pride and Predjudice", author: "Jane Austen", genre: "Romance" , yearPublished: 1813, price: 9.99, publisher: {name: "T. Egerton",location: "London"}
    }
]

// w. a .p to print all avilable books available 

books.forEach((item)=>console.log(item.title))
console.log('--------------------------')

// w. a .p to print details of book published in newyork

// Print details of the book published in New York
const bookPubNew = books.find((item) => item.publisher.location.toLowerCase() === "new york");
console.log(bookPubNew)

console.log('--------------------------')

// w .a .p to print the name of the book that published before 1900
const before1900Books = books.filter(book => book.yearPublished < 1900);
console.log(before1900Books)

// w. a. p to print details of book pub in 1984
console.log('--------------------------')
const book1984 = books.filter(book => book.yearPublished = 1984)
console.log(book1984)

// what will be revenue generated when all books are sold out
console.log('--------------------------')
const totalRevenue = books.reduce((total, book) => total + book.price);
console.log(`Total revenue generated when all books are sold: $${totalRevenue}`);











