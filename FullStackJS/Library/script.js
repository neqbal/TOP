const book_list = [];
let i=0;

function book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages=pages;
    this.read=read;
}


const add_btn_btn = document.querySelector(".add-btn-btn");
const dialog = document.querySelector(".add-book-info-form");
const book_name = document.querySelector(".input-name");
const author_name = document.querySelector(".input-author");
const pages = document.querySelector(".input-pages");
const read = document.querySelector(".input-read");
const submit_btn = document.querySelector(".submit-btn-btn");
const cancel_btn = document.querySelector(".cancel-btn-btn");
const tbody = document.querySelector("tbody");

add_btn_btn.addEventListener('click', () => {
    dialog.showModal();
} );

cancel_btn.addEventListener('click', () => {
    dialog.close();
});

submit_btn.addEventListener('click', () => {
    dialog.close();
    create_table();
});

function create_table() {
    let b = new book(book_name.value, author_name.value, pages.value, read.checked);
    book_list.push(b);

    const tr=document.createElement("tr");
    tr.setAttribute("class", book_list[i].name);

    const td_book_name=document.createElement("td");
    const td_auth_name=document.createElement("td");
    const td_page=document.createElement("td");
    const td_read=document.createElement("td");

    const read_check=document.createElement("button");
    read_check.setAttribute("class" ,"read-check-btn");

    read_check.addEventListener('click', change_read_status(this));

    td_book_name.innerHTML=book_list[i].name;
    td_auth_name.innerHTML=book_list[i].author;
    td_page.innerHTML=book_list[i].pages;

    if(book_list[i].read === true) {
        tr.style.backgroundColor="green";
    }

    tr.appendChild(td_book_name);
    tr.appendChild(td_auth_name);
    tr.appendChild(td_page);

    td_read.appendChild(read_check);

    tr.appendChild(td_read);

    tbody.appendChild(tr);
    i++;
}

function change_read_status(read_check) {
    read_check.style.backgroundColor="red";
}