document.addEventListener("DOMContentLoaded", function(){
    getbooks();
});
function appendElement(element,id="dec"){
  const rootElement= document.getElementById(id);
  rootElement.append(element);
};
 function getbooks(){fetch("https://www.googleapis.com/books/v1/volumes?q={javascript}&key=AIzaSyAxz_bHZoMfBLyLyEk7PEL9Ygeg3Kw2IyM")
     .then((response)=> response.json())
     .then((data) => {
      for(let i=0;i<5;i++){
        let books= data.items[i];
        let thumbs=books.volumeInfo;
        let thumb= thumbs.imageLinks;
        console.log(books)
        let dr = createMenuDetails (books.kind,books.id, thumbs.title,thumb.thumbnail);
        appendElement(dr,"menubar")  
      }
     }
     )
   
     }
     //creating a menu where user can view books
     function createMenuDetails(kind,id,title,thumbnail){
        //const menuBar= document.querySelector("#menubar");
        const ul = document.createElement("div");
        const li= document.createElement("div");
        const bookind= document.createElement("p");
        const bookVolume=document.createElement("p");
        // image element
        const bookImage=document.createElement("img");
        bookImage.src = (thumbnail);


        bookind.innerHTML=(kind);
         const bookId= document.createElement("p");
         bookId.innerHTML=(id);
         bookId.style.color=("pink");
         bookVolume.innerHTML=(title);
         bookImage.src = (thumbnail);
        ul.appendChild(li);
        li.append(bookind);
        li.append(bookId);
        li.append(bookVolume);
        li.append(bookImage);
        return li
     }
     
     //creating  a form and adding an event listener
     function event(){
      let form =document.querySelector('bookform');
      form.addEventListener("submit", (e) =>{
        bookAdd(e.target.addFavourites.value);
        form.reset()
      })
     }
     function bookAdd(){
      let p=document.createElement("p");
      let btn=document.createElement("button");
      btn.addEventListener("click", handleDelete);
      btn.innerHTML='remove';
      p.innerHTML= ` ${ addFavourites} `
      p.appendChild(btn);
      console.log(p);
      document.querySelector('bookcontainer').appendChild(p);
     }
     function handleDelete(e){
      e.target.parentNode.remove()
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




