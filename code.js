// To run this assignment, right click on index.html in the Visual Studio Code file explorer to the left
// and select "Open with Live Server"

// You can access the story by using the pages array.
// You can find the pages array in story.js
// The first page is at index 0.
console.log(pages[0]);

let endingPages = [4, 9, 13, 17, 19, 20];
let currentPage = 0;

// Your Code Here.

let ending = function (currentPage) {

  for (let index = 0; index < endingPages.length; index++) {

    if (currentPage === endingPages[index]) {
      
      return true
    } 
  } return false
}



let storySoFar = ""
while (currentPage !== null) {

  currentPage = prompt(`${pages[currentPage]}`)
  if(currentPage === null){
    break
  }
  currentPage = parseInt(currentPage)
  if (ending(currentPage) === true) {
    storySoFar += `<p>${storySoFar}</p>` + `<p>${pages[currentPage]}</p>`
    currentPage = null
   
  } else {
    storySoFar = `<p>${storySoFar}</p>` + `<p>${pages[currentPage]}</p>`


  }
}



// printOnPage()
document.write(`<p>${storySoFar} <h1>GAME OVER</h1></p>`)
