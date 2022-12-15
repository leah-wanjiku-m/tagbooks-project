document.addEventListener("DOMContentLoaded", function(){
    getbooks();
});
 function getbooks(){fetch("https://www.googleapis.com/books/v1/volumes?q={javascript}&key=AIzaSyAxz_bHZoMfBLyLyEk7PEL9Ygeg3Kw2IyM")
     .then((response)=> response.json())
     .then(vitabu); 
   
     }
     //creating a menu where user can view books
     function createMenuDetails(item){
        const menuBar= document.querySelector("#menubar");
        const ul = document.createElement("ul");
        const li= document.createElement("li");
        ul.innerHTML =item.title;
        ul.appendChild("li");
        menuBar.appendChild("ul")
        li.addEventListener("click",() => {
          details(item);
        });
     }
     //details of the sidebar
     function details(item){
      const cover=document.querySelector("#cover");
      const title= document.querySelector("#title");
      const author=document.querySelector("#author");
      cover.src=item.thumbnail;
      title.innerHTML =item.title;
      author.innerHTML =item.authors;
     }
//  //function vitabu(books){
//    //  books.forEach(inputdetails);
// // }
// // create a input form for details
//     const dc = document.querySelector("#forms");
//     const form = document.createElement("form");
//     dc.appendChild(form);
// //  creating titleinput
//    const titleInput = document.createElement("input");
//     titleInput.type="text";
//     titleInput.name="title";
//     titleInput.placeholder="enter title";
//     titleInput.id ="formInput";
//     form.appendChild(titleInput);
// //  creating author input
//     const authorInput = document.createElement("input");
//     authorInput.type="text";
//     authorInput.name = "author";
//     authorInput.placeholder="enter author";
//     authorInput.id="input";
//     form.appendChild(authorInput);
//     document.body.appendChild(form);
//     form.addEventListener("submit",(e) =>{
//         e.preventDefault();
//     });
// //create a add me button
// const but =document.querySelector("#forms");
// const btn =document.createElement("button");
// btn.id ="btns"
// btn.innerHTML ="ADD BOOK";
// but.appendChild(btn);
// //add an event listener
// //btn.addEventListener("click",vitabu);
// //function vitabu(){
//  //const bookTitle = document.querySelector("#formInput")
//  //bookTitle.innerHTML = vitabu.title;  
// //}
// c




