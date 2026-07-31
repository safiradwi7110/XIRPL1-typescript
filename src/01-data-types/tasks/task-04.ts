/**
 * 
 * The school library is building a digital catalog to help students search for books. 
 * Every book must store its ISBN number, title, author's name, total number of pages, 
 * book category, and whether the book is currently available for borrowing.
 * 
 * Task:
 * 1. Define a proper type for the book information.
 * 2. Implement a type that you defined on 3 books data.
 * 
 * display the book data using console.log.
 */


type Book = {
    isbn: string;
    title: string;

    author: string;
    totalPages: number;
    category: string;
    isAvailable: boolean;
};

const book1: Book = {
    isbn: "978-0-123456-47-2",
    title: "TypeScript Programming",
    author: "John Doe",
    totalPages: 400,
    category: "Programming",
    isAvailable: true
};

const book2: Book = {
    isbn: "978-0-987654-32-1",
    title: "Web Development Basics",
    author: "Jane Smith",
    totalPages: 300,
    category: "Web Development",
    isAvailable: false
};

const book3: Book = {
    isbn: "978-0-555555-55-5",
    title: "Data Structures and Algorithms",
    author: "Alice Johnson",
    totalPages: 500,
    category: "Computer Science",
    isAvailable: true
};

console.log("Book 1:", book1);
console.log("Book 2:", book2);
console.log("Book 3:", book3);




