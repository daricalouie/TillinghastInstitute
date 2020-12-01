
const searchbar = document.getElementById("search-bar");
const searchButton = document.getElementById("search-submit");

const resultsWindow = document.getElementById("results-window");
const results = document.getElementById("search-results");


function searchHandler(){
    s = searchbar.search.value.trim();
    searchterm = s.toLowerCase().replace(/\s/g, '');
    if(searchterm == "numerology"){
        results.innerHTML="1 result found for \"numerology\"<br><br>\
        Numerology number meanings:<br>\
        1: The goal-driven, independent and innovative.<br>\
        2: Gentle, indecisive and sensitive.<br>\
        3: Communicative, charmic and creative.<br>\
        4: Practical, loyal and hard-working.<br>\
        5. Curious, adaptable and resourceful.<br>\
        6. Supportive, nurturing and romantic.<br>\
        7. Analytical, spiritual and knowledgeable.<br>\
        8. Enduring, ambitious and balanced.<br>\
        9. Awakening, enlightened and healing.<br>"
    }else if(searchterm== "apertio"){
        results.innerHTML="APERTIO RESULTS"
    }else{
        results.innerHTML = "No results found for \"" + s + "\". Please refine your search.";
    }
    resultsWindow.style.padding = "20px 18px" ;    
    resultsWindow.style.maxHeight = resultsWindow.scrollHeight+"px";
    
    
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