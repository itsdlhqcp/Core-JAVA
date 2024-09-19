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

book1984.forEach((item)=>console.log(item.title)) 

const bp = book.find((item) => item.publisher.location.toLowerCase() === 'newyork')
console.log(bp) 


const b190 = books.filter(book => book.yearPublished  < 1900);
console.log(b190)

const tR = books.reduce((total, book) => total + book.price);
console.log(tR) 

const book1984 = books.filter(book => book.yearPublished = 1984)
console.log(book1984)