// Global Variables
/* Variable for Window Inner Height */
const windowHeight = window.innerHeight;

// Document query selector used to locate the section tags
const sections = document.querySelectorAll('section');

//  Select the Element Id where the Navbar appends an unordered list
let navUl = document.getElementById('navbar__list');

// Empty Object used to dynamically create Navbar sections and page elements.
// Populated by a for loop at the Main start of the script.
const sectionObj = {};


/* * * * * * * * * * *
// Functions go here
/* * * * * * * * * **/
function pageScroll(){
  let pageElement = event.target.innerText;
  //document.getElementById(pageElement).scrollIntoView();
  console.log(sectionObj[pageElement].element,pageElement);
  
  sectionObj[pageElement].element.scrollIntoView();

  for (let pagesection in sectionObj){
    if (pagesection === pageElement){
      console.log("ON:"+pagesection)
      document.getElementById(pageElement).classList.add('activeclass');
      //sectionObj[pageElement].element.classList.toggle('activeclass');
    } else {
      document.getElementById(pageElement).classList.remove('activeclass');
      //sectionObj[pageElement].element.classList.remove('activeclass');
      console.log("Off:"+pagesection);
    }
  } //sectionObj[pageElement].element.classList.toggle('activeclass');
  
  //for (let pageSection in sectionObj){
  //  if (pageElement !== pageSection){
  //    sectionObj[pageElement].element.classList.remove('activeclass');
  //    console.log("Inactive"+pageElement, pageSection);
  //  }
  //} 
  //document.getElementById(pageElement).classList.toggle('activeclass');
}

function createUlItem(liName){
  // Create a 'li' Element
  let liItem = document.createElement('li');
  liItem.innerHTML = liName;
  
  //liItem.addEventListener('click', pageScroll);
  liItem.addEventListener('click', (event)=>{
    let pageElement = event.target.innerText;
    for (var activeSection in sectionObj){
      if (activeSection === pageElement){ 
        //document.getElementById(pageElement).scrollIntoView();
        // Access the page section element and scrollIntoView method by calling the sectionObj using bracket notation.
        sectionObj[pageElement].element.scrollIntoView();
        // To make the page active, add the 'activeclass' to the same element.
        
        sectionObj[pageElement].element.classList.add('activeclass');        
      } else {
        // Remove the 'activeclass' class from all the other elements except the one within view.
        sectionObj[activeSection].element.classList.remove('activeclass');
      }
    }
  });
  return liItem;
}

/* Create sectionObj and Create Navbar*/
for (var i = 0;i<sections.length;i++){
  secElement = sections[i];
  secId = sections[i].id;
  liItem = secId;
  sectionObj[secId] = {id:'#'+secId,element:secElement}
  // Create the Navbar - pass each item in the CreateUlItem function
  navUl.appendChild(createUlItem(liItem));
}

//console.log(navObj);
/*for (const [key, val] of Object.entries(navObj)){
  console.log(`${key},${val}`);
}*/

// Create a Listner for the scrollball
window.addEventListener('scroll', (event)=>{
  // Prevent Default event
  event.preventDefault()
  // Iterate through sectionObj Obects obtaining getBoundingClientRect object
  for (var scrollSection in sectionObj){
    scrollElementRect = sectionObj[scrollSection].element.getBoundingClientRect();
    if (scrollElementRect.bottom < windowHeight && scrollElementRect.top > 0){
        sectionObj[scrollSection].element.classList.add('activeclass'); 
      } else {
        sectionObj[scrollSection].element.classList.remove('activeclass'); 
      } /* Remove the class 'activeclass' from the element */
    }
});