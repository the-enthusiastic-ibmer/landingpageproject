// Global Variables
/* Variable for Window Inner Height */
const windowHeight = window.innerHeight;


// Document query selector used to locate the section tags
const sections = document.querySelectorAll('section');

// Select the Element Id where the Navbar appends an unordered list
let navUl = document.getElementById('navbar__list');


// Empty Object used to dynamically create Navbar sections and page elements.
// Populated by a for loop at the Main start of the script.
/* Example: 
sectionObj = { 
  section1:{
    id: section1
    element: document.getElementById(section1);
    }
  };
*/
const sectionObj = {};



/* * * * * * * * * * * * * * * * * * * * * *
// Functions here
/* * * * * * * * * * * * * * * * * * * * * */

function pageScroll(){
  let pageElement = event.target.innerText;
  //let clickedElement = event.target;
  //clickElement.removeAttribute('class', 'activeclass');
  //clickElement.setAttribute('class', 'activeclass');
  for (let activeSection in sectionObj){
      if (activeSection === pageElement){ 
        // Access the page section element from the sectionObj and using bracket notation and call the scrollIntoView method.
        sectionObj[activeSection].element.scrollIntoView({behavior: "smooth", block:"center", inline:"center"});
        // To make the element active, add the 'activeclass' to the same element.      
      sectionObj[activeSection].element.classList.toggle('activeclass',true);
      document.getElementById(activeSection).setAttribute('class', 'activeclass')  
      } else {
        // Remove the 'activeclass' class from all the other elements except the one within view.
        sectionObj[activeSection].element.classList.toggle('activeclass', false);
        document.getElementById(activeSection).removeAttribute('class', 'activeclass')  
        //console.log("Off"+activeSection);
      }
    }
}

// The createUlItem function is called from the main
// Add an event listener for each list item in the  
function createUlItem(liName){
  // Create a 'li' Element
  let liItem = document.createElement('li');
  liItem.innerHTML = liName;
  liItem.id = liName;
  // Add event listerner and scroll to the section
  liItem.addEventListener('click', pageScroll);
  return liItem;
}

// Main Here
// Build the Navbar
// Create sectionObj and Create Navbar*/
for (let i = 0;i<sections.length;i++){
  secElement = sections[i];
  secId = sections[i].id;
  // list item for the unordered list
  liItem = secId;
  // Populate the sectionObj to be referenced later
  sectionObj[secId] = {id:'#'+secId,element:secElement}
  // Create the Navbar - pass each item in the CreateUlItem function
  navUl.appendChild(createUlItem(liItem));
}

// Create a listner for the scrollball and call the pageScroll function again
window.addEventListener('scroll', (event)=>{

  // Prevent Default event
  //event.preventDefault()
  // Iterate through sectionObj Obects obtaining getBoundingClientRect object
  for (let scrollSection in sectionObj){
    scrollElementRect = sectionObj[scrollSection].element.getBoundingClientRect();
    if (scrollElementRect.bottom < windowHeight && scrollElementRect.top > 0){
        sectionObj[scrollSection].element.classList.add('activeclass'); 
      } else {
        sectionObj[scrollSection].element.classList.remove('activeclass'); 
      } /* Remove the class 'activeclass' from the element */
    }
});