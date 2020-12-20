
const searchbar = document.getElementById("search-bar");
const searchButton = document.getElementById("search-submit");

const resultsWindow = document.getElementById("results-window");



function searchHandler(){
    s = searchbar.search.value.trim();
    searchterm = s.toLowerCase().replace(/\s/g, '');
    if(searchterm== atob("dDU2LTg5MjA=")){
        resultsWindow.innerHTML="<p>1 result found for  \"" + s + "\".</p><br>\
            <p><a href=\"" + atob("dDU2LTg5MjAuaHRtbA==") +"\">\
            Security Camera "+ atob("VDU2LTg5MjA=") + "</a>\
            <br>\
            Location: 259 N Pass Ave\
            </p>";

    }else if(searchterm == "iamcheatingrightnow"){
        resultsWindow.innerHTML="<p>1 result found for  \"" + s + "\".</p><br>\
        <p><a href=\"" + atob("aW1nL3NlY3VyaXR5LXN0b2NrLm1vdg==") +"\">\
            Security Camera "+ atob("VDU2LTIzNTA=") + "</a>\
            <br>\
            Location: 10895 Le Conte Ave\
            </p>";
    }
    else{
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
