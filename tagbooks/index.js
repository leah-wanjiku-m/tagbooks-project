document.addEventListener("DOMContentLoaded", function(){
    //getbooks();
});
// function getbooks(){
//     fetch("https://www.googleapis.com/books/v1/volumes?q=javascript&key=AIzaSyAxz_bHZoMfBLyLyEk7PEL9Ygeg3Kw2IyM")
//     .then((response)=>response.json)
//     .then(vitabu);
// }
// function vitabu(books){
//     books.forEach(inputdetails);
// }
// create a input form for details
    const dc = document.querySelector("#forms");
    const form = document.createElement("form");
    dc.appendChild(form);
//  creating titleinput
   const titleInput = document.createElement("input");
    titleInput.type="text";
    titleInput.name="title";
    titleInput.placeholder="enter title";
    titleInput.id ="formInput";
    form.appendChild(titleInput);
//  creating author input
    const authorInput = document.createElement("input");
    authorInput.type="text";
    authorInput.name = "author";
    authorInput.placeholder="enter author";
    authorInput.id="formInput";
    form.appendChild(authorInput);
    document.body.appendChild(form);
//create a add me button
const but =document.querySelector("#forms");
const btn =document.createElement("button");
btn.id ="btns"
btn.innerHTML ="ADD BOOK";
but.appendChild(btn);




