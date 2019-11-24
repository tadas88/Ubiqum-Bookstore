let listOfBooks = [];

fetch('https://api.myjson.com/bins/zyv02')
.then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    //console.log(JSON.stringify(myJson));
    listOfBooks = myJson.books;
    console.log(listOfBooks);
    createCard(listOfBooks);
    filterNames();
    updateLanguageName();
    changeLanguage();
    //createLanguageArray();
    //updateLanguage();
    //createSlides();
    //getLanguageButtons();
  });

function getAllInfoFromBooks(){
    let bookTitles = [];
    for (let i = 0; i < listOfBooks.length; i++) {
        bookTitles.push(listOfBooks[i]);
    }       
    return bookTitles;

}

function filterNames() {
    let input = document.getElementById('myInput').value;
    input = input.toLowerCase();
    let x = getAllInfoFromBooks();
    let filteredArray = [];
    for (i = 0; i < x.length; i++) {  
        if (x[i].title.toLowerCase().includes(input)) { 
            filteredArray.push(x[i])
        } 
    }
    console.log(filteredArray); 
    //return filteredArray;
    createCard(filteredArray);

}


function changeLanguage(word) {
    let updated = '';
    if (word == "en") {
        updated="English";
    } else if (word == "es") {
        updated="Spanish";
    } else if (word == "ca") {
        updated="Catalan";
    }


    return updated;
}



function createCard(array) {
    cardData = [];
    for (let i = 0; i < array.length; i++) {
        changeLanguage(array[i].language)
         cardData.push(
        `<div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front" id="card-image">
                    <img src="${array[i].cover}" alt="Avatar" style="width:300px;height:467px;">
                </div>
                <div class="flip-card-back" id="flip-card-data">
                    <h1>"${array[i].title}"<h1>
                    <p>${changeLanguage(array[i].language)}<p>
                    <a href="${array[i].cover}" class="btn btn-secondary" role="button" data-fancybox="images" data-caption="${array[i].description}">More info</a>
                </div>
            </div>
        </div>`)
    }
    let father = document.getElementById('container');
    father.innerHTML = cardData;
}


function giveMeAllInformationFromBook(bookTitle){
    let info = [];
    for (let i = 0; i < listOfBooks.length; i++) {
        if (listOfBooks[i].title.includes(bookTitle)) {
            info.push(listOfBooks[i].detail);
        } 
    }



    
    return info;   
}


/* function getLanguageButtons() {
    let languages = [];
    let correspondingBooks = [];
    let clickedButton = Array.from(document.querySelectorAll('input[type="button"]'));

    for (let i = 0; i < clickedButton.length; i++) {
        languages.push(clickedButton[i].value)    
    }

    for (let i = 0; i < listOfBooks.length; i++) {
        if (languages.includes(listOfBooks[i].language)) {
            correspondingBooks.push(listOfBooks[i])
        }    
    }

    if (languages.length==0) {
        return listOfBooks;
    } else {
        return correspondingBooks;
    }
} */

