
// assign search field to a variable
const searchElement = document.getElementById('search');
const anchorElements = document.querySelectorAll('#gallery a');


function handleKeyUp() {
  // Get value of search field
  const searchValue = searchElement.value.toLowerCase();
  // Loop through anchor tags and hide unmatched items
  for (let i=0; i < anchorElements.length; i++) {
    // assign anchors to a variable
    const aElement = anchorElements[i];
    // assign caption value to a variable
    const capValue = aElement.getAttribute( 'data-caption' ).toLowerCase();
    // is search value in the caption 
    if ( capValue.indexOf(searchValue) == -1) {
      // hide anchor image
      aElement.style.display = 'none';
    } else {
      // show anchor image
      aElement.style.display = '';
        
    }
   
  }
    
}


// Add event to detect when something is typed
searchElement.addEventListener('keyup', handleKeyUp)
