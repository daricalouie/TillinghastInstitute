
const searchbar = document.getElementById("search-bar");
const searchButton = document.getElementById("search-submit");

const resultsWindow = document.getElementById("results-window");
const results = document.getElementById("search-results");


function searchHandler(){
    s = searchbar.search.value.trim();
    searchterm = s.toLowerCase().replace(/\s/g, '');
    if(searchterm== "t56-8920"){
        results.innerHTML="SECURITY CAMERA FOOTAGE"
    }else{
        results.innerHTML = "No results found for \"" + s + "\". Please refine your search.";
    }

    
    
}

searchButton.addEventListener("click", (e) => {
    console.log("search button pressed");
    searchHandler();
})
searchbar.addEventListener('submit', event => {
    // submit event detected
    event.preventDefault()
    console.log("search submitted");
    searchHandler();
  })