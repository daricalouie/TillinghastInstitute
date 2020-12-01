
const searchbar = document.getElementById("search-bar");
const searchButton = document.getElementById("search-submit");

const resultsWindow = document.getElementById("results-window");



function searchHandler(){
    s = searchbar.search.value.trim();
    searchterm = s.toLowerCase().replace(/\s/g, '');
    if(searchterm== "t56-8920"){
        resultsWindow.innerHTML="<p>1 result found for  \"" + s + "\".</p><br>\
            <p><a href=\"t56-8920.html\">\
            Security Camera T56-8920</a>\
            <br>\
            Location: 259 N Pass Ave\
            </p>";
        vidBtn = document.getElementById("vid-btn");

    }else{
        resultsWindow.innerHTML = "<p>No results found for \"" + s + "\". Please refine your search.</p>";
    }    
}

searchButton.addEventListener("click", (e) => {
    console.log("search button pressed");
    searchHandler();
});
searchbar.addEventListener('submit', event => {
    // submit event detected
    event.preventDefault()
    console.log("search submitted");
    searchHandler();
});
