let inputerror = document.querySelector('.alert-warning');
inputerror.style.display = 'none'
let inputsuccess = document.querySelector('.alert-success');
inputsuccess.style.display = 'none'
let inputdeleted = document.querySelector('.alert-danger');
inputdeleted.style.display = 'none'


class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class Store {
    constructor() {}
    static displayBooks() {
        const books = Store.getBooks();

        books.forEach(function(book){
            const ui = new UI();

            ui.addBookToList(book);
        });
    }
    static AddBook(book) {
        const books = Store.getBooks();

        books.push(book);

        localStorage.setItem('books', JSON.stringify(books));
    }
    static getBooks() {
        let books;
        if(JSON.parse(localStorage.getItem('books')) === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }
    static removeBook(isbn) {
        const books = Store.getBooks();
        books.forEach(function(book, i){
            if(book.isbn === isbn){
                books.splice(i, 1);
            }
        });

        localStorage.setItem('books', JSON.stringify(books));
    }
}

class UI {
    constructor() { }
    addBookToList(book) {
        let list = document.querySelector('#book-list');
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="delete-book text-white"><i class="delete-book fa fa-times"></i></a></td>
        `;
        list.appendChild(row);
    }
    deleteBookfromList(target){
        if(target.classList[0] === 'delete-book'){
            target.parentElement.parentElement.parentElement.remove();
        }
    }
}

document.addEventListener('DOMContentLoaded', Store.displayBooks());

document.querySelector('#book-input').addEventListener('submit', function(e){

    let title = document.querySelector('#title'),
        author = document.querySelector('#author'),
        isbn = document.querySelector('#isbn');

    if(title.value === '' || title.value === '' || title.value === ''){
        
        inputerror.style.display = 'block'
        
        setTimeout(function(){
            inputerror.style.display = 'none'
        }, 2000);

    } else {
        let book = new Book(title.value, author.value, isbn.value);
        let ui = new UI();
        ui.addBookToList(book);

        Store.AddBook(book);

        inputsuccess.style.display = 'block'
        
        setTimeout(function(){
            inputsuccess.style.display = 'none'
        }, 2000);

        title.value = '';
        author.value = '';
        isbn.value = '';
    }
    
    e.preventDefault();
});


document.querySelector('#book-list').addEventListener('click', function(e){

    let ui = new UI();
    
    ui.deleteBookfromList(e.target);

    Store.removeBook(e.target.parentElement.parentElement.previousElementSibling.textContent);

    inputdeleted.style.display = 'block'
        
    setTimeout(function(){
        inputdeleted.style.display = 'none'
    }, 2000);

    e.preventDefault();
});


